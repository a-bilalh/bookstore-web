import styles from './bookDisplay.module.css';




function BookDisplay({book}) {
    
    return (

        <div className={styles.container}>

            <div className={styles.picDiv}>
                {book.cover_image ? <img src={book.cover_image} alt={book.title} /> 
                 : <h1>Cover Not Available</h1>}
            </div>
            <div className={styles.textDiv}> 
                {book.title} by {book.author}
            </div>

        </div>
    )
}

export default BookDisplay;