import { useState } from "react";
import EmailInput from "../components/Checkout/EmailInput";
import useAuth from "../contexts/AuthContext"
import PasswordInput from "../components/Checkout/PasswordInput";
import UserRegistration from "../components/Checkout/UserRegistration";
import useCart from "../contexts/CartContext";
import CartBookDisplay from "../components/Cart/CartBookDisplay.jsx";
import OrderSummary from "../components/Cart/OrderSummary.jsx";
import styles from './checkout.module.css';
import ShippingAddress from "../components/Checkout/ShippingAddress.jsx";





export default function Checkout() {


  const { isLoggedIn, handleLogout, handleSetTokens } = useAuth();
  const { cartItems, removeFromCart, addToCart, deleteFromCart } = useCart();
  

  const [userHasAccount, setUserHasAccount] = useState(false);
  const [checkoutSteps, setCheckoutSteps] = useState(() => isLoggedIn ? "step4" : "step1");
  const [email, setEmail] = useState("");
  
  
  const booksArray = [...cartItems.keys()];

  // Function to get number of books in cart
  const numberOfBooks = (book) => cartItems.get(book) || 0;


    return (

    <div>
      

      { 
        checkoutSteps === "step1" && 
        <EmailInput setUserHasAccount={setUserHasAccount}
                    setCheckoutSteps={setCheckoutSteps}
                    setEmail={setEmail}
        /> 
      }


      {
        userHasAccount && 
        checkoutSteps === "step2" && 
        <PasswordInput setCheckoutSteps={setCheckoutSteps}
                       email={email}
                       handleSetTokens={handleSetTokens}
        />
      }


      {
        !userHasAccount && 
        checkoutSteps === "step3" && 
        <UserRegistration email={email} 
                          setCheckoutSteps={setCheckoutSteps}
                          handleSetTokens={handleSetTokens}
        />  
      }

      
      {/* step4 can be used instead of isLoggedIn if needed */}
      {
        isLoggedIn &&
        checkoutSteps === "step4" && 
        <div>
          <div className={styles.checkoutTitle}>
            <h2>Checkout Complete</h2>
          </div>

          <div className={styles.cartBooksAndSummary}>

            <div>
              <ShippingAddress />
            </div>

            <div>

              {booksArray.map( book => (
                  numberOfBooks(book) > 0 &&
                  <CartBookDisplay key = {book.id} book = {book} 
                    quantity = {numberOfBooks(book)} 
                    decreaseBook={removeFromCart}
                    increaseBook={addToCart} 
                    deleteFromCart={deleteFromCart}
                  />
              ))}

            </div>
            <div>
              <OrderSummary cartItems={cartItems} actionLabel={"Complete Checkout"} />
            </div>

          </div>
        </div>
      }

    </div>

    );
    
}