import styles from './OrderSummary.module.css';
import { Link } from "react-router-dom";


// Order Summary needs: Total price, estimated tax, shipping cost, final total


export default function OrderSummary( { cartItems, actionLabel, destination, onClick } ) {


    function calculateSubtotal() {
        let itemTotal = 0;
        for (const [book, quantity] of cartItems) {
            itemTotal += book.price * quantity;
        }
        return itemTotal;
    }






    return (

        <div className={styles.orderSummaryMainDiv}>

          <h3 className={styles.orderSummaryTitle}>Order Summary</h3>

          <p>Total Items: {cartItems.size}</p>  

          <p>Subtotal: ${ calculateSubtotal().toFixed(2) }</p>
          

          <button onClick={onClick}>{actionLabel}</button>


        </div>

    )
}