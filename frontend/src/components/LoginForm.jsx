import axios from "axios";
import { API_BASE_URL } from "../config";

export default function LoginForm({ closeLogin }) {


    async function submitLogIn(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await axios.post(`${API_BASE_URL}/api/login/`, formData);
            if (response.status === 200) {
                alert("Login successful!");
                closeLogin();
            } else {
                alert("Login failed. The Email or Password is incorrect. Please try again.");   
            }
        } catch (error) {
            console.error("Error during login:", error);
        }

    }


    return (
        <>
            <h1> Login Form </h1>
            <form onSubmit={submitLogIn}>
                <input type="text" name="email" placeholder="Email Address" /><br/>
                <input type="password" name="password" placeholder="Password" /><br/>
                <button type="submit">Login</button>
                <button type="button" onClick={closeLogin}>Cancel</button>
            </form>
        </>
    )
}