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

// note I take in the the event object because again I want to prevent default
// trim is used to remove any unwanted whitespace
// recall I previously stated this is where I would avoid dupes of ingredients!!!!

const handleAdd = (e) => {
  e.preventDefault()
  const ing = newIngredient.trim()
  if (ing && !ingredients.includes(ing))
}

// new state added for ingredient, will not store all, just value currently entered
// once it has beened added via the input field, I want to add it to an array
// so i will store the array in different bit of state

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

{/* will need to create some state for new ingredients

//hook up to state i have created above 
//remember to have two-way binding!

//btn: needs onclick ingredient so it can take state and pass to new state in array
// need to create functions to handleAdd*/}

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
