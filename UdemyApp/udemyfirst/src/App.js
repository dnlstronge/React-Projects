
import './App.css';
import {useState} from 'react';



function App() {

  // change to an array of objects
  // give each an id

  let [events, setevent] = useState([
    {title: "Dr", surname: "Foster", id: 1},
    {title: "Lord", surname: "Finchester", id: 2},
    {title: "Ms", surname: "Hayberbrook", id: 3}
  ])

  // check handler works: should output 1, 2, 3 in console (clear)
let handleClick = (id) => {

 console.log(id)

};

  return (
  
    <div className="App">

    {events.map((element, index) => (
    <div key={element.id}>
     
    <h2> {index} His name was {element.surname}</h2>
    <button onClick={() => handleClick(element.id)}>Delete element </button>
    </div>
    ))}
    
    </div>
    
  );
}


// important :)

export default App;
