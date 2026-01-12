import styles from './Header.module.css';
import Logout from './LogoutForm.jsx';
import { useCart } from '../contexts/CartContexts.jsx';
import CartIcon from './CartIcon.jsx';
import SearchBar from './Header/SearchBar.jsx';
import { useState } from 'react';





// Header Component
// Contains the store title, search bar, account buttons, and cart icon
export default function Header() {

            const { cartItems, numberOfItemsInCart } = useCart();


            // new state that are transfered from HomePage.jsx
            const[showRegistrationForm, setShowRegistrationForm] = useState(false);
            const[showLoginForm, setShowLoginForm] = useState(false);
            const[accessToken, setAccessToken] = useState( localStorage.getItem("access") || null );


            const isLoggedIn = accessToken !== null;

            const handleLogin = () => {
            setShowLoginForm(true);
            setShowRegistrationForm(false);
            }

            const handleRegistration = () => {
            setShowRegistrationForm(true);
            setShowLoginForm(false);
            }

            const handleLogout = async() => {
            await Logout( setAccessToken );
            }



                                    
  return (

    // TO:DO nutton onClick was added to the Create Account button

    <div className={styles.headerDev}>

        <header>
            <h1>AB Book Store</h1>
        </header>

        <SearchBar />

        <p className={styles.createAccountDiv}> 
            {!isLoggedIn && <button onClick={handleRegistration}>Create an Account</button> }
        </p>

        <p> 
            {!isLoggedIn && <button onClick={handleLogin}>Log In</button> }
        </p>

        <p className={styles.createAccountDiv}>
            { isLoggedIn && <button onClick={handleLogout}>Log Out</button> }
        </p>

        <CartIcon itemCount={numberOfItemsInCart()} />
        
    </div>
  );
}

