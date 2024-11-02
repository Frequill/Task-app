export const TaskCreator = () => {
    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-2"></div>
                <div className="col-8">
                    <h2>Make task</h2>
                    <div className="card d-flex flex-row justify-content-center p-4 task-container">
                        <form className="w-100">
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control"></input>
                                <small className="form-text text-muted">Title's are rad!</small>
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control"></input>
                                <small className="form-text text-muted">A description saves headaches</small>
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <select className="form-control"><option></option></select>
                            </div>

                            <div className="form-group">
                                <label>Date</label>
                                <input id="startDate" className="form-control" type="date" />
                            </div>

                            <div className="form-group">
                                <label>Priority</label>
                                <select className="form-control"><option>Medium</option></select>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}