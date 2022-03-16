import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>March 11 2022</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Kshs. {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
