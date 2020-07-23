import React, { useContext } from "react";
import { TodoItem } from "./components/todoItem";
import { TodoInput } from "./components/todoInput";
import "./App.css";
import { GlobalProvider, GlobalContext } from "./context/globalContext";

function App() {
  const { state } = useContext(GlobalContext);
  console.log(state);
  return (
    <GlobalProvider>
      <div className="App">
        <h1>Todo app using typescript</h1>
        <TodoInput />
        <TodoItem />
      </div>
    </GlobalProvider>
  );
}

export default App;
