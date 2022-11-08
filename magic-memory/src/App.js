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
// duplicate card
// randomize using sort
// apply id to cards as key
const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
}

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App