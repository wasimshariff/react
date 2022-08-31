import "./ExpenseItem.css";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const clickHandler = () => console.log("Button Clicked");

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title </button>
    </Card>
  );
};

export default ExpenseItem;
