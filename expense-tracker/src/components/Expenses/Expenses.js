import './Expenses.css'
import ExpensesList from './ExpensesList';
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

   
    
    return (
      <div>
      
       <Card className='expenses'>
       <ExpensesFilter 
            selected={dateSelect} 
            onDateSelect={onDateSelectHandler}
             />
         <ExpensesList items={filteredExpenses}/>
       </Card>
       </div>
    )
}

export default Expenses;