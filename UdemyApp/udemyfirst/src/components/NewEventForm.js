import "./NewEventForm.css"
import {useState} from 'react'

import React from 'react'



export default function NewEventForm() {

    const [title, setTitle] = useState('')
    const [date, setDate] = usedState('')

   /* const handleChange = (e) => {
        setTitle(e.target.value)
        
    }
    */


  return (
    <form clasName="new-event-form">
        <label>
        <span>Event Title</span>
            <input onChange={handleChange} type="text" />
        </label>
        <label>
        <span>Event Date</span>
            <input onChange={handleChange} type="date" />
        </label>
        <button>Submit</button>
    </form>
  )
}
