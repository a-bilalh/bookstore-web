import styles from './EmailInput.module.css'



export default function EmailInput() {

    return (
      <div className={styles.mainContainerLayout}>

        <div className={styles.mainContainer} >

          <div className={styles.content}>
            <h3>Sign in or create an account</h3>
            <h4>Enter your email address </h4>

            <form>
              <input name="userEmail" />
            </form>


          </div>

        </div>

      </div>
    );


}