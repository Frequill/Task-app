export enum TaskPriority {
    LOW, MEDIUM, HIGH
}

export class Task {
    constructor(
        public title: string,
        public description: string,
        public priority: number,
        public category: string) { }
}