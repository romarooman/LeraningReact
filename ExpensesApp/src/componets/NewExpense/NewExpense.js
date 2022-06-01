import "./NewExpense.css";
import ExpenseFrom from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [ShowForm, showFormHandler] = useState(false);

  const saveExanseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    showFormHandler(false);
  };
  const StartEditingHandler = () => {
    showFormHandler(true);
  };
  const StopEditting = () => {
    showFormHandler(false);
  };
  return (
    <div className="new-expense">
      {!ShowForm && 
        <button type="submit" onClick={StartEditingHandler}>
          Add New Expense
        </button>
      }
    {ShowForm && <ExpenseFrom onSaveExpense={saveExanseDateHandler} onCancel={StopEditting}/>}
    </div>
  );
};

export default NewExpense;
