
import { useParams } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config.js'

// hooks 

import { useTheme } from '../../hooks/useTheme.js'
import { useEffect, useState } from 'react'

//styles

import './Recipe.css'

//remove json server access point (now using firebase)
// bring in 3 pieces of state

export default function Recipe() {
    const { mode } = useTheme()
    const { id } = useParams() // this now grabs the firestore id


    // change data/setdata to recipe/setRecipe and should work:
    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
      setIsPending(true)
//returns a promise:
      projectFirestore.collection('recipes').doc(id).get().then((doc) => {
        if(doc.exists) {
          setIsPending(false)

          //function creates a JS obj
          setRecipe(doc.data())
        } else {
          setIsPending(false)
          setError('Recipe not found')
        }
      })
// id is an outside var and needs to be added to dep array, even though wont change
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
