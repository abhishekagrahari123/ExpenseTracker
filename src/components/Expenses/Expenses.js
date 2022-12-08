import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from './ExpenseList';
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [newYear, setNewYear] = useState("2020");

  function yearChangeHandler(yearChoosed) {
    setNewYear(yearChoosed);
  }
  const filteredItems = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === newYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        year={newYear}
        onYearChange={yearChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredItems}/>
      <ExpenseList filteredExpenses={filteredItems}/>
    </Card>
  );
}

export default Expenses;
