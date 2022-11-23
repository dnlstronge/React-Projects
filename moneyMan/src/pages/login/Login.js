import { useState } from 'react'

//styles
import styles from './Login.module.css'



export function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = () => {}

  return (
  <form onSubmit={handleSubmit} className={styles['login-form']}>
    <h2>Login</h2>
    <label>
    <span>Email:</span>
      <input 
      type="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      />
    </label>
    <label>
      <span>Password:</span>
      <input 
      type="password" 
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />
    </label>
    <button className="btn">Login</button>
  </form>
  )
}
