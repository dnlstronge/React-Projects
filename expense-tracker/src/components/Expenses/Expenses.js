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
       <ExpensesFilter value={dateSelect} onDateSelect={onDateSelectHandler}/>
         <ExpenseItem 
        title={props.items[0].title} 
        amount={props.items[0].amount} 
        date={props.items[0].date}/>
      <ExpenseItem 
        title={props.items[1].title} 
        amount={props.items[1].amount} 
        date={props.items[1].date}
      />
      <ExpenseItem 
        title={props.items[2].title} 
        amount={props.items[2].amount} 
        date={props.items[2].date}
      />
      <ExpenseItem 
        title={props.items[3].title} 
        amount={props.items[3].amount} 
        date={props.items[3].date}
      />
       </Card>
       </div>
    )
}

export default Expenses;