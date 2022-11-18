import React from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';


export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {dosomething}

    return useContext
}
