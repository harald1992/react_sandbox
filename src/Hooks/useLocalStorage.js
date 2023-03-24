import { useEffect, useState } from 'react';

function getSavedValue(key, initialValue = '') {
    return JSON.parse(localStorage.getItem(key)) || initialValue;
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        // only runs once when wrapped in a function like this.
        return getSavedValue(key, initialValue);
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])


    return [value, setValue];

}