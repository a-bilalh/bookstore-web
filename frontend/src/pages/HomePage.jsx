import RegistrationForm from "../components/RegistrationForm";
import MyHorizontalList from "../components/BooksRowDisplay.jsx";
import Header from "../components/header.js";
import LoginForm from "../components/LoginForm.jsx";
import { useState } from "react";
import style from './HomePage.module.css';



export default function Home() {

    const[showRegistrationForm, setShowRegistrationForm] = useState(false);
    const[showLoginForm, setShowLoginForm] = useState(false);



        
    return (
        <>
            <Header setShowRegistrationForm={setShowRegistrationForm} setShowLoginForm={setShowLoginForm} />
            <MyHorizontalList category={"fiction"} count={10}/>
            <MyHorizontalList category={"nonfiction"} count={10}/>

            <div className={style.formPosition}>
                {showRegistrationForm && <RegistrationForm closeRegister={() => 
                        setShowRegistrationForm(false)} showLoginForm={() => setShowLoginForm(true)} />}
            </div>
            <div className={style.formPosition}>
                {showLoginForm && <LoginForm closeLogin={() => setShowLoginForm(false)} />}
            </div>
        </>
    )

}