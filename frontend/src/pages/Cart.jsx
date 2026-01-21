import useCart from '../contexts/CartContext.jsx';
import CartBookDisplay from '../components/Cart/CartBookDisplay.jsx';
import styles from './Cart.module.css';
import OrderSummary from '../components/Cart/OrderSummary.jsx';


export default function Cart() {

    const { cartItems, removeFromCart } = useCart();
    const booksArray = [...cartItems.keys()];

    return (
        <div>


          <div className={styles.cartTitle}>
            <h1>Shopping Cart</h1>
          </div>

          <div className={styles.cartBooksAndSummary}>
            <div>
                {booksArray.map( book => (
                    <CartBookDisplay key = {book.id} book = {book} />
                ))}
            </div>

            <div>
              <OrderSummary cartItems={booksArray} />
            </div>
            
          </div>


        </div>

    );

}