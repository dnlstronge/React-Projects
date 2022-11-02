
import './App.css';
import {useState} from 'react';
import Title from './components/Title';


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



console.log(showEvents)

const red = "Lots of exiting happenings a happening!"
  return (
 //add imported component - I remember it must be nested inside <div>
 //I can add another Title in with different prop values? what happens?

 // so i have basically added another Title component, and passed it
 // different values to its props, I think I could even add other props
 // they will can be passed on the same way?
    <div className="App">
    <Title titleprop="Events in your area" newprop={red}/>
    <Title titleprop="Stuff going down here" newprop="amongst other thangs!" />
    <br />
    {showEvents && (

     <div>
      <button onClick={() => setShowEvents(false)}>Hide Events</button>
    </div>
    )
    
    }
    {!showEvents && (
    <div>
      <button onClick={() => setShowEvents(true)}>Show Events</button>
    </div>
    )
    }
    
     

    {showEvents && events.map((element, index) => (
    <div key={element.id}>
   
    <h2> * {element.title} - {element.price}</h2>
    <button onClick={() => handleClick(element.id)}>Delete element </button>
    </div>
    ))}
    
    </div>
    
  );
}


// important :)

export default App;
