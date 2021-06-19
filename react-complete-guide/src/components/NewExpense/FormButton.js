import './NewExpense.css';
import React from 'react'

const FormButton = (props) => {
    return (
        <div className = 'new-expense'>
            <button onClick = {props.toggleForm}>Add Expense</button>
        </div>
    )
}

export default FormButton
