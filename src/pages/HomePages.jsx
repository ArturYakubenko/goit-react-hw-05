import { useEffect, useState } from 'react'
import css from './HomePages.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

const HomePages = () => {

    const [popularMove, setPopularMove] = useState(null)
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
            const options = {
                    params : {
                        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTdlYWEwM2E1MTkzNjk3ODQ4NGQzNGE3ZjFkMDdlYyIsIm5iZiI6MTczMDkzMDI2Ny44MTIwNDQ2LCJzdWIiOiI2NzJhMTcyZjA2ZGM4ODU5NjMyNDBjZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iYetET6XeiyOWU32L5POgtUJsmqPOUFH8rDkB5N2IAk',
                        api_key: 'ea7eaa03a51936978484d34a7f1d07ec',
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
                        <Link to={`/Move/${item.id}`}>{item.title}</Link>
                    </li>)}
              ))}
            </ul>
        </div>
    )
}

export default HomePages