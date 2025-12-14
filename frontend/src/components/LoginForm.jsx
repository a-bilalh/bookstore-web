import axios from "axios";
import { API_BASE_URL } from "../config";
import styles from "./LoginForm.module.css";


export default function LoginForm({ closeLogin, setAccessToken }) {


    async function submitLogIn(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {

            const response = await axios.post(`${API_BASE_URL}/api/login/`, formData);

            if (response.status === 200) {
                alert("Login successful!");
                localStorage.setItem("access", response.data.access);  // Store access token, works successfully
                localStorage.setItem("refresh", response.data.refresh); // Store refresh token, works successfully
                setAccessToken(response.data.access); // Update accessToken state in HomePage
                closeLogin();
            } else {
                alert("Login failed. The Email or Password is incorrect. Please try again.");   
            }
        } catch (error) {
            console.error("Error during login:", error);
        }

    }


    return (
        <div className={styles.loginFormContainer}>
            <h1> Login Form </h1>
            <form onSubmit={submitLogIn} >
                <input type="text" name="email" placeholder="Email Address" /><br/>
                <input type="password" name="password" placeholder="Password" /><br/>
                <button type="submit">Login</button>
                <button type="button" onClick={closeLogin}>Cancel</button>
            </form>
        </div>
    )
}