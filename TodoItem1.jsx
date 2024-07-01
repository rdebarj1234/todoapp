function TodoItem1() {
  let todoName = "Buy A Milk";
  let todoDate = "10/10/2010";
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

export default TodoItem1;
