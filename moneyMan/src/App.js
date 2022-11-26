import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'; 


//pages & comps
 
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Signup } from "./pages/signup/Signup"
import { Navbar } from './components/Navbar'

// import './App.css'

function App() {
  const { authIsReady } = useAuthContext()


  return (
    <div className="App">
    {authIsReady && (
      <BrowserRouter>
      <Navbar />
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
      </BrowserRouter>
    )}
    </div>
  );
}

export default App
