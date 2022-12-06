import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props) {
    
    function addNewExpenseHandler(expenseData){
        console.log(expenseData);
        props.addExpense(expenseData);
    }

    return (
        <div className="new-expense">
        <ExpenseForm addNewExpense={addNewExpenseHandler}></ExpenseForm>            
        </div>        
    )
}

export default NewExpense;