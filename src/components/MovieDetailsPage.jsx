import axios from "axios";
import { useEffect, useState, useRef } from "react";
import css from './Details.module.css';
import { NavLink, Outlet, useLocation, useNavigate, useParams} from 'react-router-dom';

const Details = () => {
    const { Movieid } = useParams(); 
    const [product, setProduct] = useState(null);
    const forImg = "https://image.tmdb.org/t/p/w500";
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const backLocation = useRef(location.state?.from ?? '/movies')
    const navigate = useNavigate();


    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const url = `https://api.themoviedb.org/3/movie/${Movieid}?language=en-US`;
            const options = {
                params: {
                    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTdlYWEwM2E1MTkzNjk3ODQ4NGQzNGE3ZjFkMDdlYyIsIm5iZiI6MTczMDkzMDI2Ny44MTIwNDQ2LCJzdWIiOiI2NzJhMTcyZjA2ZGM4ODU5NjMyNDBjZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iYetET6XeiyOWU32L5POgtUJsmqPOUFH8rDkB5N2IAk',
                    api_key: 'ea7eaa03a51936978484d34a7f1d07ec',
                }
            };

            try {
                const { data } = await axios.get(url, options);
                setProduct(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [Movieid]); 

    if (!product) {
        return null;
    }

    return (
        <div>
            {loading ? <p>Loading data, please wait...</p> : null}
            <div className={css.detailsWrap}>
                <button
                    className={css.back}
                    onClick={() => navigate(backLocation.current)}
                >
                    Back
                </button>
                <img src={`${forImg}${product.backdrop_path}`} alt={product.title} className={css.movePoster} />
                <div>
                    <p className={css.name}>{product.original_title}</p>
                    <p className={css.score}>Score: {product.vote_average}</p>
                    <span className={css.overview}>Overview</span>
                    <p className={css.score}>{product.overview}</p>
                    <span className={css.overview}>Genres</span>
                    <p className={css.score}>{product.genres.map((item) => item.name).join(', ')}</p>
                </div>
            </div>
            <div className={css.additionInf}>
                <span className={`${css.overview} ${css.extra}`}>Addition Information</span>
                <NavLink className={css.link} to={`/Movies/${Movieid}/cast`}>Cast</NavLink>
                <NavLink className={css.link} to={`/Movies/${Movieid}/reviews`}>Reviews</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export default Details;
