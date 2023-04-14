import { useEffect } from 'react';
import { useState, useRef } from 'react';
import Modal from '../../Components/Modal/Modal';
import styles from './CourseInput.module.css';




const CourseInput = props => {
    const goalInputRef = useRef();

    const [isValid, setIsValid] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        goalInputRef.current.focus();
        goalInputRef.current.addEventListener('click', (e) => {
            console.log('Clicked');
        })
    }, [])


    function getGoal() {
        return goalInputRef.current.value;
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        if (getGoal().trim().length === 0) {
            setIsValid(false);
            toggleModal();
            return;
        }
        props.onAddGoal(getGoal());
        goalInputRef.current.value = '';
    };

    const toggleModal = () => {
        setShowModal(prevVal => !prevVal);
    }

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                {/* <div className={styles['form-control']}> */}

                <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}            >
                    <label>Course Goal</label>
                    <input type="text" ref={goalInputRef} />
                </div>
                <button type="submit">Add Goal</button>
            </form >
            {!isValid && showModal && (
                <Modal toggleModal={toggleModal} title="Form Incorrect">
                    <p>The Form must be filled in</p>
                </Modal>
            )}
        </>

    )
}

export default CourseInput;