import {useEffect, useState} from "react";

const URL = '';

export const useApi = () => {

    const [data, setData] = useState();

    useEffect(() => {
        fetch(URL)
            .then(res => {
                if (!res.ok) {
                    throw Error('Something went wrong with the request.');
                }
                return res.json()
            })
            .then(res => setData(res))
    });

    return { data }
}