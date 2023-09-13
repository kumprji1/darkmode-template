import React, { useState, useEffect, useContext } from "react";

import { useMediaQuery } from "react-responsive";

import Toggle from "react-toggle";
import "react-toggle/style.css"
import { ThemeContext } from "../contexts/ThemeContext";

export const DarkModeToggle = () => {
    const theme = useContext(ThemeContext)

    // Get system preferences wheter use dark mode or not
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        }
    );

    // Set system preferences first
    const [isDark, setIsDark] = useState(systemPrefersDark);

    // Try to get value from stored key in local storage
    const preferedColorSchemeState = localStorage.getItem('preferedColorScheme')

    // If no preferedMode is stored, use systems prefered, else use stored
    useEffect(() => {
        if (!preferedColorSchemeState) {
            setIsDark(systemPrefersDark)
        } else {
            setIsDark(preferedColorSchemeState === 'dark' ? true : false)
        }
    }, [])

    // Changing body className 'dark'
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
            theme.setTheme('dark')
            localStorage.setItem('preferedColorScheme', 'dark')
        } else {
            document.body.classList.remove('dark');
            theme.setTheme('light')
            localStorage.setItem('preferedColorScheme', 'light')
        }
    }   
    , [isDark]);



    return (
        <Toggle
            checked={isDark}
            onChange={({ target }) => setIsDark(target.checked)}
            icons={{ checked: "🌙🦇", unchecked: "🔆" }}
            aria-label="Dark mode toggle"
        />
    );
};