import useCart from '../contexts/CartContext.jsx';
import CartBookDisplay from '../components/Cart/CartBookDisplay.jsx';
import styles from './Cart.module.css';
import OrderSummary from '../components/Cart/OrderSummary.jsx';


export default function Cart() {


    const { cartItems, removeFromCart, deleteFromCart, addToCart } = useCart();
    const booksArray = [...cartItems.keys()];


    // Function to get number of books in cart
    const numberOfBooks = (book) => cartItems.get(book) || 0;



    return (
        <div>


          <div className={styles.cartTitle}>
            <h1>Shopping Cart</h1>
          </div>

          <div className={styles.cartBooksAndSummary}>
            <div>
                {booksArray.map( book => (
                    numberOfBooks(book) > 0 && <CartBookDisplay key = {book.id} book = {book} 
                                                                quantity = {numberOfBooks(book)} 
                                                                decreaseBook={removeFromCart}
                                                                increaseBook={addToCart} 
                                                                deleteFromCart={deleteFromCart}
                                                                 />
                ))}
            </div>

            <div>
              <OrderSummary cartItems={booksArray} />
            </div>
            
          </div>


        </div>

    );

}