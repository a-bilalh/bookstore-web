import { useState } from "react";
import EmailInput from "../components/Checkout/EmailInput";
import useAuth from "../contexts/AuthContext"
import PasswordInput from "../components/Checkout/PasswordInput";
import UserRegistration from "../components/Checkout/UserRegistration";
import useCart from "../contexts/CartContext";
import CartBookDisplay from "../components/Cart/CartBookDisplay.jsx";
import OrderSummary from "../components/Cart/OrderSummary.jsx";
import styles from "./checkout.module.css";
import ManageShippingAddress from "../components/Checkout/ManageShippingAddress.jsx";
import axios from "axios";
import { API_BASE_URL } from "../config";





export default function Checkout() {


  const { isLoggedIn, handleLogout, handleSetTokens } = useAuth();
  const { cartItems, removeFromCart, addToCart, deleteFromCart } = useCart();
  

  const [userHasAccount, setUserHasAccount] = useState(false);
  const [checkoutSteps, setCheckoutSteps] = useState(() => isLoggedIn() ? "step4" : "step1");

  // state to store user email during checkout process, used in both login and registration components
  const [email, setEmail] = useState("");

  
  // state to store the selected shipping address
  const [selectedAddress, setSelectedAddress] = useState(null);
  
  
  const booksArray = [...cartItems.keys()];

  // Function to get number of books in cart
  const numberOfBooks = (book) => cartItems.get(book) || 0;



  // Function to send address and cart to backend and create order, then redirect to payment page
  async function handleCheckout() {
    
        // send address and cart data to backend and create order
        const orderData = {
            address: selectedAddress,
            cartItems: Array.from(cartItems.entries()).map(([book, quantity]) => ({
                 book_id: book.id, 
                 quantity, 
                 price: book.price })) // convert Map to an array of objects for easier handling in backend
        };

        try {

            const response = await axios.post(`${API_BASE_URL}/orders/create/`, orderData, {
                headers: {
                   'Bearer': localStorage.getItem('accessToken')
                }
            })
            console.log("Order created successfully", response.data);

        } catch (error) {
            console.log("Order creation failed", error.response); 


        }


  }






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
              <ManageShippingAddress selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} />
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
              <OrderSummary cartItems={cartItems} actionLabel={"Continue to Payment"} destination="/payment" />
            </div>

          </div>
        </div>
      }

    </div>

    );
    
}