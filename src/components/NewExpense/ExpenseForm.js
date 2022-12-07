import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props){

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
        // console.log(event.target.value);
    }

    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
        // console.log(event.target.value);
    }

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
    }

    // const [enteredExpense, setEnteredExpense] = useState({
    //     enteredTitle: '',
    //     enteredExpense: '', 
    //     enteredAmount: ''
    // })

    // function titleChangeHandler(event){
    //     setEnteredExpense((prevState)=>{
    //         return {   
    //             ...prevState,
    //             enteredTitle: event.target.value
    //         }
    //     })
    // }

    function formSubmitHandler(event){
        event.preventDefault();

        const expenseData = {
            id: Math.random(),
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: parseInt(enteredAmount)
        }
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        // console.log(expenseData);
        props.addNewExpense(expenseData);
    }


    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount} type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredDate} type='Date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;