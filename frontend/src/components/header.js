import './header.module.css';
import { FaShoppingCart } from "react-icons/fa";





export function SearchBar() {
    return (
        <div>
            <input type="text" className="searchBar" placeholder="Search books..." />
        </div>
    );
}


export function CartIcon() {
    return (
        <div className="cartIcon"> 
            <FaShoppingCart size={24} />
        </div>
    );
}




export default function Header() {
  return (

    <div className="headerDev">


        <header>
            <h1>AB Book Store</h1>
        </header>
        <SearchBar />
        <p className= "createAccountBtn">
            Create an Account
        </p>
        <CartIcon />


    </div>
  );
}

