import Triplist from './components/triplist';
import './App.css';
import {useState} from  'react';

function App() {
  const [showTrips, setShowTrips] = useState(true)
  return (
    <div className="App">
    <button onClick={() => setShowTrips(false)}>Hide Trips</button>
    {showTrips && <Triplist />}
    </div>
  );
}

export default App;
