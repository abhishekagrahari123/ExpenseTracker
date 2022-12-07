import ExpenseForm from "./ExpenseForm";
import AddExpenseButton from "./AddExpenseButton";
import './NewExpense.css'
import {useState} from 'react';

function NewExpense(props) {
    const [addController, setAddController] = useState(0);
    function addNewExpenseHandler(expenseData){
        // console.log(expenseData);
        props.addExpense(expenseData);
    }
    function AddExpenseChangeHandler(event){
        setAddController((prevState) => {return 1-prevState});
    }
    let addExpenseOutput = <AddExpenseButton onAddExpenseChange={AddExpenseChangeHandler}></AddExpenseButton>
    if(addController === 1){
        addExpenseOutput = <ExpenseForm addNewExpense={addNewExpenseHandler} onAddExpenseChange={AddExpenseChangeHandler}></ExpenseForm>;
    }
    return (
        <div className="new-expense">
            {addExpenseOutput}
        </div>        
    )
}

export default NewExpense;