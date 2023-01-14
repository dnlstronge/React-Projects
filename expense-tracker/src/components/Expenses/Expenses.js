import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react'

const Expenses = (props) => {

    const [dateSelect, setDateSelect] = useState('2023')

    const onDateSelectHandler = (selectedDate) => {
      setDateSelect(selectedDate)
      console.log(selectedDate)
    }
    
    return (
      <div>
      
       <Card className='expenses'>

         <ExpensesFilter 
            selected={dateSelect} 
            onDateSelect={onDateSelectHandler}/>
        {props.items.map((expense) => (
          <ExpenseItem 
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
         
       </Card>
       </div>
    )
}

export default Expenses;