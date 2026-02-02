import { API_BASE_URL } from '../../config';
import styles from './EmailInput.module.css'
import axios from 'axios';



// This method gets the email of the user and send it to database whether it exists or not. 
export default function EmailInput( {setUserHasAccount, setCheckoutSteps, setEmail} ) {

    

    async function handleSubmit(e) {
        
        e.preventDefault();

        // Read form data
        const form = e.target;
        const formData = new FormData(form);

        // Save the email; to be send back with password for token generation 
        setEmail( form.get("email") );

        try {
          
          const response = await axios.post(`${API_BASE_URL}/api/user/email/`, formData); 
        
          setUserHasAccount(response.status === 200);
          setCheckoutSteps("step2");


        } catch (error) {
          console.log("The email is not correct, please try again");
        }

    } 






    return (


      <div className={styles.mainContainerLayout}>

        <div className={styles.mainContainer} >

          <div className={styles.content}>
            <h3>Sign in or create an account</h3>
            <h4>Enter your email address </h4>

            <form onSubmit={handleSubmit}>
              <input name="email" />
              <button className={styles.submitButton} type='submit'>Continue</button>
            </form>


          </div>

        </div>

      </div>
    );


}