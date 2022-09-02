import { useState } from "react";
import Expenses from "./components/expenses/expenses";
import NewExpense from "./components/newexpense/NewExpense";

function App() {
  const INITIAL_EXPENSE = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseList, setExpenseList] = useState(INITIAL_EXPENSE);
  const [filteredYear, setFilteredYear] = useState("");
  // const [filteredExpList, setFilteredExpList] = useState(INITIAL_EXPENSE);

  const myNewExpense = (expense) => {
    console.log("New expense in App js " + JSON.stringify(expense));
    setExpenseList((prevState) => [expense, ...prevState]);
    //  setFilteredExpList(expenseList);
  };

  const filterByYear = (year) => {
    console.log("year in App js " + year);
    setFilteredYear(year);
  };

  return (
    <div>
      <NewExpense myNewExpense={myNewExpense}></NewExpense>
      <Expenses
        items={expenseList}
        filterChange={filterByYear}
        selectedYear={filteredYear}
      ></Expenses>
    </div>
  );
}

export default App;
