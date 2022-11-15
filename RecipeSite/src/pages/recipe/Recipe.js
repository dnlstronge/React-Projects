import { useParams } from 'react-router-dom'
import { UseFetch } from '../../hooks/UseFetch.js'
//styles
import './Recipe.css'


export default function Recipe() {
  const { id } = useParams()
  const url = "http://localhost:3000/recipes/" +id;
  const {error, isPending, data: recipe} = UseFetch(url)

  return (
    <div className="recipe">
    {error && <p classsName="error">{error}</p>} 
    {isPending && <p className="loading">Loading...</p>}
    {recipe && <h1>{recipe.title}</h1>}
    </div>
  )
}
// need to extract data (title) from json
// pass as prop from home? use fetch?