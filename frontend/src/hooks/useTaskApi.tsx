import {useEffect, useState} from "react";
import {Task} from "../models/task";
import {TaskCreate} from "../models/taskCreate";

const URL = '/api/v1/tasks';

export const useTaskApi = (): [Task[], ((task: TaskCreate) => Promise<Response>), ((task: Task) => Promise<Response>), ((uid: string) => Promise<Response>)] => {

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

    const addTask = (task: TaskCreate) => {
        return fetch('/api/v1/tasks', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then(res => {
            if (res.ok) {
                loadTasks();
            }
            return res;
        });
    }

    const editTask = (task: Task) => {
        console.log(task)
        return fetch(`/api/v1/tasks/${task.uid}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then(res => {
            if (res.ok) {
                loadTasks();
            }
            return res;
        });
    }

    const removeTask = (uid: string) => {
        return fetch(`/api/v1/tasks/${uid}`, {
            method: 'DELETE'
        }).then(res => {
            if (res.ok) {
                loadTasks();
            }
            return res;
        });
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return [ data, addTask, editTask, removeTask ]
}