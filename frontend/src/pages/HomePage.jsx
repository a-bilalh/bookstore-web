import RegistrationForm from "../components/RegistrationForm";
import MyHorizontalList from "../components/BooksRowDisplay.jsx";
import LoginForm from "../components/LoginForm.jsx";
import { useState } from "react";
import styles from './HomePage.module.css';
import Logout from "../components/LogoutForm.jsx";

// temporary removed from header 
/*
    const[showRegistrationForm, setShowRegistrationForm] = useState(false);
    const[showLoginForm, setShowLoginForm] = useState(false);
    const[accessToken, setAccessToken] = useState( localStorage.getItem("access") || null );  // remove this 


    const isLoggedIn = accessToken !== null;

    const handleLogin = () => {
        setShowLoginForm(true);
        setShowRegistrationForm(false);
    }

    const handleRegistration = () => {
        setShowRegistrationForm(true);
        setShowLoginForm(false);
    }

    const handleLogout = async() => {
        await Logout( setAccessToken );
    }



*/



export default function Home() {

// temporary and needs to be removed if current design was working 
/*
                <Header handleRegistration={handleRegistration}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                    isLoggedIn={isLoggedIn}
                    />
*/
    return (
        <>

            <MyHorizontalList category={"fiction"} count={10}/>
            <MyHorizontalList category={"nonfiction"} count={10}/>

        </>
    )

}