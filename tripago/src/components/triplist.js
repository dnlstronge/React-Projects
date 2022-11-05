import React, { useState, useEffect } from 'react'
import './triplist.css'

export default function Triplist() {
    const [trips, settrips] = useState([])
    // first create some new state for url
    const [url, setUrl] = useState('http://localhost:3000/trips')

    useEffect(() => {
        fetch ()
        .then(response => response.json())
        .then(json => settrips(json))

    }, [])
// empty dependency array - closer look at this
// try adding a dependency and see what happens
    console.log(trips)

        
  return (
    <div className="trip-list"><h2>Trip list</h2>
    <ul>
        {trips.map(trip => (
        <li key={trip.id}>
        <h3>{trip.title}</h3>
        <p>{trip.price}</p>
        </li> ))}
    </ul>
    </div>
  )
}
