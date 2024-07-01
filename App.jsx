import AppName from "./Components/AppName";
// import TodoItem1 from "./Components/TodoItem1";
// import TodoItem2 from "./Components/TodoItem2";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";

function App() {
  const todoItem = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2011",
    },
    {
      name: "Buy Milk",
      dueDate: "4/10/2011",
    },
    {
      name: "Buy Milk",
      dueDate: "4/10/2011",
    },
    {
      name: "Buy Milk",
      dueDate: "4/10/2011",
    },
  ];
  const [todo, setTodo] = useState("todoItem");
  const handleNewItem = (itemName, itemDate) => {
    console.log(`new item:${itemName} date:${itemDate} `);
    const NewTodo = [...todo, { name: itemName, dueDate: itemDate }];
    setTodo(NewTodo);
  };
  return (
    <center className="todo-contaainer">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <TodoItems todoItem={todoItem}></TodoItems>
    </center>
  );
}

export default App;
