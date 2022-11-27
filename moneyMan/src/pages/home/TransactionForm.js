import { useState } from "react"

export default function TransactionForm() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

  return (
    <>
    <h3>Add a transaction</h3>
    <form> 
    <label>
        <span>Transaction name:</span>
        <input 
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name}
            />
    </label>
    <label>
    <span>Transaction amount:</span>
        <input 
            type="text"
            required
            onChange={(e) => setAmount(e.target.value)} 
            value={amount}
            />
    </label>
    </form>
    </>
  )
}
