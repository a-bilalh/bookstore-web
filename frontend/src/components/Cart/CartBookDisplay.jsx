import styles from './CartBookDisplay.module.css';


/* Component to display book in the cart
*  Args: book - book object
*/
export default function CartBookDisplay( {book} ) {


    return (

        <div className={styles.cartMainContainer}>


          <div>
            {book.cover_image && <img className={styles.cartImage} src={book.cover_image} alt={book.title} />}
          </div>
          
          <div className={styles.cartInfoContainer}>

            {/* Book Title, Author, Price */}
            <div>
              <h3 className={styles.cartBookTitle}>{book.title}</h3>
              <span>by {book.author}</span>
              <h4 className={styles.cartBookPrice}>${book.price}</h4>
            </div>
            
            <div>
              {/*Quantity and subtotal section*/}
            </div>

          </div>


        </div>
    );

}