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

// if the cards match will need to do something:
// this is where I will update the 'matched' property i've just added to the
// objects in the cardimages array

//map a new array which contains all the same cards but two will have the matched
//property set to true. 

// used conditional so if card src matches a new array is returned with any match
// having the matched property now set as true
//if there is no match the card is simply returned
// the new array is the new state for the cards
//fix error in returned array, need strict equals 
//log card to check it's working (clear): output new array with property changed on match

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
        handleChoice={handleChoice}/>
        ))}
    </div> 
    </div>
  );
}

export default App