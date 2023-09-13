import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const HeroItem = ({ hero, showHero }) => {
    const [imgIsLoaded, setImgIsLoaded] = useState(false)

    useEffect(() => {
        return () => {
            setImgIsLoaded(false)
        }
    }, [])

    return (
        <AnimatePresence>
        {showHero && <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            exit={{ opacity: 0, y: 30}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
            className='heroItem'>
            <div className='heroPhoto--wrapper'>
                {!imgIsLoaded && <p>Načítám obrázek...</p>}
                <motion.img
                animate={{opacity: imgIsLoaded ? 1 : 0}}
                    style={imgIsLoaded ? {} : { display: 'none' }}
                    src={hero.photo}
                    onLoad={() => setImgIsLoaded(true )}
                />
            </div>
            <h2 className='heroName'>{hero.name} {hero.surname}</h2>
        </motion.div>}</AnimatePresence>
    )
}

export default HeroItem