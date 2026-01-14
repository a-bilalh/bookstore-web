import styles from './Header.module.css';
import CartIcon from './CartIcon.jsx';
import SearchBar from './Header/SearchBar.jsx';
import useCart from '../contexts/CartContext.jsx';
import AuthButton from './Header/AuthButtons.jsx';


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
export default function Header( { handleRegistration
                                  , handleLogin 
                                  , handleLogout
                                  , isLoggedIn } ) {


            const { cartItems, numberOfItemsInCart } = useCart();

                                    
  return (

    // TO:DO Button onClick was added to the Create Account button

    <div className={styles.headerDev}>

        <header>
          <h1>AB Book Store</h1>
        </header>

        <SearchBar />


        {!isLoggedIn && <AuthButton onClick={handleRegistration} content={"Create Account"} /> }


        {!isLoggedIn && <AuthButton onClick={handleLogin} content={"Log In"} /> }
    

        { isLoggedIn && <AuthButton onClick={handleLogout} content={"Log Out"} /> }


        <CartIcon itemCount={numberOfItemsInCart} />

        
    </div>  
  );
}

