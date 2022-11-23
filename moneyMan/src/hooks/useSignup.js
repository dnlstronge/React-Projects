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
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        console.log(res.user) // the user it just created
        if(!res) {
            throw new Error('Could not complete signup')
        }
        //add displayname to user profile:
        await res.user.updateProfile({ displayName })

        setIsPending(false)
        setError(null)
      }  
      catch(err) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
      }
    }
return {error, isPending, signup}
}