import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const filteredExpList = props.filteredExpList;

  if (filteredExpList.length === 0) {
    return <p>No Expenses in the List</p>;
  } else {
    return (
      <ul className="expenses-list">
        {filteredExpList.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
