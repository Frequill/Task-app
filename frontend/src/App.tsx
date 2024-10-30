import './App.css';
import { Task } from './models/task';
import { Tasks } from './pages/tasks/tasks';

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
    <div className="App">
      <Tasks title='Tasks' tasks={tasks}/>
    </div>
  );
}

export default App;
