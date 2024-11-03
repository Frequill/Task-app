import './App.scss';
import { Task } from './models/task';
import { TaskCreator } from './pages/task-creator/task-creator';
import { Tasks } from './pages/tasks/tasks';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const tasks: Task[] = [
  {
    title: 'Mow lawn',
    description: 'Grass is too tall, maximum height: 3,5mm.',
    category: 'House work',
    priority: 1
  },
  {
    title: 'Do the dishes',
    description: 'All plates must be clean.',
    category: 'House work',
    priority: 2
  }
];

function App() {
  return (
    <Router>
      <h1 className="d-flex justify-content-center">Task app</h1>
      <Routes>
        <Route path="/" element={<Tasks title='Tasks' tasks={tasks}/>} />
        <Route path="/task-creator" element={<TaskCreator/>} />
      </Routes>
    </Router>
  );
}

export default App;
