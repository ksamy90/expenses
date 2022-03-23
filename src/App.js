import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (item) => {
    setExpenses([...expenses, item]);
  };

  return (
    <div className="app">
      <h2>Expense-App</h2>
      <NewExpense addExpense={addExpenseHandler} />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default App;
