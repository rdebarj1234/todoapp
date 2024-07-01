function TodoItem({ todoName, todoDate }) {
  return (
    <div>
      <div className="container">
        <div className="row kgrow">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-4">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
