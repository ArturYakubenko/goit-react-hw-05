
import css from '../pages/HomePages.module.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const MovieList = ({popularMove}) => {
    const location = useLocation()

    return (
        <div className={css.homePageWrap}>
            <ul >
               { popularMove && (popularMove.map((item, id) => 
                   { return (<li key={id}>
                                <Link to={`/Movies/${item.id}`} state={{ from: location }} >{item.title}</Link>
                            </li>)}
              ))}
            </ul>
        </div>
    )
}

export default MovieList