import './App.css'

const cardImages = [
  {"src" : "/img/helmet-1.png"},
  {"src" : "/img/potion-1.png"},
  {"src" : "/img/ring-1.png"},
  {"src" : "/img/scroll-1.png"},
  {"src" : "/img/shield-1.png"},
  {"src" : "/img/sword-1.png"},
]

function App() {
// function should do 3 things:
// duplicate card (x)
// randomize using sort (x)
// apply id to cards as key (x)
const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  // logic: will produuce sometimes + or - which is needed for sort function to determine sort position
  .map((card) => ({...card, id: Math.random()}))
  //logic: maps each item in sorted array, attaches id: random and places in a new array
}

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App