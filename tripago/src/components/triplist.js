import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import './triplist.css'

//try creating a custom hook to bundle all of the fetch logic:
// remove the state to for getting trips data - now got with custom hook
// uses data from the new hook instead

export default function Triplist() {
 

    const [url, setUrl] = useState('http://localhost:3000/trips')
    const {data} = useFetch(url)

   // removed logic as no longer needed

  // need to changes 'trips' to data, as now cycling through 'data   
  return (
    <div className="trip-list">
    <h2>Trip list</h2>
    <ul>
        {data.map(trip => (
        <li key={trip.id}>
        <h3>{trip.title}</h3>
        <p>{trip.price}</p>
        </li> ))}
    </ul>
    <div className="filters">
      <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
        European Trips
      </button>
      <button onClick={() => setUrl('http://localhost:3000/trips')}>
        All trips
      </button>
    </div>
    </div>
 
  )
}
