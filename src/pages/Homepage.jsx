import React, { useContext, useEffect, useState } from 'react'
import HeroesList from '../components/HeroesList'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeContext } from '../contexts/ThemeContext'

import './Homepage.scss'

// function fetchHeroes() {
//   return axios({
//     method: 'get',
//     url: `${import.meta.env.VITE_SOME_BACKEND_URL}/api/heroes`
//   }).then(res => res.data)
// }

const Homepage = () => {

  const { theme } = useContext(ThemeContext)

  const [loadedHeroes, setloadedHeroes] = useState([])
  const [showGood, setShowGood] = useState(true)
  const [showEvil, setShowEvil] = useState(true)

  // const query = useQuery({
  //   queryFn: fetchHeroes,
  //   queryKey: ['heroes']
  // })

  // // Fetching heroes
  // useEffect(() => {
  //   console.log('Dataaaa:', query.data)
  //   setloadedHeroes(query.data)

  // }, [query.data])



  return (
    <>
      <motion.h1 initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className={`title--${theme}`}>
        Postavy Středozemě</motion.h1>
      <motion.div initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}>
        <motion.button animate={{opacity: showGood ? 1 : 0.3}} className='btn-primary btn-green' onClick={() => setShowGood(prev => !prev)}>Hodní</motion.button>
        <motion.button animate={{opacity: showEvil ? 1 : 0.3}} className='btn-primary btn-red' onClick={() => setShowEvil(prev => !prev)}>Zlí</motion.button>
      </motion.div>
      {/* {query.isLoading && <p>Načítám hrdiny :)</p>} */}
      {/* {query.isError && <p>{query.error.message}</p>} */}
      {/* {query.isSuccess && <HeroesList showGood={showGood} showEvil={showEvil} heroes={query.data.heroes} />} */}
    </>
  )
}

export default Homepage