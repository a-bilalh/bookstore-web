import styles from './BookSkeleton.module.css';


const BookSkeleton = () => {
  return (
    <div className={styles.skeletonBook}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonAuthor}></div>
    </div>
  );
};



export default BookSkeleton;