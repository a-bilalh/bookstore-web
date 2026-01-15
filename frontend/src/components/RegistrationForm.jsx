import axios from "axios";
import { API_BASE_URL } from "../config";
import styles from "./RegistrationForm.module.css";



/*
        TODO: ISSUES TO BE FIXED:
        if an existance user in the system try to register again with the same email, the system should
        give an clear message that the email is already registered. Right now it just give a generic error message.

*/



// Registration Form Component
export default function RegistrationForm({ closeRegister, showLoginForm }) {


    async function submistFormRegistration(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        try{
            console.log("Submitting resgitration form with data:", formData);
            const response = await axios.post(`${API_BASE_URL}/api/register/`, formData);

            if (response.status === 201) {

                alert("Registration successful! Please log in.");
                closeRegister();
                showLoginForm(); //New Changes 

            } else {
                alert("Registration failed. Please try again.");
            }

        } catch (error) {
            console.error("Error during registration:", error);     
        }
    }

    return (
        <div className = {styles.registrationFormContainer}>
            <h1> Registration Form </h1>
            <form onSubmit={submistFormRegistration}>
                <input type="text" name="email" placeholder="Email Address" /><br/>
                <input type="password" name="password" placeholder="Password" /><br/>
                <input type="password" name="confirm_password" placeholder="Confirm Password" /><br/>
                <button type="submit">Register</button>
                <button type="button" onClick={closeRegister}>Cancel</button>
            </form>
        </div>
    )
}
