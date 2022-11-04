import React, { useState, useEffect } from 'react'
import './triplist.css'

export default function Triplist() {
    const [trips, settrips] = useState([])

    useEffect(() => {
        fetch ('http://localhost:3000/trips')
        .then(response => response.json())
        .then(json => settrips(json))

    }, [])

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
