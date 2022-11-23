import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'


// styles
import styles from './Signup.module.css'


export function Signup() {
const [displayName, setDisplayName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

//destructure state from hook: 

const { signup, isPending, error } = useSignup()

const handleSubmit = (e) => {
  e.preventDefault()
  signup(displayName, email, password)

}

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <label>
      <h2>Signup</h2>
      <br/>
      
      <span> Display name: </span>
        <input 
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
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
      {!isPending && <button className='btn'>Submit</button>}
      {isPending && <button className='btn' disabled>Loading..</button>}
      {error && <p>{error}</p>}
    </form>
  )
}
