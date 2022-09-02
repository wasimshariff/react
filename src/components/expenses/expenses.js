import { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const onFilterChange = (year) => {
    console.log("Changed Year " + year);
    setFilteredYear(year);
    props.filterChange(year);
  };
  const filteredExpList = props.items.filter((exp) => {
    const dt = new Date(exp.date);
    console.log(filteredYear);
    console.log(dt.getFullYear());
    return !filteredYear || dt.getFullYear().toString() === props.selectedYear;
  });
  console.log("calling Expenses again : " + filteredExpList.length);

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterYear={filteredYear}
        onFilterChange={onFilterChange}
      ></ExpensesFilter>
      {filteredExpList.length > 0 ? (
        filteredExpList.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      ) : (
        <p>No items in List for {filteredYear}</p>
      )}
    </Card>
  );
};

export default Expenses;
