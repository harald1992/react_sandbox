import { useState } from "react";
import { createContext } from "react";

// Don't use context for very high fequency changes

export const AuthContext = createContext({
    myContextValue: 'This comes from auth context',
    changeContext: () => { }
});


export const AuthContextProvider = props => {

    const [myContextValue, setMyContextValue] = useState(Math.random());

    const changeContext = () => {
        setMyContextValue(Math.random);
    }

    return (
        <AuthContext.Provider value={{
            myContextValue,
            changeContext
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}
