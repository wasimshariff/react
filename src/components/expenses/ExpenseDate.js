import Card from "../ui/Card";
import "./expensedate.css";

const ExpenseDate = (props) => {
  const day = props.date.getDate();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const yr = props.date.getFullYear();
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{yr}</div>
    </Card>
  );
};

export default ExpenseDate;
