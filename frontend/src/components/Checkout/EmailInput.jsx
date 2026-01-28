import { API_BASE_URL } from '../../config';
import styles from './EmailInput.module.css'
import axios from 'axios';



// This method gets the email of the user and send it to database whether it exists or not. 
export default function EmailInput( {setUserHasAccount} ) {

    async function handleSubmit(e) {
              
        e.preventDefault();

        // Read form data
        const form = e.target;
        const formData = new FormData(form);

        try {
          
          // TODO: fix this url!
          const response = await axios.post(`${API_BASE_URL}/api`, formData);
          if (response === 200) {
            setUserHasAccount(true)
          } else {
            setUserHasAccount(false);
          }

        } catch (error) {
          console.log("The email is not correct, please try again")
        }

    } 






    return (


      <div className={styles.mainContainerLayout}>

        <div className={styles.mainContainer} >

          <div className={styles.content}>
            <h3>Sign in or create an account</h3>
            <h4>Enter your email address </h4>

            <form onSubmit={handleSubmit}>
              <input name="userEmail" />
              <button className={styles.submitButton} type='submit'>Continue</button>
            </form>


          </div>

        </div>

      </div>
    );


}