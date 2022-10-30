//imports


import './App.css';
import data from './data.json';
import React, {useState} from 'react';

import Header from './header';
import ToDoList from './ToDoList';


// f-comps 

function App() {
  const [toDoList, setToDoList] = useState(data);


  return (
    <div className="App">
    <Header />
    <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
