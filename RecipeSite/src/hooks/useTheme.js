// I am a custom hook
// Checks that everything is ok, e.g it exists
// and exports to navbar if it does

import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';


export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("Error: useTheme() must be used withing a ThemeProvider")
    }

    return context
}
