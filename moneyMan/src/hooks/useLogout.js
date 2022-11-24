import { useState } from "react"
import { projectAuth } from './/firebase/config'
import { useAuthContext } from "./useAuthContext"


const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    //use case: in a button, therefore need function inside the hook:

    const logout = async() => {
        setError(null)      // reset
        setIsPending(true) //true because its waiting
        
        // this will sign user out:
        try {
            await projectAuth.signOut()

            //dispatch logout action - note no payload needed as just want null value
            dispatch({type: 'LOGOUT' })

            //finished load so set state:
            setIsPending(false)
            setError(null)
        }
        //catch error
        catch(err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }
    return { logout, error, isPending } 
}