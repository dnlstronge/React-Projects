import { useState } from 'react'


// styles
import styles from './Signup.module.css'


export function Signup() {
const [userName, setUserName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = () => {

}

  return (
    <form className={styles['signup-form']}>
      <label>
      <span> Username:</span>
        <input 
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </label>
      <label>
      <span>Email:</span>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}    
        value={email}  
       />
      </label>
      <label>
      <span>Password</span>
      <input 
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      /> 
      </label>
      <button className='btn'>Signup</button>
    </form>
  )
}
