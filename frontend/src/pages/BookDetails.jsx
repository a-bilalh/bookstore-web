import React from "react";
import { useBookDetails } from "../services/api";
import { useParams } from "react-router-dom";

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


export default function BookDetails( ) {

    const { id } = useParams();
    console.log("Book Details Component - bookId:", id);
    const bookDetails = useBookDetails(id);
    console.log("Book Details Component - bookDetails:", bookDetails);
    
    if (!bookDetails) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <p1> {bookDetails ? bookDetails.title : "Loading..."}</p1>
            <p1> {bookDetails.author}</p1>
            <p1> {bookDetails.description}</p1>
            <p1> {bookDetails.price}</p1>
            <button>Add to Cart</button>
            <a href="/">Back to Home</a>
        </div>

    )

}