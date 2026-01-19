import useCart from '../contexts/CartContext.jsx';
import CartBookDisplay from '../components/Cart/CartBookDisplay.jsx';


export default function Cart() {

    const { cartItems, removeFromCart } = useCart();
    const booksArray = [...cartItems.keys()];

    console.log("Cart Component - cartItems type:",  cartItems);
    console.log("Cart Component - booksArray type:",  booksArray);
    return (
        <div>


          <div>
            <h1>Cart Page</h1>
          </div>

          <div>
            <div>
                {booksArray.map( book => (
                    <CartBookDisplay key = {book.id} book = {book} />
                ))}
            </div>
          </div>


        </div>

    );

}