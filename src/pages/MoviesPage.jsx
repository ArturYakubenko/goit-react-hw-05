import { Outlet } from 'react-router-dom'
import css from './Move.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import api from '../../api'

const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchArray, setSearchArray] = useState(null)
    const [loading, setLoading] = useState(false);

    const query = searchParams.get('query') || '';



    const handlerSearch = (evt) => {
        evt.preventDefault();
        const searchText = evt.target[0].value;
        setSearchParams({ query: searchText });
        evt.target.reset();
    };
    useEffect(() => {

        
         
            if (query) {
                const fetchSearch = async () => {
                    setLoading(true)
            const url = 'https://api.themoviedb.org/3/search/movie'
            const options = {
                params: {
                        query: `${query}`,
                        Authorization: api.token,
                        api_key: api.apiKey,
            }
            }
                    try {
                const {data}  = await axios.get(url, options)
                setSearchArray(data.results)
               
            }
            catch (error) {
                console.log(error)
            }
             finally {
        setLoading(false);
      }
        }
            
            fetchSearch()
        }
        else {
            return
            }
              
    },[query])

    return (
        <>
            <form className={css.form} onSubmit={handlerSearch}>
                <input type="text" />
                <button type='submit'>Search</button>
            </form>
            {loading ? <p>Loading data, please wait...</p> : null}
            <ul>
                {searchArray !== null && searchArray.length > 0 ? (searchArray.map((item, id) => {
                    return (
                        <li key={id}>
                            <Link to={`/Movies/${item.id}`}>{item.title}</Link>
                        </li>
                )
                })) : (null)}
            </ul>
            <Outlet/>
        </>
    )
}

export default Movies