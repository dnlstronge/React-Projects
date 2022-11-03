
import './App.css';
import React, {useState} from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';



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
    

    {showEvents && (<EventList handleClick={handleClick} events={events}/>) }

      {showModal && <Modal handleClose={handleClose} isSalesModal={true} >
      <NewEventForm />
      </Modal> }
      <button onClick={() => setShowModal(true)}>Event Form</button>

    </div>
  );
}

export default App;






