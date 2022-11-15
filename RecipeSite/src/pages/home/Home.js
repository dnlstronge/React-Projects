
import { UseFetch } from '../../hooks/UseFetch.js'

//styles
import './Home.css'

export default function home() {
  const {data, isPending, error} = UseFetch("http://localhost:3000/recipes")

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && data.map(recipe => (
        <h2>{recipe.title}</h2>
      ))}
      
    </div>
  )
}
