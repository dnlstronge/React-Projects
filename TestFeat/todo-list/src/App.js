//imports


import './App.css';
import data from './data.JSON';
import React, {useState} from 'react';
import Header from './header';
import toDoList from './toDoList';
import toDo from './toDo';

// f-comps 

function App() {
  const [toDoList, setToDoList] = useState(data)
  return (
    <div className="App">
    <Header />

    </div>
  );
}

export default App;
