import "./NewEventForm.css"
import {useState} from 'react'

import React from 'react'



export default function NewEventForm({addevent}) {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setlocation] = useState('manchester')
    const resetForm = () => {
        setTitle('')
        setDate('')
        setlocation('manchester')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    const event = {
        title: title,
        date: date,
        location: location,
        id: Math.floor(Math.random() * 10000) 
    }
    addevent(event)
    resetForm()
    console.log(event)
    }



  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
        <span>Event Title</span>
            <input 
            onChange={(e) => setTitle(e.target.value) } 
            type="text" 
            value={title} />
        </label>
        <label>
        <span>Event Date</span>
            <input 
            onChange={(e) => setDate(e.target.value)} 
            type="date" 
            value={date}/>
        </label>
        <p>Title: {title} Date: {date}</p>
        <p className="reset" onClick={resetForm}>Reset Form</p>

        <label><span>Event Location</span>
        <select onChange={(e) => setlocation(e.target.value)}>
        <option value="manchester">Manchester</option>
        <option value="london">London</option>
        <option value="cardiff">Cardiff</option>
         </select>
        </label>
        <button>Submit</button>
        
    </form>
  )
}
// add <p> to output title and date in modal