import { Context, createContext} from "react";

export const ThemeContext = createContext()

export function ThemeProvider( {children}) {
    return <ThemeContext value={{color: blue}}> {children} </ThemeContext>
}


