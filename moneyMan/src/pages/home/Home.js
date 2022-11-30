// styles

import styles from './Home.module.css'

// hooks 

import { useAuthContext } from '../../hooks/useAuthContext'

//comps

import TransactionForm  from './TransactionForm'

export function Home() {
  const { user } = useAuthContext()

  return (
    <div className={styles.container}>

    <div className={styles.content}>transaction list
    
      </div>

    <div className={styles.sidebar}>
    <TransactionForm uid={user.uid}/>
      </div>

    </div>
  )
}
