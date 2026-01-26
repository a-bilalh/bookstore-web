import styles from './OrderSummary.module.css';
import { Link } from "react-router-dom";


// Order Summary needs: Total price, estimated tax, shipping cost, final total


export default function OrderSummary( { cartItems } ) {

    console.log("OrderSummary Component - type of cartItems:", typeof cartItems);
    console.log("OrderSummary Component - cartItems:", cartItems);

    function calculateSubtotal() {
        let itemTotal = 0;
        for (const [book, quantity] of cartItems) {
            itemTotal += book.price * quantity;
        }
        return itemTotal;
    }





    return (

        <div className={styles.orderSummaryMainDiv}>

          <h2 className={styles.orderSummaryTitle}>Order Summary</h2>

          <p>Total Items: {cartItems.size}</p>  

          <p>Subtotal: ${ calculateSubtotal().toFixed(2) }</p>
          
          <Link to="/checkout" className={styles.checkoutButton}>
            Checkout
          </Link>


        </div>

    )
}