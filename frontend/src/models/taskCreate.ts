import {TaskPriority} from "./task";

export class TaskCreate {
    constructor(
        public title: string,
        public description: string,
        public dueDate: Date,
        public priority: TaskPriority,
        public category: string) { }
}