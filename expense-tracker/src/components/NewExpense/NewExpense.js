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
    }

    const [showForm, setShowForm] = useState(false)
    const showFormHandler = () => {
        setShowForm(true)
    }

    return (
       <div className='new-expense'>
        {showForm === false && <button onClick={showFormHandler}>Add a new expense</button>}
        {showForm === true &&
            <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                toggleForm={setShowForm}/>}
       </div>
    )
};

export default NewExpense;