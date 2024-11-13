import { Outlet } from 'react-router-dom'
import css from './Move.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Move = () => {

    const [text, setText] = useState(null)
    const [searchArray, setSearchArray] = useState(null)
    const [loading, setLoading] = useState(false);

    const handlerSearch = (evt) => {
        evt.preventDefault()
        setText(evt.target[0].value)
         evt.target.reset()
    }

    useEffect(() => {

        
         
            if (text !== null) {
                const fetchSearch = async () => {
                    setLoading(true)
            const url = 'https://api.themoviedb.org/3/search/movie'
            const options = {
                params: {
                        query: `${text}`,
                        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTdlYWEwM2E1MTkzNjk3ODQ4NGQzNGE3ZjFkMDdlYyIsIm5iZiI6MTczMDkzMDI2Ny44MTIwNDQ2LCJzdWIiOiI2NzJhMTcyZjA2ZGM4ODU5NjMyNDBjZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iYetET6XeiyOWU32L5POgtUJsmqPOUFH8rDkB5N2IAk',
                        api_key: 'ea7eaa03a51936978484d34a7f1d07ec',
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
              
    },[text])

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
                            <Link to={`/Move/${item.id}`}>{item.title}</Link>
                        </li>
                )
                })) : (null)}
            </ul>
            <Outlet/>
        </>
    )
}

export default Move