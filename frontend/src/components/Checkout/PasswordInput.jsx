import { API_BASE_URL } from '../../config';
import styles from './PasswordInput.module.css'
import axios from 'axios';
import saveToken from '../../utils/save-tokens';    



export default function PasswordInput( {setCheckoutSteps, email, handleSetTokens} ) {


    async function handleSubmit(e) {

        e.preventDefault()

        // Form Data
        const form = e.target;
        const formData = new FormData(form);

        // Append email to the FormData
        formData.append("email", email)

        try {

            // Send request to the following endpoint and get the response
            const response = await axios.post(`${API_BASE_URL}/api/login/`, formData);

            if ( response.status === 200 ) {

                alert("Login Successful")

                // console.log("Data received from backend after login request", response.data);

                // console.log("Tokens received from backend after login request", response.data.access_token, response.data.refresh_token);

                // save tokens to the memory
                saveToken( "access", response.data.access_token );
                saveToken( "refresh", response.data.refresh_token );

                // console.log("Confirm tokens are saved in local storage", localStorage.getItem('access'), localStorage.getItem('refresh'));

                handleSetTokens( response.data.access_token );
                
                // change the step of checkout page
                setCheckoutSteps("step4")
            }


        } catch (error) {

            console.log("Password is not correct, please try again")
        }
        
    }



    return (

        <div className={styles.mainContainerLayout}>

          <div className={styles.mainContainer}>
            <h3>Sign In</h3>
            <h3>Password</h3>
            
            <form onSubmit={handleSubmit}>

              <input type='password' name="password" required/>
              <button className={styles.submitButton} type='submit'>Sign In</button>

            </form>

          </div>

        </div>
    );



}