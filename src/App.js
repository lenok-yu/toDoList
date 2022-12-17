import './App.css';
import todo from './todo.jpg';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="App">
      <img src={todo} width="100%" alt="todolist"/>
      <div className='container'>
        <h1>TODO LIST</h1>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
