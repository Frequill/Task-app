import './App.scss';
import { Task } from './models/task';
import { TaskCreator } from './pages/task-creator/task-creator';
import { Tasks } from './pages/tasks/tasks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useApi} from "./hooks/useApi";

const tasks: Task[] = [
  {
    title: 'Mow lawn',
    description: 'Grass is too tall, maximum height: 3,5mm.',
    category: 'House work',
    dueDate: new Date('2024-01-01'),
    priority: 1
  },
  {
    title: 'Do the dishes',
    description: 'All plates must be clean.',
    category: 'House work',
    dueDate: new Date('2024-07-16'),
    priority: 2
  }
];

function App() {

  const [ data ] = useApi();

  return (
    <Router>
      <h1 className="d-flex justify-content-center">Task app</h1>
      <Routes>
        <Route path="/" element={<Tasks title='Tasks' tasks={data}/>} />
        <Route path="/task-creator" element={<TaskCreator/>} />
      </Routes>
    </Router>
  );
}

export default App;
