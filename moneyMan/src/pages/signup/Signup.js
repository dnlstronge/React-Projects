import { useState } from 'react'


// styles
import styles from './Signup.module.css'


export function Signup() {
const [userName, setUserName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(userName, email, password)

}

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <label>
      <h2>Signup:</h2>
      <br></br>
      <br></br>
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
      <button className='btn'>Submit</button>
    </form>
  )
}
