import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  {"src" : "/img/helmet-1.png"},
  {"src" : "/img/potion-1.png"},
  {"src" : "/img/ring-1.png"},
  {"src" : "/img/scroll-1.png"},
  {"src" : "/img/shield-1.png"},
  {"src" : "/img/sword-1.png"},
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

//compare the two cards

useEffect(() => {
  if(choiceOne && choiceTwo) {
    if (choiceOne.src === choiceTwo.src) {console.log("We have a Match!")
  resetTurn()}
    else {
      console.log("No Match!")
      resetTurn()
    }
  }

}, [choiceOne, choiceTwo]) // this will fire once and then if there is a change to choice 1/2


// want reset to fire after two choices are compared
// how do I solve this if I place function in handle choice to compare it will fire
// before i actually have two choices to compare?! promise ? useeffect?
// okay went with use effect
// Reset choices and increment turn
// test console logs for match/notmatch (clear)

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