import Expenses from "./componets/Expenses/Expenses";
import NewExpense from "./componets/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 294.67,
    date: new Date(2022, 5, 27),
  },
  {
    id: "e2",
    title: "Cat",
    amount: 294.67,
    date: new Date(2019, 4, 27),
  },
  {
    id: "e3",
    title: "Dog",
    amount: 294.67,
    date: new Date(2020, 1, 27),
  },
  {
    id: "e4",
    title: "Fish",
    amount: 294.67,
    date: new Date(2020, 7, 27),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandelr = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandelr} />
      <Expenses items={expenses} />
    </div>
  );
};
//this is alternative way to representive return
//this code under the hood is transformed to somethink like this
// return React.createElement(
//   "div",
//   {},
//   React.cloneElement("h2", {}, "Let's get started!"),
//   React.createElement(Expenses, { items: expenses })
// );
export default App;
