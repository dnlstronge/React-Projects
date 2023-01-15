//styles

import './NewExpense.css'

// imports
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData
        , id: Math.random().toString()

    }
    props.onAddExpense(expenseData);
    setShowForm(false)
    }

    const [showForm, setShowForm] = useState(false)
    const showFormHandler = () => {
        setShowForm(true)
    }
    const onCancelHandler = () => {
        setShowForm(false)
     }
    
    return (
       <div className='new-expense'>
        {!showForm && <button onClick={showFormHandler}>Add a new expense</button>}
        {showForm &&
            <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                toggleForm={onCancelHandler}/>}
       </div>
    )
};

export default NewExpense;