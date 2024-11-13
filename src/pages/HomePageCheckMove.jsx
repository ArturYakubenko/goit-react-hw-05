import { useParams, Outlet } from "react-router-dom"
import Details from "../components/Details"

const HomePageCheckMove = () => {


    const { id } = useParams()
 
    return (
        <>
            <Details id={id} />
            <Outlet />
        </>
    )
}

export default HomePageCheckMove