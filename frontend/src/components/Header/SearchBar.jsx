
import { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import axios from 'axios';
import { API_BASE_URL } from '../../config';


// Search Bar Component
export default function SearchBar() {


    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {

        const delay = setTimeout(() => {
            if ( query.length > 1 ) {
                axios.get(`${API_BASE_URL}/api/books/search/?q=${query}`)
                    .then(res => setResults(res.data))
                    .catch(err => console.error(err));
            } else {
                setResults([])
            }
        }, 300 );

        return () => clearTimeout(delay);

    }, [query]);




    return (

      <div className={styles.searchContainer}>

          <input
                className={styles.searchBar}
                type="text" 
                placeholder="Search books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <ul className={styles.searchResult}>
                {
                    results.map((book) => (
                        <li key={book.id}>
                            {book.title} - {book.author}
                        </li>
                    ))
                }
            </ul>
      </div>
    );
}
