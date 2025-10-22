import axios from "axios";
import { API_BASE_URL } from "../config";
import { useState, useEffect } from 'react';



export const useFetchBooks = () => {
   
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/books/`)
            .then(response => {
                setBooks(response.data);
            }) 
        .catch(error => {
            console.error("Error fetching books:", error);
        })
    }, []);
    return books;

};

