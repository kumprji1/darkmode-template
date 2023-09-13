import './HeroesList.scss'
import HeroItem from './HeroItem'

const HeroesList = ({ heroes, showGood, showEvil }) => {

    const filterVisibleHeroes = (isFriendly) => {
        if (isFriendly) {
            if (showGood)
            return true
        else return false
        } else {
            if (showEvil) 
            return true
        else return false
        }
    }

    const heroesJSX = heroes.map(hero => <HeroItem key={hero.name} hero={hero} showHero={filterVisibleHeroes(hero.isFriendly)} />)

    return (
        <div className='heroesList'>{heroesJSX}</div>
    )
}

export default HeroesList