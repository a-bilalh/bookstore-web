import React from 'react';
import styles from './CartIcon.module.css';
import { FaShoppingCart } from 'react-icons/fa';



export default function CartIcon( {itemCount} ) {
    return (
        <div className={styles.cartIcon}>
            <FaShoppingCart size={24} />    
            { itemCount > 0 && (
                
                <span className={styles.itemCount}>
                    {itemCount}
                </span>
                
            )}
        </div>
    );
}