import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import useAuth from "../contexts/AuthContext.jsx";
import { useState } from "react";



// HeaderLayout component to include Header in all pages inside this layout
export default function HeaderLayout( children, props ) {

    const { isLoggedIn, handleLogout } = useAuth();

    // new state that are transfered from HomePage.jsx
    const[showRegistrationForm, setShowRegistrationForm] = useState(false);
    const[showLoginForm, setShowLoginForm] = useState(false);


    return (
        <>
            <Header handleRegistration={ () => {
                        setShowRegistrationForm(true);
                        setShowLoginForm(false); 
                    }}

                    handleLogin={ () => {
                        setShowLoginForm(true);
                        setShowRegistrationForm(false);
                    }}   
                    
                    handleLogout={handleLogout}

                    isLoggedIn={isLoggedIn} 
             />
            <Outlet />
        </>
    );
}
