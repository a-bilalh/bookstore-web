import React from "react";
import { useBookDetails } from "../services/api";
import { useParams } from "react-router-dom";
import styles from './BookDetails.module.css';

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
        <main className={styles.bookDetailsContainer}>
            <div className={styles.bookDetails_container_img}> {bookDetails.cover_image ? <img src={bookDetails.cover_image}  alt={bookDetails.title} /> 
                 : <h1>Cover Not Available</h1>} </div>
            <section>
                <div>{bookDetails ? bookDetails.title : "Loading..."}</div>
                <div>{bookDetails.author}</div>
                <div>{bookDetails.description}</div>
                <div>{bookDetails.price}</div>
                <button>Add to Cart</button>
                <a href="/">Back to Home</a>
            </section> 
        </main>

    );
}