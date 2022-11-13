
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// styles

import './App.css'

//comps

import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route>
              <Home />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
