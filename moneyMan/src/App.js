import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

//pages & comps

import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Signup } from "./pages/signup/Signup"

// import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
       </Switch>
       </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App
