
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
// this here is better practice, what id the state was updated
// elsewhere, it could affect things
// all i've done is pass the filter into a function
let handleClick = (id) => {
  setevent((prevElements) => {
    return prevElements.filter((element) => {
      return id !== element.id
    })
  })
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
