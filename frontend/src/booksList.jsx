
import { useBooksList } from './services/api';
import './booksList.css';


const BooksList = () => {
    
    const books = useBooksList();

        return (
            <div>
              <h1>Books List</h1>
                <ul>
                  {books.map(book => (
                    <li key={book.id}>
                      {book.title} by {book.author}
                        {book.cover_image ? <img src={book.cover_image} alt={book.title} className="book-cover" /> 
                         : null }
                    </li>
                ))}
                </ul>
            </div>
    );
}

export default BooksList;