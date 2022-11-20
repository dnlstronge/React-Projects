
import { useParams } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config.js'

// hooks 

import { useTheme } from '../../hooks/useTheme.js'
import { useEffect, useState } from 'react'

//styles

import './Recipe.css'


export default function Recipe() {
    const { mode } = useTheme()
    const { id } = useParams() 


  
    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
      setIsPending(true)

      projectFirestore.collection('recipes').doc(id).get().then((doc) => {
        if(doc.exists) {
          setIsPending(false)
          setRecipe(doc.data())
        } else {
          setIsPending(false)
          setError('Recipe not found')
        }
      })

    }, [id])

 

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
