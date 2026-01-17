


/* Component to display book in the cart
*  Args: book - book object
*/
export default function CartBookDisplay( book ) {

    return (
        <div>
            {book.image && <img src={book.image} alt={book.title} />}
            <h2>Cart Book Display Component</h2>
            <p>Book Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
        </div>
    );

}