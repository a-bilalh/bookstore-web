import axios from "axios";
import { API_BASE_URL } from "../config";
import styles from "./LoginForm.module.css";



// Helper function to save token to localStorage
function saveToken(token) {
    if (!token) {
        localStorage.removeItem("access");
    } else {
        localStorage.setItem("access", token);
    }
}

// changes object destructing to props object. { closeLogin, handleSetTokens }
export default function LoginForm( props ) {


    async function submitLogIn(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {

            const response = await axios.post(`${API_BASE_URL}/api/login/`, formData);

            console.log("Response from Login API:", response);

            if (response.status === 200) {
                alert("Login successful!");
                // Save tokens to localStorage
                saveToken(response.data.access_token);
                saveToken(response.data.refresh_token);

                // Update access token state with new tokens
                props.handleSetTokens(response.data.access_token);
                props.closeLogin();

                // Newly added feature. If this argument is passed. Then set new state variable
                if (props.setCheckoutSteps) {
                    props.setCheckoutSteps("step3")
                }

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
                <button type="button" onClick={props.closeLogin}>Cancel</button> {/* changed to props. */}
            </form>
        </div>
    )
}