
import './App.css';
import React, {useState} from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';



function App() {


  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents ] = useState(true);

  const [events, setevent] = useState([
  
  ])
  const addevent = (event) => {
    setevent((prevEvents) => {
      return [...prevEvents, event]})
      setShowModal(false);
  }

 let handleClick = (id) => {
  setevent((prevEvents) => {
    return prevEvents.filter((events) => {
      return id !== events.id
    })
  })
 
 
};


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

      {showModal && <Modal isSalesModal={true} >
      <NewEventForm addevent={addevent} />
      </Modal> }
      <button onClick={() => setShowModal(true)}>Event Form</button>

    </div>
  );
}

export default App;






