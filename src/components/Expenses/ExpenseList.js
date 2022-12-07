import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {
  if (props.filteredExpenses.length === 0) {
    return <p className="expenses-list__fallback">No expense found</p>;
  } else {
    return props.filteredExpenses.map((expense) => {
      return (
        <ul className="expenses-list">
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        </ul>
      );
    });
  }
}

export default ExpenseList;