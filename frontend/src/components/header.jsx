import styles from './Header.module.css';
import Logout from './LogoutForm.jsx';
import { useCart } from '../contexts/CartContexts.jsx';
import CartIcon from './CartIcon.jsx';


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



// Search Bar Component
export function SearchBar() {
    return (
        <div>
            <input type="text" className={styles.searchBar} placeholder="Search books..." />
        </div>
    );
}




// Header Component
// Contains the store title, search bar, account buttons, and cart icon
export default function Header({  handleRegistration
                                , handleLogin
                                , handleLogout
                                , isLoggedIn
                                }) {

            const { cartItems, numberOfItemsInCart } = useCart();
                                    
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

