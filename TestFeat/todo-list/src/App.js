//imports


import './App.css';
import data from './data.JSON';
import React, {useState} from 'react';

import Header from './header';
import ToDoList from './ToDoList';
import ToDo from './ToDo';

// f-comps 

function App() {
  const [toDoList, setToDoList] = useState(data);


  return (
    <div className="App">
    <Header />
    <toDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
