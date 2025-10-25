import axios from "axios";
import { API_BASE_URL } from "../config";
import { useState, useEffect } from 'react';



export const useBooksList = () => {
   
    const [books, setBooks] = useState([]);
    
    useEffect(() => {

        const fetchBooks = async () => {
             try {
                 const response = await axios.get(`${API_BASE_URL}/api/books/`);
                console.log("Fetched books data:", response.data);
                setBooks(response.data);
            } catch (err) {
                console.error("Error fetching books:", err);
            }
        };
        fetchBooks();
    }, []);
    return books;
};
