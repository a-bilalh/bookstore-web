import styles from './CartBookDisplay.module.css';
import { Minus, Plus, Trash2 } from 'lucide-react';

/* Component to display book in the cart
*  Args: book - book object, quantity - number of books in cart, decreaseBook - function to decrease book quantity
*/
export default function CartBookDisplay( {book , quantity, decreaseBook, increaseBook, deleteFromCart} ) {


    return (

        <div className={styles.cartMainContainer}>


          <div>
            {book.cover_image && <img className={styles.cartImage} src={book.cover_image} alt={book.title} />}
          </div>
          

          <div className={styles.cartInfo}>


            {/* Book Title, Author, Price */}
            <div className={styles.productInfo}>

              <h3 className={styles.cartBookTitle}>{book.title}</h3>
                <span>by {book.author}</span>
              <h4 className={styles.cartBookPrice}>${book.price}</h4>

            </div>
            

            <div className={styles.productQuantity}>

              {/*Quantity and subtotal section*/}
              <div>
                { quantity > 1 && <button onClick={() => decreaseBook(book)}><Minus size={16} /></button> }

                { quantity === 1 && <button onClick={() => deleteFromCart(book)}><Trash2 size={16} /></button> }
                  <span> {quantity} </span>  
                <button onClick={() => increaseBook(book)}><Plus size={16} /></button>
              </div>

              <div>
                <button onClick={() => deleteFromCart(book)}>Delete</button> | <button>Save for later</button>
              </div>

            </div>

          </div>


        </div>
    );

}