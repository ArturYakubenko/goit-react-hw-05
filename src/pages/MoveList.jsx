import { useParams, Outlet } from "react-router-dom"
import Details from "../components/MovieDetailsPage"

const HomePageCheckMove = () => {


    const { Movieid } = useParams()
 
    return (
        <>
            <Details Movieid={Movieid} />
            <Outlet />
        </>
    )
}

export default HomePageCheckMove