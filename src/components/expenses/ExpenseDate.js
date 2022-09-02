import Card from "../ui/Card";
import "./expensedate.css";

const ExpenseDate = (props) => {
  console.log(props.date);
  const dt = new Date(props.date);
  const day = dt.getDate();
  const month = dt.toLocaleString("en-US", { month: "long" });
  const yr = dt.getFullYear();
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{yr}</div>
    </Card>
  );
};

export default ExpenseDate;
