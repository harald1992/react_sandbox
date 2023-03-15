import { useState } from 'react';
import logo from '../Assets/logo.svg';
import styles from './Navbar.module.css';


const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    function switchDarkMode(e) {
        const checked = e.target.checked;

        var r = document.querySelector(':root');
        if (checked) {
            r.style.setProperty('--main-bg-color', 'black');
            r.style.setProperty('--font-color', 'white');

        } else {
            r.style.setProperty('--main-bg-color', 'white');
            r.style.setProperty('--font-color', 'black');
        }

        setIsDarkMode(checked);
    }

    return (
        <>
            <header className={styles.header}>
                <img src={logo} className={styles.logo} alt="logo" />

                <label className={styles.switch}>
                    <span style={isDarkMode ? { opacity: '0.5' } : { opacity: '1.0' }}>Light</span>
                    <input className={styles.checkbox} type="checkbox" name="darkmode" id="darkmode" checked={isDarkMode} onChange={switchDarkMode} />
                    <span style={isDarkMode ? { opacity: '1.0' } : { opacity: '0.5' }}>Dark</span>
                </label>

                {/* <pre>{JSON.stringify(isDarkMode)}</pre> */}

            </header>
        </>
    )
}

export default Navbar;