


/* Component to display book in the cart
*  Args: book - book object
*/
export default function CartBookDisplay( {book} ) {

    console.log("CartBookDisplay Component - book type:", book);
    console.log("book.image:", book.cover_image);


    return (
        <div>
            {book.cover_image && <img src={book.cover_image} alt={book.title} />}
            <p>Book Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
        </div>
    );

}