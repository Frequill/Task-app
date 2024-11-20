import './task-creator.scss';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Task, TaskPriority} from "../../models/task";

type AddTaskFn = (task: Task) => Promise<Response>;

export const TaskCreator = ({addTask}: {addTask: AddTaskFn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        dueDate: '',
        priority: 0
    });

    let addItem = () => {
        addTask({
            title: formData.title,
            description: formData.description,
            category: formData.category,
            dueDate: new Date(formData.dueDate),
            priority: formData.priority
        }).then(res => {
            if(!res.ok) {
                throw Error('Could not add task.');
            }
            navigate('/');
        });
        console.debug(formData);
    }

    return (
        <div className="container h-100 mt-5">
            <div className="row h-100">
                <div className="col-2">
                    <Link to="/">
                        <span className="icon icon-back"></span>
                    </Link>
                </div>
                <div className="col-8">
                    <h2>Make task</h2>
                    <div className="card d-flex flex-row justify-content-center p-4 task-container">
                        <form className="w-100">
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control"
                                       onChange={e => setFormData({...formData, title: e.target.value})}></input>
                                <small className="form-text text-muted">Title's are rad!</small>
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control"
                                       onChange={e => setFormData({...formData, description: e.target.value})}></input>
                                <small className="form-text text-muted">A description saves headaches</small>
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <select className="form-control"
                                        onChange={e => setFormData({...formData, category: e.target.value})}>
                                    <option></option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Date</label>
                                <input id="dueDate" className="form-control" type="date"
                                       onChange={e => setFormData({...formData, dueDate: e.target.value})}/>
                            </div>

                            <div className="form-group">
                                <label>Priority</label>
                                <select className="form-control"
                                        onChange={e => setFormData({...formData, priority: Number(e.target.value)})}
                                        value={formData.priority}>
                                    <option value={TaskPriority.HIGH}>High</option>
                                    <option value={TaskPriority.MEDIUM}>Medium</option>
                                    <option value={TaskPriority.LOW}>Low</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-end mt-3">
                                <button type="button" className="btn btn-success" onClick={addItem}>Lägg till</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}