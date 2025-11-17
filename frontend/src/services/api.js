import axios from "axios";
import { API_BASE_URL } from "../config";
import { useState, useEffect } from 'react';



export const useBooksList = (category, count) => {
   
    const [books, setBooks] = useState([]);
    
    useEffect(() => {

        const fetchBooks = async () => {
            try {
                
                const url = new URL(`${API_BASE_URL}/api/books/random`);
                url.searchParams.append('category', category);
                url.searchParams.append('count', count);
                const response = await axios.get( url.toString() );

                console.log("Fetched books data:", response.data);
                console.log("Type of response data:", typeof response.data);
                setBooks(response.data);
            } catch (err) {
                console.error("Error fetching books:", err);
            }
        };
        fetchBooks();
    }, []);
    return books;
};
