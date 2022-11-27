import styles from './Home.module.css'
import TransactionForm  from './TransactionForm'

export function Home() {
  return (
    <div className={styles.container}>

    <div className={styles.content}>transaction list
    <TransactionForm />
      </div>
    <div className={styles.sidebar}>
      </div>

    </div>
  )
}
