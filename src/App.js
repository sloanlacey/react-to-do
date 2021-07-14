import "./App.css";
import Form from "./components/Form/Form.js";
import TodoList from "./components/TodoList/TodoList.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hop to it</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
