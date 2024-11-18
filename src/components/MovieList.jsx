import  axios  from "axios";
import { useEffect, useState } from "react";
import css from '../pages/HomePages.module.css'
import { Link } from "react-router-dom";
import api from "../../api";

const MovieList = () => {
    const [popularMove, setPopularMove] = useState(null)
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
            const options = {
                    params : {
                        Authorization: api.token,
                        api_key: api.apiKey,
            }
            }
            try {
                const {data}  = await axios.get(url, options)
                setPopularMove(data.results)
            }
            catch (error) {
                console.log(error)
            }
            finally {
        setLoading(false);
      }
        }
        fetchData()
        
    },[])
    return (
<div className={css.homePageWrap}>
            <h2>Trending today</h2>
            {loading ? <p>Loading data, please wait...</p> : null}
            <ul >
               { popularMove !== null && (popularMove.map((item, id) => 
                   { return (<li key={id}>
                        <Link to={`/Movies/${item.id}`}>{item.title}</Link>
                    </li>)}
              ))}
            </ul>
        </div>
    )
}

export default MovieList