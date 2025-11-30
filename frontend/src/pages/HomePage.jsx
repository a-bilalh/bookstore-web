import RegistrationForm from "../components/RegistrationForm";
import MyHorizontalList from "../components/BooksRowDisplay.jsx";
import Header from "../components/header.js";
import LoginForm from "../components/LoginForm.jsx";
import { useState } from "react";



export default function Home() {

    const[showRegistrationForm, setShowRegistrationForm] = useState(false);
    const[showLoginForm, setShowLoginForm] = useState(false);



        
    return (
        <>
            <Header setShowRegistrationForm={setShowRegistrationForm} />
            <MyHorizontalList category={"fiction"} count={10}/>
            <MyHorizontalList category={"nonfiction"} count={10}/>

            {showRegistrationForm && <RegistrationForm
                        closeRegister={() => setShowRegistrationForm(false)} LoginForm={LoginForm} />}
            {showLoginForm && <LoginForm closeLogin={() => setShowLoginForm(false)} />}
        </>
    )

}