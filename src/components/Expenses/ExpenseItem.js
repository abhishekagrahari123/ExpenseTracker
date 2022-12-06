import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';
import { useState } from 'react';

function ExpenseItem (props){

    const [title, setTitle] = useState(props.title);

    function clickHandler(){
        setTitle('Updated');
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Click Me !</button>
            </div>    
            
        </Card>
    )
}

export default ExpenseItem;