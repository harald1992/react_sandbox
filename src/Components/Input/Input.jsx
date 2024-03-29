import styles from './Input.module.css';


const Input = props => {


    return (
        <>
            <div className={styles.control}>
                <label htmlFor={props.id}>{props.label}</label>
                <input type="text"
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur} />
            </div>

        </>
    )
}

export default Input;