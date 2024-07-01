import { useState } from "react";
//import React from "react";

function AddTodo(onNewItem) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const HandleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const HandleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddButtonClick = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div>
      <div className="container">
        <div className="row kgrow">
          <div className="col-4">
            <input
              value={todoName}
              type="text"
              placeholder="Enter Todo Here"
              onChange={HandleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={todoDate} onChange={HandleDateChange} />
          </div>
          <div className="col-4">
            <button
              onClick={handleAddButtonClick}
              type="button"
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
