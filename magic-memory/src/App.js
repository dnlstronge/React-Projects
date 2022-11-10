import { useState } from 'react'
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

  //Note: next need to update state, in order to determine whether
  // it's choice one or two, if choice one has a value then it must be
  // choice two. I can use a ternary op for this......


const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

// LOGIC: if choice one is null evals to true and calls setchoiceOne
//if not null evals to false and calls setChoiceTwo
/* oops, other way round so:

when its first called the state will be null,
null compared to a value(which I have for setstate) will evaluate to
false, and because null is involved I want to update choice one,
so the ternary should update choice one on false

next: choiceone now has a value as the state has been updated as above
so when next handlechoice is called, I am comparing a value with a value
null is not involved, comparing a value to a value will evaluate to true and the ternary
should update choice two if true.

put another way, because I will always have a value from onclick: 'card'
I will never be comparing null to null. therefore the ternary op needs
to account for this. it will only eval to true when I have two values
and that is how I know which state to update.

*/
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