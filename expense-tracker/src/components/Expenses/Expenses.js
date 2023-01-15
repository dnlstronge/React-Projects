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
    
    return (
      <div>
      
       <Card className='expenses'>

         <ExpensesFilter 
            selected={dateSelect} 
            onDateSelect={onDateSelectHandler}/>
            {filteredExpenses.length === 0 ? <p>There is no data for this year</p> :
            filteredExpenses.map((expense) => (
            <ExpenseItem 
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
            {}
         
       </Card>
       </div>
    )
}

export default Expenses;