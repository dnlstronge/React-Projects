import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react'

const Expenses = (props) => {

    const [dateSelect, setDateSelect] = useState('2023')

    const filteredExpenses = props.items.filter((expense) => { 
      return expense.date.getFullYear().toString() === dateSelect })

    const onDateSelectHandler = (selectedDate) => {
      setDateSelect(selectedDate)
      
    }

    let expensesContent = <p>No data for the selected year</p>

    if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        /> ))
    }
    
    return (
      <div>
      
       <Card className='expenses'>
       <ExpensesFilter 
            selected={dateSelect} 
            onDateSelect={onDateSelectHandler}/>
         {expensesContent}  
       </Card>
       </div>
    )
}

export default Expenses;