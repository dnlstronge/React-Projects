
//imports

import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'


//style

import styles from './Navbar.module.css'


export function Navbar() {

  const { logout } = useLogout()
  const { user } = useAuthContext()
 



  return (
    <nav className={styles.navbar}>
    <ul>
        <li className={styles.title}>moneyMan</li>

    {(!user &&
      <> 
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>

     </>
    )}
        <li>
          <button className="btn" onClick={ logout }>Logout</button>
        </li>
    </ul>

    </nav>
  )
}
