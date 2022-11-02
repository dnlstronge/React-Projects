
import './App.css';
import React, {useState} from 'react';
import Title from './components/Title';
import Modal from './components/Modal';



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

const red = "Lots of exciting happenings a happening!"
// add a modal to demonstrate children
  return (
 
    <div className="App">
   
    <Title titleprop="Events in your area: " newprop={red}/>

    
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
{/*     
      <Modal> 
          <h2 className="modal">10% off!
              <p>Use BIGDAVE1 at checkout</p>
          </h2>
      </Modal> */}
      <Modal>
      <h2 className="modal">Terms and conditions
              <p>Discount is subject to availability, excess consumption of fun may lead
              to repeat bouts of hysteria. Big Dave Promotions does not admit liabilty for any torn muscles
              induced by way of overexposure to laughter.</p>
          </h2>
      </Modal> 

    </div>
  );
}
//above let modal have children by taking the jsx from
// modal js and pasting into modal (for this use open/close tags)

export default App;






