import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [newYear, setNewYear] = useState("2020");

  function yearChangeHandler(yearChoosed) {
    setNewYear(yearChoosed);
  }
  const filteredItems = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === newYear;
  });

  let outputList = <p>No expense found</p>;
  if (filteredItems.length > 0)
    outputList = filteredItems.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      );
    });

  return (
    <Card className="expenses">
      <ExpensesFilter
        year={newYear}
        onYearChange={yearChangeHandler}
      ></ExpensesFilter>
      {outputList}
    </Card>
  );
}

export default Expenses;
