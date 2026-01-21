



// Order Summary needs: Total price, estimated tax, shipping cost, final total


export default function OrderSummary( { cartItems } ) {

    return (
        <div>
          <h2>Order Summary</h2>
          <p>Total Items: {cartItems.length}</p>
          {/* Additional order summary details can be added here */}
        </div>
    )
}