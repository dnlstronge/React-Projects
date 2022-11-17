import { Link } from 'react-router-dom'
//styles
import './RecipeList.css'


export default function RecipeList({recipes}) {

if (recipes.length === 0) {
  return <div className='error'>No recipies found...</div>
}

  return (
    <div className="recipe-list">
        {recipes.map(recipe => (
            <div key={recipe.id} className="card">
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
            </div>

        ))}
    </div>
  )
}
//note && is no longer required as there will only ever be data
//as determined in home.js template