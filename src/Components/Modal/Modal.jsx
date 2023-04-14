import { useEffect } from "react";
import styles from "./Modal.module.css";
import { createPortal } from 'react-dom';


const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.toggleModal}></div>
}

const ModalOverlay = props => {
    return (
        <div className={styles['modal-container']}>
            <div>
                <header className={styles.title}>
                    <h1>{props.title} </h1>
                    <button className={styles.closeBtn} onClick={props.toggleModal}>X</button>
                </header>
                <div>
                    {props.children}
                </div>
            </div>

            <footer>
                <button onClick={props.toggleModal}>Okay</button>
            </footer>
        </div>
    )
}

const Modal = props => {

    useEffect(() => {
        const onKeyPress = (e) => {
            if (e.key === 'Escape') {
                props.toggleModal();
            }
        };

        window.addEventListener('keyup', onKeyPress);

        return () => {
            window.removeEventListener('keyup', onKeyPress);
        }
    }, [props]);

    return (
        <>
            {createPortal(<Backdrop toggleModal={props.toggleModal} />, document.querySelector('#backdrop-root'))}
            {createPortal(<ModalOverlay toggleModal={props.toggleModal}>{props.children}</ModalOverlay>, document.querySelector('#modal-root'))}
        </>
    )
}

export default Modal;