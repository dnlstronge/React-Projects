import React, { useState, useEffect, useCallback } from 'react'
import './triplist.css'

export default function Triplist() {
    const [trips, settrips] = useState([])
    // first create some new state for url
    const [url, setUrl] = useState('http://localhost:3000/trips')

    //I will create an async function here:
    // I wrap the entire function in usecallback
    //this creates a cached version of a function
    // it also needs a dep array as 2nd argument
    const fetchTrips = useCallback(async () => {
      const response = await fetch(url)
      const json = await response.json()
        settrips(json)
      
    }, [url])
    // now I need to invoke this function inside the useEffect hook:
    // below is triggered to fetch new data due to dep array (url) in useCB
    useEffect(() => {
        fetchTrips()
      }, [url, fetchTrips])



// now what if one of the dependencies was a function?
// what about async - useeffect cannot be async at present
// as may cause issues in future - a function however?

//NOTE - variable references are diff so react is re-render, 
// this has cause inf loop
// object or an array as a dep would cause the same issue
//but could be wrapped in a state hook negating this
// ENTER: USE CALLBACK
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
