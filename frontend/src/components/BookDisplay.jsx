import styles from './bookDisplay.module.css';
import { Link } from "react-router";




function BookDisplay({book}) {
    /* Update! Link was substituted for div to make each book clickable and navigate to book details page */
    
    return (

        <Link to={`/book/${book.id}`} className={styles.container}> 

            <div className={styles.picDiv}>
                {book.cover_image ? <img src={book.cover_image} alt={book.title} /> 
                 : <h1>Cover Not Available</h1>}
            </div>
            <div className={styles.textDiv}> 
                {book.title} by {book.author}
            </div>

        </Link>
    )
}

export default BookDisplay;