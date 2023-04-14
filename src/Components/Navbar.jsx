import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../Assets/logo.svg';
import styles from './Navbar.module.css';
import { signIn, signOut } from '../Store/Actions/';
import useLocalStorage from '../Hooks/useLocalStorage';
import useUpdateLogger from '../Hooks/useUpdateLogger';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';

const Navbar = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    useUpdateLogger(isLoggedIn);
    const ctx = useContext(AuthContext);

    const [name, setName] = useLocalStorage('name', '');
    const [isDarkMode, setIsDarkMode] = useState(true);

    function changeName(e) {
        setName(e.target.value);
    }

    function toggleLogin() {
        if (isLoggedIn) {
            dispatch(signOut());
        } else {
            dispatch(signIn());
        }
    }

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

                <div>
                    {isLoggedIn ?
                        <div className='flex-column'>
                            Name:{name}
                            <button onClick={toggleLogin}>Log Out</button>
                        </div>
                        :
                        <div className='flex-column'>
                            <input type="text" onChange={changeName} />
                            <button onClick={toggleLogin}>Log In</button>
                        </div>}
                </div>
                {/* <pre>{JSON.stringify(isDarkMode)}</pre> */}
                <button onClick={ctx.changeContext}>Context Hook {ctx.myContextValue}</button>
            </header>
        </>
    )
}

export default Navbar;