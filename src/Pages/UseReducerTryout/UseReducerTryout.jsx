import { useReducer } from "react";

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') }
    }
    return { value: '', isValid: false };
}

const UseReducerTryout = props => {
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false });

    const emailChangeHandler = (e) => {
        dispatchEmail({ type: 'USER_INPUT', value: e.target.value })
    }

    const emailBlurHandler = (e) => {
        dispatchEmail({ type: 'INPUT_BLUR' })
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={submitHandler}>

                <input type="text" value={emailState.value} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
                <button type="submit" disabled={!emailState.isValid}>Submit</button>
                <p>{emailState.value}</p>
            </form>
        </>
    )
}

export default UseReducerTryout;