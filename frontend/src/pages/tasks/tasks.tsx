import {Task} from "../../models/task";
import "./tasks.scss"

export const Tasks = ({title, tasks}: { title: string, tasks: Task[] }) => {
    return (
        <div className="tasks-page">
            <h2>{title}</h2>

            {tasks.map(task => {
                return (
                    <div className="task-container">
                        <div className="title">{task.title}</div>
                        <div className="description">{task.description}</div>
                        <span className="icon icon-edit"></span>
                    </div>
                )
            })}
        </div>
    );
}