import React, {useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'
import FormButton from './FormButton'
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        //console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    const [formActive, setFormActive] = useState(false);

    const toggleFormHandler = ()=>{
        console.log('toggling the form!')
        if(formActive){
            setFormActive(false);
        }else{
            setFormActive(true);
        }
        
    }


    return (
        <div className = "new-expense">


        {formActive && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} toggleForm = {toggleFormHandler} />}
        {!formActive && <button onClick = {toggleFormHandler}> Add New Expense</button>}
        
        
        </div>
    )
}

export default NewExpense
