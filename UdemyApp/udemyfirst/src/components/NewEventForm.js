import "./NewEventForm.css"
import {useState} from 'react'

import React from 'react'



export default function NewEventForm() {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

   /* const handleChange = (e) => {
        setTitle(e.target.value)
        
    }
    */


  return (
    <form clasName="new-event-form">
        <label>
        <span>Event Title</span>
            <input onChange={(e) => setTitle(e.target.value) } type="text" />
        </label>
        <label>
        <span>Event Date</span>
            <input onChange={(e) => setDate(e.target.value)} type="date" />
        </label>
        <button>Submit</button>
        <p>Title: {title} Date: {date}</p>
    </form>
  )
}
// add <p> to output title and date in modal