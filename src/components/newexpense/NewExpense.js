import Card from "../ui/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const myExpenseCreated = (expense) => {
    console.log("new Expense Created : " + JSON.stringify(expense));
    const enrichedExpense = { ...expense, id: Math.random().toString() };
    props.myNewExpense(enrichedExpense);
  };
  return (
    <Card className="new-expense">
      <ExpenseForm myExpenseCreated={myExpenseCreated}></ExpenseForm>
    </Card>
  );
};

export default NewExpense;
