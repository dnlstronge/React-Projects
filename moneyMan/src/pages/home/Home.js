// styles

import styles from './Home.module.css'

// hooks 

import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

//comps
import TransactionList from './TransactionList'
import TransactionForm  from './TransactionForm'

export function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'transactions',
    ['', '', '']
  )

  return (
    <div className={styles.container}>

    <div className={styles.content}>
    {error && <p>{error}</p>}
    {documents && <TransactionList transactions={documents}/>}
    
      </div>

    <div className={styles.sidebar}>
    <TransactionForm uid={user.uid}/>
      </div>

    </div>
  )
}
