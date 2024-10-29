import { Task } from "../models/task";

export const Tasks = ({title, tasks}: {title: string, tasks: Task[]}) => {
    return (
        <div>
            <h2>{title}</h2>
            
            {tasks.map(task => {
                return (
                   <div style={{margin: '10px 0 0 0'}}>
                        <div>{task.title}</div>
                        <div>{task.description}</div>
                   </div>
                )
            })}
        </div>
    );
}