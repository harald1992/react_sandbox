import logo from '../logo.svg';
import styles from './Navbar.module.css';


const Navbar = () => {

    return (
        <>
            <header className={styles.header}>
                <img src={logo} className={styles.logo} alt="logo" />

                <nav className={styles.nav}>
                    <h1>the blog</h1>
                    <ul className={styles.links}>
                        <a href="/">Home</a>
                        <a href="/create">Create</a>
                    </ul>
                </nav>
            </header>


        </>
    )
}

export default Navbar;