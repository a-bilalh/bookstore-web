import RegistrationForm from "../components/RegistrationForm";
import MyHorizontalList from "../components/BooksRowDisplay.jsx";
import Header from "../components/header.jsx";
import LoginForm from "../components/LoginForm.jsx";
import { useState } from "react";
import style from './HomePage.module.css';
import Logout from "../components/LogoutForm.jsx";



export default function Home() {

    const[showRegistrationForm, setShowRegistrationForm] = useState(false);
    const[showLoginForm, setShowLoginForm] = useState(false);
    const[accessToken, setAccessToken] = useState( localStorage.getItem("access") || null );
    const[cartItems, setCartItems] = useState([]);

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


    return (
        <>
            <Header handleRegistration={handleRegistration}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                    isLoggedIn={isLoggedIn}
                    />

            <MyHorizontalList category={"fiction"} count={10}/>
            <MyHorizontalList category={"nonfiction"} count={10}/>

            <div className={style.formPosition}>
                {showRegistrationForm && <RegistrationForm closeRegister={() => 
                    setShowRegistrationForm(false)} showLoginForm={() => setShowLoginForm(true)} />}
            </div>
            <div className={style.formPosition}>
                {showLoginForm && <LoginForm closeLogin={() => setShowLoginForm(false)} setAccessToken={setAccessToken} />}
            </div>
        </>
    )

}