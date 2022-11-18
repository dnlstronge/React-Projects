import { createContext, useReducer} from "react";

export const ThemeContext = createContext()

const themeReducer = () => {}

export function ThemeProvider( {children}) {
    useReducer(themeReducer, {
        color: "blue"
    })
// second argument is the object w/ property to change
    return (
    <ThemeContext.Provider value={{color: "blue"}}> 
    {children} 
    </ThemeContext.Provider>
)}


