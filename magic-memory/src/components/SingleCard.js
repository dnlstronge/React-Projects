
import './singleCard.css'



// extract new component from app.js to create new component
//which functions exactly the same

export default function SingleCard({ card }) {
 
  return (
  <div className="card" > 
    <div> 
      <img className="front" src={card.src} alt="card front"/>
      <img className="back" src="/img/cover.png" alt="card back"/>
    </div>
</div>

  )
}
