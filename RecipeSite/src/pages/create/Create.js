// imports
import { useState, useRef, } from 'react'
import { useHistory } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config.js'



// styles
import './Create.css'


//comp:

export default function Create() {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()
  


  const handleSubmit = async (e) => {
    e.preventDefault()
    const doc = { title, ingredients, method, cookingTime: cookingTime + ' minutes' }
    try {
    await projectFirestore.collection('recipes').add(doc)
    
    // after above has finished push user back: 
    history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()

  const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing ])
      }
    setNewIngredient('')
    ingredientInput.current.focus()
  
   

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
            ref={ingredientInput}
          />
          <button 
          className='btn' 
          onClick={handleAdd}> Add
          </button>
        </div>
      </label>
      <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

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
