
import styles from './SearchBar.module.css';


// Search Bar Component
export default function SearchBar() {
    return (
      <div>
          <input type="text" className={styles.searchBar} placeholder="Search books..." />
      </div>
    );
}
