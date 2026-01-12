import { createContext, useState, useContext } from "react";

// Create a Context for the cart
const CartContext = createContext(null);


/* Create a provider component
*  Used in Header and BookDetails
*/
export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState( new Map() );

    // Function to add an item to the cart
    function addToCart(item) {
        setCartItems( prevItems => {
            prevItems.set( item, (prevItems.get(item) || 0) + 1 );
        });
    }

    // Function to get the total number of items in the cart
    function numberOfItemsInCart() {
        const values = [...cartItems.values()];
        return values.reduce((sum, count) => sum + count, 0);
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, numberOfItemsInCart }}>
            {children}
        </CartContext.Provider>
    );
}



// Custom hook to use the CartContext
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

