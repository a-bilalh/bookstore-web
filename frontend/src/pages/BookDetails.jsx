import React from "react";
import { useBook } from "../services/api";
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
    const book = useBook(id);
    const { cartItems, addToCart } = useCart();

    const handleClick = (book) => {
        console.log("HandleClick, Number of items in Cart before adding:", cartItems.length);
        addToCart(book);
    }
 
    
    
    // Show loading state if book details are not yet available
    if (!book) {
        return <div>Loading...</div>;
    }

    // Render book details
    return (
        <main className={styles.bookDetailsContainer}>
            <div className={styles.bookDetails_container_img}> 
                {book.cover_image ? <img src={book.cover_image}  alt={book.title} /> 
                 : <h1>Cover Not Available</h1>} 
            </div>
            <section className={styles.bookDetails_container_section}>
                <div>
                    <div className={styles.bookDetails_container_section_title}>{book ? book.title : "Loading..."}</div>
                    <div><CartIcon itemCount={cartItems.length} /></div>
                </div>
                <div className={styles.bookDetails_container_section_author}>{book.author}</div>
                <div className={styles.bookDetails_container_section_description}>{book.description}</div>
                <div className={styles.bookDetails_container_section_price}>{book.price}</div>
                <button 
                    onClick={() => handleClick(book)} 
                    className={styles.primaryButton}>
                        Add to Cart
                </button>
                <Link to="/" className={styles.backLink}>Back to Home</Link>
            </section> 
            
        </main>

    );
}