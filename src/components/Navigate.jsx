import { NavLink } from "react-router-dom"
import css from '../App.module.css';
import clsx from 'clsx';



const Navigate = () => {
    const buildClass = ({isActive}) => clsx(css.link, isActive && css.active);
    return (
        <header>
        <NavLink to="/" className={buildClass}>Home</NavLink>
        <NavLink to="/Movies" className={buildClass}>Movies</NavLink>
      </header>
    )
}

export default Navigate