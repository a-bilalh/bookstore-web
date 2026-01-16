import styles from './Header.module.css';
import CartIcon from '../Cart/CartIcon.jsx';
import SearchBar from './SearchBar.jsx';
import useCart from '../../contexts/CartContext.jsx';
import AuthButton from './AuthButtons.jsx';
import { useState } from 'react';
import RegistrationForm from '../RegistrationForm.jsx';
import LoginForm from '../LoginForm.jsx';
import useAuth from '../../contexts/AuthContext.jsx';


/*
        <div className={styles.formPosition}>
            {showRegistrationForm && <RegistrationForm closeRegister={() => 
            setShowRegistrationForm(false)} showLoginForm={() => setShowLoginForm(true)} />}
        </div>
        <div className={styles.formPosition}>
            {showLoginForm && <LoginForm closeLogin={() => setShowLoginForm(false)} setAccessToken={setAccessToken} />}
        </div>

*/



// Header Component
// Contains the store title, search bar, account buttons, and cart icon
export default function Header() {


    const { cartItems, numberOfItemsInCart } = useCart();
    const { isLoggedIn, handleLogout, handleSetTokens } = useAuth();
    const isLoggedInValue = isLoggedIn();  // Call the function to get boolean value

    // new state that are transfered from HomePage.jsx
    const[showRegistrationForm, setShowRegistrationForm] = useState(false);
    const[showLoginForm, setShowLoginForm] = useState(false);

    const openRegistrationForm = () => {
        setShowRegistrationForm(true);
        setShowLoginForm(false); 
    }

    const openLoginForm = () => {
        console.log("openLoginForm called");
        setShowLoginForm(true);
        setShowRegistrationForm(false);
    }

    const closeRegisterationForm = () => {
        setShowRegistrationForm(false);
    }

    const closeLoginForm = () => {
        setShowLoginForm(false);
    }
                                    
  return (

    // TO:DO Button onClick was added to the Create Account button

    <div className={styles.headerDev}>

        <header>
          <h1>AB Book Store</h1>
        </header>

        <SearchBar />

        <div className={styles.createAccountDiv}>
            {!isLoggedInValue && <AuthButton onClick={openRegistrationForm} content={"Create Account"} /> }
        </div>


        <div>
            {!isLoggedInValue && <AuthButton onClick={openLoginForm} content={"Log In"} /> }
        </div>


        <div>
            { isLoggedInValue && <AuthButton onClick={handleLogout} content={"Log Out"} /> }
        </div>


        <div className={styles.formPosition}>
            {showRegistrationForm && <RegistrationForm closeRegister={closeRegisterationForm} showLoginForm={openLoginForm} />}
        </div>


        <div className={styles.formPosition}>
            {showLoginForm && <LoginForm closeLogin={closeLoginForm} handleSetTokens={handleSetTokens} />}
        </div>


        <CartIcon itemCount={numberOfItemsInCart()} />


    </div>  
  );
}

