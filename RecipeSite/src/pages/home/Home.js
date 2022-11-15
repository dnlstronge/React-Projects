
//hooks
import { UseFetch } from '../../hooks/UseFetch.js'

//Components
import RecipeList from '../../components/RecipeList.js'

//styles
import './Home.css'

export default function home() {
  const {data, isPending, error} = UseFetch("http://localhost:3000/recipes")

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data}/>}
      
    </div>
  )
}
