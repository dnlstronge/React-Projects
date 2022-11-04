import React from 'react'
import styles from './EventList.module.css'

export default function EventList({handleClick, events}) {
  return (
    <div>{events.map((element, index) => (
        <div className={styles.card}key={element.id}>
       
        <h2> * {element.title} - {element.price}</h2>
        <p>{element.location} - {element.date}</p>
        <button onClick={() => handleClick(element.id)}>Delete element </button>
        </div>
        ))}</div>
  )
}
