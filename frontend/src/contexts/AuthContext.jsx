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
        console.log("Checking isLoggedIn with access token:", !!accessToken); // temporary log
        console.log("Current Access Token type in AuthContext, localstorage:", typeof(accessToken)); // temporary log
        return !!accessToken;
    }

    // Function to handle user logout
    const handleLogout = async() => {
        console.log("Logging out with access token:", accessToken); // temporary log
        await Logout( setAccessToken );
    }

    // Function to set tokens after login or registration
    const handleSetTokens = ( accessTokens ) => {
        setAccessToken(accessTokens);
    }


    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogout, handleSetTokens }}>
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

