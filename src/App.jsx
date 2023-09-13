import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { motion } from 'framer-motion'

import './App.scss'

import Homepage from './pages/Homepage'

import { useTheme } from './hooks/theme-hook'
import { DarkModeToggle } from './components/DarkModeToggle'
import { ThemeContext } from './contexts/ThemeContext'



const queryClient = new QueryClient()

function App() {

  const { themeState, setTheme } = useTheme()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{
        theme: themeState.theme,
        setTheme: setTheme
      }}>
        <DarkModeToggle />
        <motion.div
        // initial={{opacity: 0}}
        // animate={{opacity: 1}}
        // exit={{opacity: 0}}
        >
          <Homepage />
        </motion.div>
      </ThemeContext.Provider>
    </QueryClientProvider>
  )
}

export default App
