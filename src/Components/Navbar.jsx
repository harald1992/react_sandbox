import logo from '../Assets/logo.svg';
import styles from './Navbar.module.css';


const Navbar = () => {

    return (
        <>
            <header className={styles.header}>
                <img src={logo} className={styles.logo} alt="logo" />
            </header>
        </>
    )
}

export default Navbar;