import React from "react";
import { useBookDetails } from "../services/api";
import { Link, useParams } from "react-router-dom";
import styles from './BookDetails.module.css';
import { CartIcon } from "../components/header.jsx";
import { useCart } from "../contexts/CartContexts.jsx";

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
    const { cartItems } = useCart();
    
    if (!bookDetails) {
        return <div>Loading...</div>;
    }

    return (
        <main className={styles.bookDetailsContainer}>
            <div className={styles.bookDetails_container_img}> 
                {bookDetails.cover_image ? <img src={bookDetails.cover_image}  alt={bookDetails.title} /> 
                 : <h1>Cover Not Available</h1>} 
            </div>
            <section className={styles.bookDetails_container_section}>
                <div>
                    <div className={styles.bookDetails_container_section_title}>{bookDetails ? bookDetails.title : "Loading..."}</div>
                    <div><CartIcon itemCount={cartItems.length} /></div>
                </div>
                <div className={styles.bookDetails_container_section_author}>{bookDetails.author}</div>
                <div className={styles.bookDetails_container_section_description}>{bookDetails.description}</div>
                <div className={styles.bookDetails_container_section_price}>{bookDetails.price}</div>
                <button className={styles.primaryButton}>Add to Cart</button>
                <Link to="/" className={styles.backLink}>Back to Home</Link>
            </section> 
            
        </main>

    );
}