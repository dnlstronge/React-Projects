import { useState } from "react"
import { projectAuth } from "../firebase/config"


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

      try {
        // sign up user:
        await projectAuth.createUserWithEmailAndPassword()
      }  
      catch(err) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
      }
    }
return {error, isPending, signup}
}