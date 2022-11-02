
import './App.css';
import {useState} from 'react';



function App() {

  //add new function for condtional state change
  // remember call the pars whatever you like

  const [showEvents, setShowEvents ] = useState(true)

  let [events, setevent] = useState([
    {title: "Live Music", price: "£10pp", id: 1},
    {title: "Family Fun Night", price: "Free Entry", id: 2},
    {title: "Comedy club", price: "£5pp", id: 3}
  ])

 let handleClick = (id) => {
  setevent((prevElements) => {
    return prevElements.filter((element) => {
      return id !== element.id
    })
  })
 console.log(id)
 
};

// test whether usestate is returning boolean on click (clear)

console.log(showEvents)


  return (
  // add another logical to hide/show button as appropriate
    <div className="App">
    {showEvents && (
      // if showEvents is true show this: 
     <div>
      <button onClick={() => setShowEvents(false)}>Hide Events</button>
    </div>
    )
    // if showEvents is false show this
    }
    {!showEvents && (
    <div>
      <button onClick={() => setShowEvents(true)}>Show Events</button>
    </div>
    )
    }
    
     

    {showEvents && events.map((element, index) => (
    <div key={element.id}>
   
    <h2> {index} - {element.title} - {element.price}</h2>
    <button onClick={() => handleClick(element.id)}>Delete element </button>
    </div>
    ))}
    
    </div>
    
  );
}


// important :)

export default App;
