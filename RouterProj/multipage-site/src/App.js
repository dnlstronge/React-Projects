import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Page comps
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>

    <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
    </Switch>

    </BrowserRouter>

    </div>
  );
}

export default App
