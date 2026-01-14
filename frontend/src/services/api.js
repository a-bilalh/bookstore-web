import axios from "axios";
import { API_BASE_URL } from "../config";
import { useState, useEffect } from 'react';



export const useBooksList = (category, count) => {
   
    const [books, setBooks] = useState([]);
    
    useEffect(() => {

        const fetchBooks = async () => {
            try {
                // if category or count are not provided yet, skip fetching
                if (category === undefined || count === undefined || category === null || count === null) {
                    return;
                }
                const url = `${API_BASE_URL}/api/books/random/${category}/${count}/`;
                const response = await axios.get(url);

                
                setBooks(response.data);
            } catch (err) {
                console.error("Error fetching books:", err);
            }
        };
        fetchBooks();
    }, [category, count]);
    return books;
};



export const useBook = (bookId) => {
    const [book, setBook] = useState(null);

    useEffect(() => {

        if ( !bookId ) {
            return;
        }
        const fetchBook = async () => {
            try {

                const url = `${API_BASE_URL}/api/books/${bookId}/`;
                const response = await axios.get(url);
                setBook(response.data);
            } catch (err) {
                console.error("Error fetching book:", err);
            }
        };
        fetchBook();
    }, [bookId]);
    return book;
};