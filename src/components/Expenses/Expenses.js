import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter';
import {useState} from 'react';

function Expenses(props){
    const expenses = props.expenses;

    const [newYear, setNewYear] = useState('2000');


    function yearChangeHandler(yearChoosed){
        setNewYear(yearChoosed);
    }
    console.log(newYear);

    return (
            <Card className='expenses'>
                <ExpensesFilter onYearChange={yearChangeHandler}></ExpensesFilter>
                <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}></ExpenseItem>
                <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}></ExpenseItem>
                <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}></ExpenseItem>
                <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount}></ExpenseItem>
            </Card>
    )
    
}

export default Expenses;