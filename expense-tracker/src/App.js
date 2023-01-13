


//components: 
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';



const App = (props) => {

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
     date: new Date(2023, 0, 11)},

     {
     id: 'e4',
     title: 'Theatre Tickets',
     amount: 80,
     date: new Date(2022, 11, 25)}

  ]
  const addExpenseHandler = (expense) => {
      console.log('in App.js');
      console.log(expense);
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
