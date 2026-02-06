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
        setEmail( formData.get("email") );

        console.log( "Email is: ", formData.get("email") );

        try {
          
          const response = await axios.post(`${API_BASE_URL}/api/user/email/`, formData); 
        
          // If response is 200, then user has an account
          if (response.status === 200) {
            
            setUserHasAccount(true);
            setCheckoutSteps("step2");

          }


        } catch (error) {

          console.log("The email is not correct, please try again");
          
          // in case of failed response from the server
          setUserHasAccount(false);
          setCheckoutSteps("step3");
        
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