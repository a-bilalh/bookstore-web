import styles from './AuthButtons.module.css';


// Custom AuthButton with onClick and content props
export default function AuthButton ( {onClick, content} ) {

    return (
        <div className={styles.authButtonDiv}>
          <button onClick={onClick}>{content}</button>
        </div>
    )
}
