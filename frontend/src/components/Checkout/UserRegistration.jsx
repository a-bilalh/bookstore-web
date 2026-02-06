import styles from './UserRegistration.module.css';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import saveToken from '../../utils/save-tokens';




export default function UserRegistration({ email, setCheckoutSteps, handleSetTokens }) {


    async function handleSubmit(e) {

        e.preventDefault();

        // Form Data
        const form = e.target;
        const formData = new FormData(form);
        formData.append("auto_login", true);  // to auto login after registration

        try {

            const response = await axios.post(`${API_BASE_URL}/api/register/`, formData);

            if (response.status === 201) {

                saveToken( "access", response.data.access_token );
                saveToken( "refresh", response.data.refresh_token );
                
                handleSetTokens( response.data.access_token );
                                

                alert("Registration successful! Please log in.");
                setCheckoutSteps("step4");  // have to fix that, not sure what value to set once logged in


            } else {
                alert("Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during registration:", error);     
        }


    }


    return (

      <div className={styles.mainContainerLayout}>

        <div className={styles.mainContainer}>

            <h2>Create an Account</h2>

            {/* Registration form */}
            <form onSubmit={handleSubmit}>

              <div className={styles.formFields}>

                <input type="text" name="email" defaultValue={email} />
                <input type="text" name="full_name" placeholder="Full Name" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="password" name="confirm_password" placeholder="Confirm Password" required />
                <button className={styles.submitButton} type="submit">Register</button>

              </div>
            
            </form>




        </div>

      </div>
    
);
}