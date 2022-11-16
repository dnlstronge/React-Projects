import { useState } from 'react'
import Recipe from '../recipe/Recipe'

// styles
import './Create.css'


// I will be creating a form
// first  need 3 pieces of state: title, method, cooking time
// will deal with ingredients later




export default function Create() {

const [title, setTitle] = useState('')
const [method, setMethod] = useState('')
const [cookingTime, setCookingTime] = useState('')


  return (
    <div className='create'>create
    <h2 className='page-title'>Add a new recipe:</h2>

    <form>
      <label>
        <span>Recipe title:</span>
        <input
          type="text" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          />
      </label>
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
