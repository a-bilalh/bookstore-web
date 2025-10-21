import axios from "axios";
import { API_BASE_URL } from "../config";
import { useState, useEffect } from 'react';



export const useFetchBooks = () => {
   
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/`)
        console.log(`${API_BASE_URL}/api/books/`)
            .then(response => {
                setBooks(response.data);
                console.log("book is fetched");
            }) 
        .catch(error => {
            console.error("Error fetching books:", error);
        })
    }, []);
    console.log("books in api service: ")
    return books;

};

