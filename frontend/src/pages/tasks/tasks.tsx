import {Task} from "../../models/task";
import "./tasks.scss"
import {Link} from "react-router-dom";

export const Tasks = ({title, tasks}: { title: string, tasks: Task[] }) => {
    return (
        <div className="container h-100 mt-5">
            <div className="row h-100">
                <div className="col-2"></div>
                <div className="col-8">
                    <h2 className="d-flex justify-content-center mb-4">{title}</h2>
                    <div className="d-flex justify-content-between">
                        <Link to="/task-creator">
                            <button className="btn btn-primary">Add Task</button>
                        </Link>
                    </div>
                    {tasks.map(task => {
                        return (
                            <div className="card d-flex flex-row justify-content-between p-4 task-container">
                                <div className="d-flex gap-2">
                                    <input type="checkbox" className="form-check-input"/>
                                    <div className="title">{task.title}</div>
                                </div>
                                <div className="description">{task.description}</div>
                                <div className="d-flex gap-2">
                                    <span className="icon icon-delete"></span>
                                    <Link state={task} to="/task-creator">
                                        <span className="icon icon-edit"></span>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="col-2"></div>
            </div> 
        </div>
    );
}