import { useState } from 'react'


//components: 
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

//initial expense values:

const DUMMY_EXPENSES = [
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
   date: new Date(2023, 0, 11)},

   {
   id: 'e4',
   title: 'Theatre Tickets',
   amount: 80,
   date: new Date(2022, 11, 25)}

]



const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  
  const addExpenseHandler = (expense) => {
      setExpenses((prev) => {
        return [expense, ...prev]
      })
  };


  return (
    
    <div className="App">

      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
     
   
    </div>
  );
}

export default App;
