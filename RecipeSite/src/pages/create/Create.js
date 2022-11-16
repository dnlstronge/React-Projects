// imports
import { useState } from 'react'


// styles
import './Create.css'


//comp:

export default function Create() {

const [title, setTitle] = useState('')
const [method, setMethod] = useState('')
const [cookingTime, setCookingTime] = useState('')
const [newIngredient, setNewIngredient] = useState('')
const [ingredients, setIngredients] = useState([])



const handleSubmit = (e) => {
  e.preventDefault()
console.log(title, method, cookingTime)
}
const handleAdd = (e) => {
  e.preventDefault()
  const ing = newIngredient.trim()
  if (ing && !ingredients.includes(ing))
  return {ing}
}

  return (
    <div className='create'>
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


      <label>
        <span>Recipe ingredients:</span>
        <div className="ingredients">
          <input type="text" 
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <button 
          className='btn' 
          onClick={handleAdd}> Add
          </button>
        </div>
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
