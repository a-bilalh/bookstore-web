import styles from './OrderSummary.module.css';


// Order Summary needs: Total price, estimated tax, shipping cost, final total


export default function OrderSummary( { cartItems, actionLabel, destination, onClick } ) {


    function calculateSubtotal() {
        let itemTotal = 0.00;
        for (const [id, value] of cartItems) {

            const quantity = value.quantity;
            const price = value.item.price;

            itemTotal += price * quantity;
        }
        return itemTotal;
    }

    console.log( "order total: ", calculateSubtotal() );




    return (

        <div className={styles.orderSummaryMainDiv}>

          <h3 className={styles.orderSummaryTitle}>Order Summary</h3>

          <p>Total Items: {cartItems.size}</p>  

          <p>Subtotal: ${ calculateSubtotal().toFixed(2) }</p>
          

          <button onClick={onClick}>{actionLabel}</button>

        </div>

    )
}