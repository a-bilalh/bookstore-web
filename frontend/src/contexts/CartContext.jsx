import { createContext, useState, useContext, useEffect } from "react";

// Create a Context for the cart
const CartContext = createContext(null);


/* 
*  Create a provider component
*  Used in Header and BookDetails
*/
export function CartProvider({ children }) {

    // State to hold cart items as a Map(item, quantity)
    const [cartItems, setCartItems] = useState( new Map() );

    // Load cart from local storage on initial render
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cart"));
            if (saved) {
                setCartItems(new Map(saved));
            }
        }, []);

    
    // save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", 
            JSON.stringify([...cartItems]));
    }, [cartItems]);



    // Function to add an item to the cart
    function addToCart(item) {
        setCartItems( prevItems => {
            const newMap = new Map(prevItems);

            const id = item.id;
            newMap.set( id, {
                item, quantity: (newMap.get(id)?.quantity || 0) + 1 }
            );
            return newMap;
        });
    }



    // Function to remove an item from the cart
    function removeFromCart(item) {

        setCartItems( prevItems => {

            const newMap = new Map(prevItems);

            const id = item.id;
            if (newMap.has(id)) {
                const currentQuantity = newMap.get(id)?.quantity || 0;

                if (currentQuantity > 1) {
                    newMap.set(id, { item, quantity: currentQuantity - 1 });
                } else {
                    newMap.delete(id);
                }
            }
            return newMap;
        });         
    }



    // Function to delete an item completely from the cart
    function deleteFromCart(item) {
        setCartItems( prevItems => {
            const id = item.id;

            const newMap = new Map(prevItems);
            newMap.delete(id);
            return newMap;
        });
    }



    // Function to get the total number of items in the cart
    function numberOfItemsInCart() {
        const values = [...cartItems.values()];
        return values.reduce((sum, { quantity }) => sum + quantity, 0);
    }


    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, numberOfItemsInCart, removeFromCart, deleteFromCart }}>  
            {children}
        </CartContext.Provider>
    );
}



// Custom hook to use the CartContext
export default function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

