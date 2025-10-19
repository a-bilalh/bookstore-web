import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './config';    



const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/books/`)
            .then(response => {
                setBooks(response.data);
                console.log("book is fetched");
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
        }, []);

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