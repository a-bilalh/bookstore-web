import useCart from '../contexts/CartContext.jsx';


export default function Cart() {

    const { cartItems, removeFromCart } = useCart();


    return (
        <div>
          <h1>Cart Page</h1>
        </div>
    );

}