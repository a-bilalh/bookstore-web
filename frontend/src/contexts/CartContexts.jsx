import { createContext, useState, useContext } from "react";

// Create a Context for the cart
const CartContext = createContext(null);


// Create a provider component
export default function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    function addToCart(item) {
        setCartItems((prevItems) => [...prevItems, item]);
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
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

