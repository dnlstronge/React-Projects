// imports:

import { Link } from 'react-router-dom';


// styles
import './Navbar.css';

// components:

import Searchbar from './Searchbar';

// hooks (gives access to useTheme obj)
import { useTheme } from '../hooks/useTheme';




export default function Navbar() {

const { color, changeColor } = useTheme()  
// destructuring of obj passed through useTheme
// the return statement outputs the template, 
// in template background is set to 'color'
// basically you are using the object to output template


  return (
    <div className='navbar' style={{background: color}}>
      <nav onClick={() => changeColor('pink')}>
      <Link className='brand' to="/">
        <h1>Cooking Stuff!</h1>
      </Link>
      <Searchbar />
      <Link to="/create">
        Create Recipe
      </Link>

      </nav>
    </div>
  )
}
