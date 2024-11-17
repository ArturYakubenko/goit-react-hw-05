import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios"

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
                    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTdlYWEwM2E1MTkzNjk3ODQ4NGQzNGE3ZjFkMDdlYyIsIm5iZiI6MTczMDkzMDI2Ny44MTIwNDQ2LCJzdWIiOiI2NzJhMTcyZjA2ZGM4ODU5NjMyNDBjZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iYetET6XeiyOWU32L5POgtUJsmqPOUFH8rDkB5N2IAk',
                    api_key: 'ea7eaa03a51936978484d34a7f1d07ec',
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
    }, []) 

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