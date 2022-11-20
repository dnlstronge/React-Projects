import { useParams } from 'react-router-dom'

// hooks 
import { UseFetch } from '../../hooks/UseFetch.js'
import { useTheme } from '../../hooks/useTheme.js'

//styles

import './Recipe.css'

//remove json server access point (now using firebase)
// keep 3 pieces of state

export default function Recipe() {
  const { mode } = useTheme()
  const { id } = useParams()
 

  return (
    <div className={`recipe ${mode}`}>
    {error && <p className="error">{error}</p>} 
    {isPending && <p className="loading">Loading...</p>}
    {recipe && (
    <>
      <h2 className="page-title">{recipe.title} </h2>
      <p>Takes {recipe.cookingTime} to cook</p>
      <ul>
        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)} 
      </ul>
      <p className="method">{recipe.method}</p>
    </> )}
    
    </div>
  )
}
