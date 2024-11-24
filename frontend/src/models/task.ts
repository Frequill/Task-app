export enum TaskPriority {
    LOW, MEDIUM, HIGH
}

export enum Category {
    HOUSEHOLD, YARD, WORK, HOBBY, PROBLEM_SOLVING, HEALTH
}

export class Task {
    constructor(
        public uid: string,
        public title: string,
        public description: string,
        public dueDate: Date,
        public priority: TaskPriority,
        public category: string) { }
}