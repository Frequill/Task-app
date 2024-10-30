import { Task } from "../../models/task";
import "./tasks.scss"

export const Tasks = ({title, tasks}: {title: string, tasks: Task[]}) => {
    return (
        <div>
            <h2>{title}</h2>
            
            {tasks.map(task => {
                return (
                   <div className="task-container">
                        <div>{task.title}</div>
                        <div>{task.description}</div>
                   </div>
                )
            })}
        </div>
    );
}