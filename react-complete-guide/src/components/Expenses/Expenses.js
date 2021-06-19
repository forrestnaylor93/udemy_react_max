import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from './ExpensesList';
import { useState } from "react";
function Expenses(props) {
  const [year, setYear] = useState("2020");

  const changeFilterHandler = (enteredYear) => {
    setYear(enteredYear);
  };

  const filteredList = props.expenseList.filter((expense)=>expense.date.getFullYear().toString() === year);




  return (
    <Card className="expenses">
      <ExpensesFilter selected = {year} onGetFilterYear={changeFilterHandler} />
      <ExpensesList filteredList = {filteredList} />
      
      
      
    </Card>
  );
}

export default Expenses;
