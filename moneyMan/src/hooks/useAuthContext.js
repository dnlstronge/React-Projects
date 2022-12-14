import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";



export const useAuthContext = () => {
    const context = useContext(AuthContext) // object containing ...state + dispatch

    if(!context) {
        throw Error('useAuthContext must be inside AuthContext provider')
    }

    return context
}