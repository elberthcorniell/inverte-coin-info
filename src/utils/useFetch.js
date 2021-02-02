import { useState, useEffect } from 'react';

const useFecth = (url, options = {}) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(setData)
            .catch(setError);
    }, []);
    return {
        data,
        error,
        loading: error === undefined && data === undefined
    };
}

export default useFecth;
