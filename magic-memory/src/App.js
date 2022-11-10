import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  {"src" : "/img/helmet-1.png", matched: false},
  {"src" : "/img/potion-1.png", matched: false},
  {"src" : "/img/ring-1.png", matched: false},
  {"src" : "/img/scroll-1.png", matched: false},
  {"src" : "/img/shield-1.png", matched: false},
  {"src" : "/img/sword-1.png", matched: false},
]

function App() {


// Game State:

const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)
const [choiceOne, setChoiceOne] = useState(null)
const [choiceTwo, setChoiceTwo] = useState(null)

// Shuffle Cards:

const shuffleCards = () => {
  
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))

  setCards(shuffledCards)
  setTurns(0)
 
}

// Handle Choice:

const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

}

//Compare the two cards: 

useEffect(() => {
  if(choiceOne && choiceTwo) {
    if (choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choiceOne.src) {
            return {...card, matched: true}
          } else {
            return card
          }
        })
      })

  resetTurn()}
    else {
      
      resetTurn()
    }
  }

}, [choiceOne, choiceTwo]) 


// log state 

console.log(cards)


// Reset


const resetTurn = () => {
setChoiceOne(null)
setChoiceTwo(null)
setTurns(prevTurns => prevTurns+1)
}

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      
<div className="card-grid">
        {cards.map(card => (
        <SingleCard 
        key={card.id} 
        card={card} 
        handleChoice={handleChoice}
        flipped={card === choiceOne || card === choiceTwo || card.matched}
        />
        ))}
    </div> 
    </div>
  );
}
/* now I want to implement card flips, e.g show back of card which flips
 to reveal image, if matches stays flipped if not flips back
im going to need a prop for flipped
flipped will be true or false, true if one of 3 things applies:
(1)the card iterated matches choiceOne
(2)the card iterated matches choiceTwo
(3)the card has already been matched (access matched property)
*/
export default App