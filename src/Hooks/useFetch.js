import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {       // useEffect runs anytime there is a re-render
        const abortController = new AbortController(); // use aortCont.signal ti stop the fetch signal, for example when going to a different page and the fetch is no longer needed.

        fetch(url, { signal: abortController.signal })
            .then(res => {
                if (!res.ok) {
                    console.log('throwing error')
                    throw Error('Could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Fetch Aborted');
                } else {
                    setError(error);
                    setIsLoading(false);
                }

            });

        return () => abortController.abort(); // abort 

    },
        [] // only run useEffect when the params in this array are changed. if empty, will run once (aka ngOnInit)
    );

    return { data, setData, isLoading, error };
}

export default useFetch;