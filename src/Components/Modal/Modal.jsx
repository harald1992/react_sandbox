import { useEffect } from "react";
import styles from "./Modal.module.css";



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
            <div className={styles.backdrop} onClick={props.toggleModal}></div>
            <div className={styles['modal-container']}>


                <div className={styles.title}>
                    <h1>{props.title} </h1>
                    <button className={styles.closeBtn} onClick={props.toggleModal}>X</button>
                </div>
                <div>
                    {props.children}
                </div>
            </div>


        </>
    )
}

export default Modal;