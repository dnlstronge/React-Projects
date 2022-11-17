import { UseFetch } from '../../hooks/UseFetch'
import { useLocation } from 'react-router-dom'

//comps

import RecipeList from '../../components/RecipeList'

//style
import './Search.css'


export default function Search() {
const queryString = useLocation()
const queryParams = new URLSearchParams(queryString)
const query = queryParams.get('q')

//pass query string (?q:whatever) into useLocation
// query gets the value of query parameter
// send a request with useFetch to get whatever matches the param
// need an endpoint (creat var to store it)

const url = "http://localhost:3000/recipes?q=" + query
const {error, isPending, data} = UseFetch(url)

  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
