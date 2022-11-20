import { Link } from 'react-router-dom'
import { projectFirestore } from '../firebase/config.js'

//asset
import Trashcan from '../assets/trashcan.svg'

//styles
import './RecipeList.css'

//hook:
import { useTheme } from '../hooks/useTheme'


export default function RecipeList({recipes}) {
const { mode } = useTheme()

if (recipes.length === 0) {
  return <div className='error'>No recipies found...</div>
}

const handleClick = (id) => {
  projectFirestore.collection('recipes').doc(id).delete()
}

  return (
    <div className="recipe-list">
        {recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                <img 
                  className="delete"
                  src={Trashcan}
                  onClick={() => handleClick(recipe.id)}
                />
            </div>
// reason handle click is wrapped in funciton is so it does not autofire!
        ))}
    </div>
  )
}
