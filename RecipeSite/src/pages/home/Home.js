
import { UseFetch } from '../../hooks/UseFetch.js'

//styles
import './Home.css'

export default function home() {
  const {data, isPending, error} = UseFetch("http://localhost:3000/recipes")

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      
    </div>
  )
}
