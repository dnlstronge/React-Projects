import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses () {

    const expenses = [
        {
         id: 'e1', 
         title: 'Cinema' ,
         amount: 25.55, 
         date: new Date(2023, 0, 11)},
    
         {
         id: 'e2',
         title: 'Eating Out' ,
         amount: 74.45 , 
         date: new Date(2023, 0, 11)},
    
         {
         id: 'e3',
         title: 'Netflix' ,
         amount: 9.99 , 
         date: new Date(2023, 0, 11)}
      ]
    
    return (
       <div className='expenses'>
         <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}/>
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}
      />
       </div>
    )
}

export default Expenses;