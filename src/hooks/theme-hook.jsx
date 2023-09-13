import { useReducer, useCallback } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_THEME': {
            return {
                ...state,
                theme: action.value
            }
        }
        default: {
            throw new Error('Chyba v nastavení dark modu.')
        }
    }
}
export const useTheme = () => {
    const [themeState, dispatch] = useReducer(reducer, {
        theme: 'light'
    })

    const setTheme = useCallback((theme) => {
        dispatch({
            type: 'SET_THEME',
            value: theme
        })
    })

    return { themeState, setTheme }
}
