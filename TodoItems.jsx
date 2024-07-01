import TodoItem from "./TodoItem";
const TodoItems = (todoItem) => {
  return (
    <>
      <div className="container">
        {todoItem.map((item) => {
          <TodoItem
            key={item}
            todoName={item.name}
            todoDate={item.dueDate}
          ></TodoItem>;
        })}
      </div>
    </>
  );
};
export default TodoItems;
