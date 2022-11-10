
import './singleCard.css'

//add onclick to back of card

export default function SingleCard({ card }) {
// function needs to refer to function inside app.js which handles choice state
 const handleClick = () => {

 }

  return (
  <div className="card" > 
    <div> 
      <img className="front" src={card.src} alt="card front"/>
      <img className="back" 
           src="/img/cover.png" 
           alt="card back" 
           onClick={handleClick}/>
    </div>
</div>

  )
}
