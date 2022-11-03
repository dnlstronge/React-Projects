
import './App.css';
import React, {useState} from 'react';
import Title from './components/Title';
import Modal from './components/Modal';



function App() {


  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents ] = useState(true);

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
 
 
};

//set handler here:

const handleClose = () => {
  setShowModal(false)
  console.log(showModal)
}

//now pass as a prop to Modal

console.log(showEvents)

const red = "Lots of exciting happenings a happening!"

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

      {showModal && <Modal handleClose={handleClose}>
      <h2>Terms and conditions
              <p>Discount is subject to availability, excess consumption of fun may lead
              to repeat bouts of hysteria. Big Dave Promotions does not admit liabilty for any torn muscles
              induced by way of overexposure to laughter.</p>
          </h2>
        
      </Modal> }
      <button onClick={setShowModal}>Click for offers</button>

    </div>
  );
}
//add function to update state of modal
// this must be done from here
export default App;






