import React from 'react'

export default function EventList({handleClick, events}) {
  return (
    <div>{events.map((element, index) => (
        <React.Fragment key={element.id}>
       
        <h2> * {element.title} - {element.price}</h2>
        <button onClick={() => handleClick(element.id)}>Delete element </button>
        </React.Fragment>
        ))}</div>
  )
}
