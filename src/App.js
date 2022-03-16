import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Buy chairs",
      amount: 1500.0,
    },
    {
      id: "2",
      title: "Construct pavement",
      amount: 5400.0,
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
