import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const [budget, setBudget] = useState(2000);
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const submitEvent = () => {
        if(budget > 20000) {
            alert("The Budget value cannot exceed £20,000");
            setBudget("");
            return;
            }
        if(budget < totalExpenses) {
            alert("you cannot reduce the budget value lower than the spending");
            setBudget("");
            return;
                }
        }
    return (
        <div className='alert alert-secondary'>
            Budget: <b>{currency}</b>
            <input
                required='required'
                type='number'
                id='budget'
                step="10"
                value={budget}
                style={{ marginLeft: '5rem' , size: 8}}
                onChange={(event) => {setBudget(event.target.value); submitEvent()}}>
                </input>
        </div>
    );
};
export default Budget;
