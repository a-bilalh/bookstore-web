import styles from './header.module.css';
import { FaShoppingCart } from "react-icons/fa";
import Logout from './LogoutForm';
import { useCart } from '../contexts/CartContexts.jsx';



export function SearchBar() {
    return (
        <div>
            <input type="text" className={styles.searchBar} placeholder="Search books..." />
        </div>
    );
}


export function CartIcon(itemCount) {
    return (
        <div className={styles.cartIcon}> 
            <FaShoppingCart size={24} />
            { itemCount > 0 && (
                <span className={styles.itemCount}>{itemCount}</span>
            )}
        </div>
    );
}




export default function Header({  handleRegistration
                                , handleLogin
                                , handleLogout
                                , isLoggedIn
                                }) {

            const { cartItems } = useCart();
                                    
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

        <CartIcon itemCount={cartItems.length} />
        
    </div>
  );
}

