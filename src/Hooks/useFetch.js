import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {       // runs anytime there is a re-render
        fetch(url)
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    console.log('throwing error')
                    throw Error('Could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            })
    },
        [] // only run useEffect when the params in this array are changed. if empty, will run once (aka ngOnInit)
    );

    return { data, setData, isLoading, error };
}

export default useFetch;