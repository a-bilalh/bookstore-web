import styles from './header.module.css';
import { FaShoppingCart } from "react-icons/fa";



export function SearchBar() {
    return (
        <div>
            <input type="text" className={styles.searchBar} placeholder="Search books..." />
        </div>
    );
}


export function CartIcon() {
    return (
        <div className={styles.cartIcon}> 
            <FaShoppingCart size={24} />
        </div>
    );
}



export default function Header({setShowRegistrationForm, setShowLoginForm}) {
  return (

    // TO:DO nutton onClick was added to the Create Account button

    <div className={styles.headerDev}>

        <header>
            <h1>AB Book Store</h1>
        </header>
        <SearchBar />
        <p className={styles.createAccountDiv}> 
            <button onClick={() => setShowRegistrationForm(true)}> Create an Account</button> 
        </p>
        <p> 
            <button onClick={() => setShowLoginForm(true)}> Log In</button> 
        </p>
        <CartIcon />
        
    </div>
  );
}

