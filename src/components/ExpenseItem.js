import moment from "moment";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const date = moment(props.date).format("MMMM Do, YYYY");

  return (
    <div className="expense-item">
      <div>{date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Kshs. {props.amount}</div>
      </div>
      <button onClick={() => props.removeData(props.id)}>remove</button>
    </div>
  );
}

export default ExpenseItem;
