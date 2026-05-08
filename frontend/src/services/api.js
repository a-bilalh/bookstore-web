import axios from "axios";
import { API_BASE_URL } from "../config";
import { useState, useEffect } from 'react';



export const useBooksList = (category, count) => {
   
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {

        const fetchBooks = async () => {

            if (!category || !count) {
                setLoading(false);
                return;
            }

            try {
                
                setLoading(true);
                const url = `${API_BASE_URL}/api/books/random/${category}/${count}/`;
                const response = await axios.get(url);

                
                setBooks(response.data);
            } catch (err) {
                console.error("Error fetching books:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, [category, count]);
    return { books, loading };
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