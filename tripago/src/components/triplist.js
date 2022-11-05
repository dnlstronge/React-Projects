import React, { useState, useEffect, useCallback } from 'react'
import './triplist.css'

//try creating a custom hook to bundle all of the fetch logic:

export default function Triplist() {
    const [trips, settrips] = useState([])

    const [url, setUrl] = useState('http://localhost:3000/trips')

    const fetchTrips = useCallback(async () => {
      const response = await fetch(url)
      const json = await response.json()
        settrips(json)
      
    }, [url])
    useEffect(() => {
        fetchTrips()
      }, [ fetchTrips])



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
