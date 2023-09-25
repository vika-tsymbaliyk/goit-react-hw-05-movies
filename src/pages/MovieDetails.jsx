import { fetchMovieById } from "api/api";
import { MovieCard } from "components/MovieCard/MovieCard";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { Suspense } from "react";
import Loader from "components/Loader/Loader";

const MovieDetails = ()=>{
    const [movie , setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {movieId} = useParams();
    const location = useLocation();
    const backLink = useRef(location?.state?.from ?? '/');

    useEffect(()=>{getMovieDetails(movieId)},[movieId])
    
    const getMovieDetails = async(movieId)=>{
        try {
            setLoading(true);
            const movie = await fetchMovieById(movieId);
            setMovie(movie);
          } catch (error) {
            setError(error.message)
          } finally {
            setLoading(false);
          }
    }
    if (!movie) {
        return <Loader/>;
      }

return (
    <div>
      <Link to={backLink.current}> go back</Link>
      {loading && <Loader/>}
      {error && (<p >❌ Something went wrong - {error}</p>)}
        <MovieCard movie={movie}/>
        <div>
          <p>Additional information</p>
          <ul>
            <li><Link to={`cast`}>Cast</Link></li>
            <li><Link to={`reviews`}>Reviews</Link></li>
          </ul>
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </div>

    </div>
)
}

export default MovieDetails;