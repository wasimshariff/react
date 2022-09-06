import { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

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
      <ExpensesChart expenses={filteredExpList}></ExpensesChart>
      <ExpensesList filteredExpList={filteredExpList}></ExpensesList>
    </Card>
  );
};

export default Expenses;
