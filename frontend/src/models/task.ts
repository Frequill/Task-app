export enum TaskPriority {
    LOW, MEDIUM, HIGH
}

export class Task {
    constructor(
        public title: string,
        public description: string,
        public dueDate: Date,
        public priority: number,
        public category: string) { }
}