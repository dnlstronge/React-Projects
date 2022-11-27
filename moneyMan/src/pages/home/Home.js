import styles from './Home.module.css'

//comps

import TransactionForm  from './TransactionForm'

export function Home() {
  return (
    <div className={styles.container}>

    <div className={styles.content}>transaction list
    
      </div>

    <div className={styles.sidebar}>
    <TransactionForm />
      </div>

    </div>
  )
}
