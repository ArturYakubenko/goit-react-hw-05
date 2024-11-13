import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import css from './Casts.module.css'

const Casts = () => {

    const { id } = useParams()
    const forImgAct = "https://image.tmdb.org/t/p/w500"
    const [actors, setActors] = useState(null)
     const [loading, setLoading] = useState(false);

    useEffect(() => {

    const fetchCastst = async () => {
        setLoading(true)
        const url = `https://api.themoviedb.org/3/movie/${id}/credits`
            const options = {
                    params : {
                    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTdlYWEwM2E1MTkzNjk3ODQ4NGQzNGE3ZjFkMDdlYyIsIm5iZiI6MTczMDkzMDI2Ny44MTIwNDQ2LCJzdWIiOiI2NzJhMTcyZjA2ZGM4ODU5NjMyNDBjZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iYetET6XeiyOWU32L5POgtUJsmqPOUFH8rDkB5N2IAk',
                    api_key: 'ea7eaa03a51936978484d34a7f1d07ec',
            }
            }
            try {
                const { data } = await axios.get(url, options)
                setActors(data.cast)
            }
            catch (error) {
                console.log(error)
        }
        finally {
        setLoading(false);
      }
        }
        fetchCastst()
    }, []) 
  

    return (
    <div>
        {loading ? <p>Loading data, please wait...</p> : null}
        <ul className={css.actorsList}>
            {actors !== null && actors.length > 0 && (actors.map((item, id) => {
                return (
                    <li key={id} >
                        <img className={css.actCard} src={`${forImgAct}${item.profile_path}`} alt="" />
                         <h3>{item.name}</h3>
                    </li>)
            }))}    
            </ul>
        </div>
    )
}

export default Casts