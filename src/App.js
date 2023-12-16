import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import DisplayTodoList from './components/DisplayTodoList';

function App() {
  return (
    <div className="App">
        <Header />
        <TodoInput />
    </div>
  );
}

export default App;
