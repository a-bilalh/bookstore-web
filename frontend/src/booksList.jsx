
import { useFetchBooks } from './services/api';



const BooksList = () => {
    
    const books = useFetchBooks();
    console.log("print books: ");

        return (
            <div>
                <h1>Books List</h1>
                <ul>
                    {books.map(book => (
                        <li key={book.id}>{book.title} by {book.author}</li>
                    ))}
                </ul>
            </div>
        );
    }

export default BooksList;