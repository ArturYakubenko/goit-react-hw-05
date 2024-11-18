import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
import api from "../../api";

const Reviwes = () => {

    const { Movieid } = useParams()

    const [rew, setRew] = useState(null)
    const [loading, setLoading] = useState(false);


    useEffect(() => {

    const fetchRew = async () => {
        setLoading(true)
        const url = `https://api.themoviedb.org/3/movie/${Movieid}/reviews
`
            const options = {
                    params : {
                        Authorization: api.token,
                        api_key: api.apiKey,
            }
            }
            try {
                const { data } = await axios.get(url, options)
                setRew(data.results)
            }
            catch (error) {
                console.log(error)
        }
        finally {
        setLoading(false);
      }
        }
        fetchRew()
    }, [Movieid]) 

    return (
        <div>
            {loading ? <p>Loading data, please wait...</p> : null}
        <ul>
            {rew !== null && rew.length > 0 ? (rew.map((item, id) => {
                return (
                    <li key={id}>
                        <h3>Author:{item.author}</h3>
                        <p>{item.content}</p>
                    </li>
            )})):(<p>content not found</p>)}
            </ul>
            </div>
    )
}

export default Reviwes