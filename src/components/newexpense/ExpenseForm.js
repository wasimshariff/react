import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState({ title: "", amount: "", date: "" });

  const onTitleChange = (event) => {
    setExpense((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const onDateChange = (event) => {
    setExpense((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const onAmountChange = (event) => {
    setExpense((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(expense));
    const tempExpense = { ...expense };
    setExpense({ title: "", amount: "", date: "" });
    props.myExpenseCreated(tempExpense);
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    props.hideForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={expense.title} onChange={onTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="1"
            value={expense.amount}
            onChange={onAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expense.date}
            onChange={onDateChange}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add Expense</button>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
