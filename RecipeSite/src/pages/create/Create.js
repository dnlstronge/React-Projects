import { useState } from 'react'

// styles
import './Create.css'


// I will be creating a form
// first  need 3 pieces of state: title, method, cooking time
// will deal with ingredients later




export default function Create() {

const [title, setTitle] = useState('')
const [method, setMethod] = useState('')
const [cookingTime, setCookingTime] = useState('')


  return (
    <div>create</div>
  )
}
