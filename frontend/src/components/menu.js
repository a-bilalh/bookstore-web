import styles from './menu.module.css';


function Menu() {
    return (
        <nav>
            <ul className={styles.menu}>
                {/* Todo: links need to be updated <!-- */}
                <li><a href="#home">Books</a></li>
                <li><a href="#about">Fictions</a></li>
                <li><a href="#services">Nonfictions</a></li>
                <li><a href="#contact">Kids</a></li>
            </ul>
        </nav>
    );
}

export default Menu;