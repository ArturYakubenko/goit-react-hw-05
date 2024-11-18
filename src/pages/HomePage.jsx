
import { useEffect, useState} from 'react'
import MovieList from '../components/MovieList'
import api from '../../api'
import axios from 'axios'



const HomePages = () => {

    const [popularMove, setPopularMove] = useState(null)
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
            const options = {
                    params : {
                        Authorization: api.token,
                        api_key: "ea7eaa03a51936978484d34a7f1d07ec",
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
        
    }, [])
    


    return (
        <>
            <h2>Trending today</h2>
            <MovieList popularMove={popularMove} loading={loading} /> 
            {loading ? <p>Loading data, please wait...</p> : null}
            </>
    )
}

export default HomePages