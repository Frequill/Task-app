import {Task} from "../models/task";

export class TaskApi {
    addItem(task: Task): Promise<void> {
        return fetch('http://localhost:8080/api/v1/tasks', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then();
    }
}