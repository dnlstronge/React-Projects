import { useState } from 'react'


// styles
import './Create.css'




export default function Create() {

const [title, setTitle] = useState('')
const [method, setMethod] = useState('')
const [cookingTime, setCookingTime] = useState('')
const handleSubmit = (e) => {
  e.preventDefault()
console.log(title, method, cookingTime)
}
// need to prevent default?
//i will create log for now
//tested in console: above function logs as expected

  return (
    <div className='create'>create
    <h2 className='page-title'>Add a new recipe:</h2>

    <form onSubmit={handleSubmit}>
      <label>
        <span>Recipe title:</span>
        <input
          type="text" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          />
      </label>

      {/* Add ingredients here!  */}

      <label>
        <span>Recipe method:</span>
        <textarea
          onChange={(e) => setMethod(e.target.value)}
          value={method}
          required
          />
      </label>
      <label>
        <span>Cooking time (mins)</span>
        <input 
          type="number" 
          onChange={(e) => setCookingTime(e.target.value)}
          value={cookingTime}
          required
        />
      </label>
      <button className='btn'>Submit</button>
    </form>
    </div>
  )
}
