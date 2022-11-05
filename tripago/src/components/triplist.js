import React, { useState, useEffect } from 'react'
import './triplist.css'

export default function Triplist() {
    const [trips, settrips] = useState([])
    // first create some new state for url
    const [url, setUrl] = useState('http://localhost:3000/trips')

    //I will create an async function here:
    const fetchTrips = async () => {
      const response = await fetch(url)
      const json = await response.json()
        settrips(json)
      
    }
    // now I need to invoke this function inside the useEffect hook:

    useEffect(() => {
        fetchTrips()
      }, [url])

//(clear!)

// now what if one of the dependencies was a function?
// what about async - useeffect cannot be async at present
// as may cause issues in future - a function however?
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
