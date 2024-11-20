import {useEffect, useState} from "react";
import {Task} from "../models/task";

const URL = '/api/v1/tasks';

export const useTaskApi = (): [Task[], ((task: Task) => Promise<Response>)] => {

    const [data, setData]: [Task[], any] = useState<Task[]>([]);

    const loadTasks = () => {
        fetch(URL)
            .then(res => {
                if (!res.ok) {
                    throw Error('Something went wrong with the request.');
                }
                return res.json() || [];
            })
            .then(res => setData(res));
    }

    const addTask = (task: Task) => {
        return fetch('/api/v1/tasks', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then(res => {
            if(res.ok) {
                loadTasks();
            }
            return res;
        });
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return [ data, addTask ]
}