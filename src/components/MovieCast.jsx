import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import css from './Casts.module.css'

const Cast = () => {

    const { Movieid } = useParams()
    const forImgAct = "https://image.tmdb.org/t/p/w500"
    const [actors, setActors] = useState(null)
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {

    const fetchCastst = async () => {
        setLoading(true)
        const url = `https://api.themoviedb.org/3/movie/${Movieid}/credits`
            const options = {
                    params : {
                        api_key: "ea7eaa03a51936978484d34a7f1d07ec",
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
    }, [Movieid]) 
  

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

export default Cast