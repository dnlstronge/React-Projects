//styles
import './ExpenseForm.css'

//imports:
import { useState } from 'react'

const ExpenseForm = () => {

//   const [enteredTitle, setEnteredTitle] = useState('')
//   const [enteredAmount, setEnteredAmount] = useState('')
//   const [enteredDate, setEnteredDate] = useState('')

   const [userInput, setUserInput] = useState({
                                        enteredTitle: '', 
                                        enteredAmount: '', 
                                        enteredDate: ''})   

  const titleChangeHandler = (e) => { 
     setUserInput({...userInput, enteredTitle: e.target.value})
    
   }
  const amountChangeHandler = (e) => {
     setUserInput({...userInput, enteredAmount: e.target.value})
  }
  const dateChangeHandler = (e) => {
    setUserInput({...userInput, enteredDate: e.target.value})
  }

      return (  
        <form>
            <div className='new-expense__controls'>
               <div className="new-expense__control">
                    <label>Title:</label>
                    <input type="text" onChange={titleChangeHandler}/>
               </div>
               <div className="new-expense__control">
                    <label>Amount:</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
               </div>
               <div className="new-expense__control">
                    <label>Date:</label>
                    <input type="date" min="2021-01-01" max="2024-01-01" onChange={dateChangeHandler}/>
               </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add expense</button>
            </div>
        </form> )
   
}

export default ExpenseForm