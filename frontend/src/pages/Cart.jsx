import useCart from '../contexts/CartContext.jsx';
import CartBookDisplay from '../components/Cart/CartBookDisplay.jsx';
import styles from './Cart.module.css';


export default function Cart() {

    const { cartItems, removeFromCart } = useCart();
    const booksArray = [...cartItems.keys()];

    return (
        <div>


          <div className={styles.cartTitle}>
            <h1>Shopping Cart</h1>
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