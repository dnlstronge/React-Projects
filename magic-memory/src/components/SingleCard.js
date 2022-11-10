
import './singleCard.css'

//accept prop from app.js for flipped
//when flipped is true it will have the flipped class

export default function SingleCard({ card, handleChoice, flipped }) {

 const handleClick = () => {
  handleChoice(card)
 }

  return (
  <div className="card" > 
    <div className={flipped ? "flipped" : ""}> 
      <img className="front" src={card.src} alt="card front"/>
      <img className="back" 
           src="/img/cover.png" 
           alt="card back" 
           onClick={handleClick}/>
    </div>
</div>

  )
}
