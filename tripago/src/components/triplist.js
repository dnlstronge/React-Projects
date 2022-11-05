import React, { useState, useEffect } from 'react'
import './triplist.css'

export default function Triplist() {
    const [trips, settrips] = useState([])
    // first create some new state for url
    const [url, setUrl] = useState('http://localhost:3000/trips')

    useEffect(() => {
        fetch (url)
        .then(response => response.json())
        .then(json => settrips(json))

    }, [url])
// empty dependency array - closer look at this
// try adding a dependency and see what happens
// now you would need to add url as a use effect dep - pass it into the empty array
// if react finds that the url value has changed it reruns the function

    console.log(trips)

        
  return (
    <div className="trip-list">
    <h2>Trip list</h2>
    <ul>
        {trips.map(trip => (
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
