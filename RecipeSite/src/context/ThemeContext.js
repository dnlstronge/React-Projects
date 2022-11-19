import { createContext, useReducer} from "react";


// this creates context & includes certain logic for updating,
// also where it goes, what properties it has etc
// it is passed to my custome hook useTheme
export const ThemeContext = createContext()


/////// contains the logic to change state: 
const themeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return {...state, color: action.payload}
            default: {
                return state
            }
    }
    

}

/////////////// instructs where to place & how to update
// and what can be updated (state), if updating the react looks at the
// action object and the function associated with dispatch:
// (themeReducer, state....)
// fire themReducer above which contains the updating logic
// note how this is a switch statement, for multiple cases.....

export function ThemeProvider( {children}) {

    const [state, dispatch] = useReducer(themeReducer, {
        color: "#58249c"
    })
// Default 'color'


    const changeColor = (color) => {
        dispatch({type: "CHANGE_COLOR", payload: color})
        
    }

    return (

    <ThemeContext.Provider value={{...state, changeColor}}> 
    {children} 
    </ThemeContext.Provider>
)}

//above: context in which the state and function can be used (see index for scope: App)


