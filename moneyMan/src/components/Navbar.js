
//imports

import { Link } from 'react-router-dom'

//style

import styles from './Navbar.module.css'


export function Navbar() {
  return (
    <nav className={styles.navbar}>
    <ul>
        <li className={styles.title}>moneyMan</li>
        <li><Link></Link></li>
    </ul>

    </nav>
  )
}
