import { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import Memo from "./Memo";
import WithoutMemo from "./WithoutMemo";
import Profile from "./Profile";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <h1>Demo of Hooks</h1>
      <hr />
      <div>
        <h3>useState, useEffect</h3>
        <button onClick={increment}>count is {count}</button>
      </div>
      <hr />
      <div>
        <h3>useCallback</h3>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </div>
      <hr />
      <Profile />
      <hr />
      <Memo />
      <hr />
      <WithoutMemo />
    </>
  );
}

export default App;