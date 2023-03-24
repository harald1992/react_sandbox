

export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}



export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}


export const increment = (number = 1) => {
    return {
        type: 'INCREMENT',
        payload: number,
    }
}



export const decrement = (number = 1) => {
    return {
        type: 'DECREMENT',
        payload: number,
    }
}

