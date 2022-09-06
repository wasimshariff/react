import { useState } from "react";
import Card from "../ui/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const myExpenseCreated = (expense) => {
    console.log("new Expense Created : " + JSON.stringify(expense));
    const enrichedExpense = { ...expense, id: Math.random().toString() };
    props.myNewExpense(enrichedExpense);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const onToggleForm = (event) => {
    console.log("event fired ");
    setShowForm(true);
  };

  const onHideForm = () => {
    setShowForm(false);
  };
  return (
    <Card className="new-expense">
      {!showForm ? (
        <button type="button" onClick={onToggleForm}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          myExpenseCreated={myExpenseCreated}
          hideForm={onHideForm}
        ></ExpenseForm>
      )}
    </Card>
  );
};

export default NewExpense;
