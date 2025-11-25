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




export default function Header() {
  return (

    <div className={styles.headerDev}>


        <header>
            <h1>AB Book Store</h1>
        </header>
        <SearchBar />
        <p className={styles.createAccountDiv}>
            Create an Account
        </p>
        <CartIcon />
        
    </div>
  );
}

