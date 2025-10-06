import './header.css';
import { FaShoppingCart } from "react-icons/fa";





export function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search books..." />
        </div>
    );
}


export function CartIcon() {
    return (
        <div className="cart-icon"> 
            <FaShoppingCart size={24} />
        </div>
    );
}




function Header() {
  return (

    <div className="headerDev">


        <header>
            <h1>AB Book Store</h1>
        </header>
        <SearchBar />
        <CartIcon />


    </div>
  );
}


export default Header;