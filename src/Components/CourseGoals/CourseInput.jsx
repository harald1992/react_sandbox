import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './CourseInput.module.css';




const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            toggleModal();
            return;
        }
        props.onAddGoal(enteredValue);
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
                    <input type="text" onChange={goalInputChangeHandler} />
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