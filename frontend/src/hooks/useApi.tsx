import {useEffect, useState} from "react";
import {Task} from "../models/task";

const URL = '/api/v1/tasks';

export const useApi = () => {

    const [data, setData] = useState<Task[]>([]);

    useEffect(() => {
        fetch(URL)
            .then(res => {
                if (!res.ok) {
                    throw Error('Something went wrong with the request.');
                }
                return res.json() || []
            })
            .then(res => setData(res))
    });

    return [ data ]
}