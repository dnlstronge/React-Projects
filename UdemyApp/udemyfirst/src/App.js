
import './App.css';
import {useState} from 'react';



function App() {

  let [name, setName] = useState("Steve")

let handleClick = () => {
  setName("kevin")
  alert(`${name} is the man`)
  console.log(name)
};

  return (
    <div className="App">
    <h1>His name was {name}</h1>
    <button onClick={handleClick}>Change name</button>
    </div>
  );
}
// important :)

export default App;
