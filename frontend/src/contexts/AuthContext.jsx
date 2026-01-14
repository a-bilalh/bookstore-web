import React, { createContext, useState } from "react";
import Logout from "../components/LogoutForm.jsx";




// Create a context for authentication
const AuthContext = createContext(null);


// Create a AuthProvider component
export function AuthProvider({ children }) {

    // State to hold the access token
    const [accessToken, setAccessToken] = useState( localStorage.getItem("access") || null );


    // Function to check if the user is logged in
    function isLoggedIn() {
        console.log("Access Token in AuthContext, isLoggedIn function:", accessToken);
        return !!accessToken;
    }

    const handleLogout = async() => {
        await Logout( setAccessToken );
    }


    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}


// Custom hook to use the AuthContext
export default function useAuth() {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

