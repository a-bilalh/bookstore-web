import React from "react";
import { useBookDetails } from "../services/api";

/*
 * 1)  I need  cover photo for book details page
    2)  Book title
    3)  Author name
    4)  Book description
    5)  Price
    6)  "Add to Cart" button
    7)  "Back to Home" link
    8)  Styling to make it visually appealing

 * 
 */


export default function BookDetails( bookId ) {

    const bookDetails = useBookDetails(bookId);

    
    return (
        <div>
            Book Details Page
        </div>

    )


}