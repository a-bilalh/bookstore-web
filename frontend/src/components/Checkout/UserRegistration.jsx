import styles from './UserRegistration.module.css';




export default function UserRegistration({ email, setCheckoutSteps }) {




    return (

      <div className={styles.mainContainerLayout}>

        <div className={styles.mainContainer}>

            <h2>Create an Account</h2>

            {/* Registration form */}
            <form>

              <div className={styles.formFields}>

                <input type="hidden" name="email" value={email} />
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