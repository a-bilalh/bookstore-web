import styles from './OrderSummary.module.css';



// Order Summary needs: Total price, estimated tax, shipping cost, final total


export default function OrderSummary( { cartItems } ) {

    return (

        <div className={styles.orderSummaryMainDiv}>

          <h2 className={styles.orderSummaryTitle}>Order Summary</h2>

          <p>Total Items: {cartItems.length}</p>

          {/* Additional order summary details can be added here */}

        </div>

    )
}