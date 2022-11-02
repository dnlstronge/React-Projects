
import './App.css';
import React, {useState} from 'react';
import Title from './components/Title';


function App() {



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
    <React.Fragment key={element.id}>
   
    <h2> * {element.title} - {element.price}</h2>
    <button onClick={() => handleClick(element.id)}>Delete element </button>
    </React.Fragment>
    ))}
    
    
    </div>
  );
}

export default App;

/*Above: I created a fragment <> instead of the <div> but this does not
work because I am using props! I can fix this by using React.Fragment?


yup - clear
*/


