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
      
  setTimeout( () => resetTurn(), 1000)
    }
  }

}, [choiceOne, choiceTwo]) 

// now i want to add a delay when a card is flipped, i.e so it doesn't reset
// to null instantly if no match is selected, settimeout?

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

export default App