import { useState } from 'react'
import { useHistory } from 'react-router-dom'

//style

import './Searchbar.css'

// create state for search change value: 


export default function Searchbar() {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search?q${term}`)
    }
// in handleSub I want to send the user to the search page....
// query param :? ? goes on end of route for the search page


  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input 
            type="text" 
            id="search"
            onChange={(e) => setTerm(e.target.value)}
            required
        />
    </form>
    </div>
  )
}
