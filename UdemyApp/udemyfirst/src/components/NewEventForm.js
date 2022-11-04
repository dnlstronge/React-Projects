import "./NewEventForm.css"
import {useState} from 'react'

import React from 'react'



export default function NewEventForm({addevent}) {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const resetForm = () => {
        setTitle('')
        setDate('')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    const event = {
        title: title,
        date: date,
        id: Math.floor(Math.random() * 10000) // not ideal but will do for now
    }
    addevent(event)
    resetForm()
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
        <button>Submit</button>
        
    </form>
  )
}
// add <p> to output title and date in modal