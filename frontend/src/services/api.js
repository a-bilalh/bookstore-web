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

                console.log("Fetched books data:", JSON.stringify(response.data, null, 2));
                
                setBooks(response.data);
            } catch (err) {
                console.error("Error fetching books:", err);
            }
        };
        fetchBooks();
    }, [category, count]);
    return books;
};
