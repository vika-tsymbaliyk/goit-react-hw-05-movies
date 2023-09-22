import { fetchMovieById } from "api/api";

import { MovieCard } from "components/MovieCard/MovieCard";

import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"

const MovieDetails = ()=>{
    const [movie , setMovie] = useState(null);
    const {movieId} = useParams();
    useEffect(()=>{getMovieDetails(movieId)},[movieId])

    const getMovieDetails = async(movieId)=>{
        try {
            const movie = await fetchMovieById(movieId);
            setMovie(movie);
          } catch (error) {
            console.log(error.message)
          } finally {
          }
    }
    if (!movie) {
        return <p>Loading...</p>;
      }
    
return (
    <div>
        <button>go back</button>

        <MovieCard movie={movie}/>
        <div>
          <p>Additional information</p>
          <ul>
            <li><Link to={`cast`}>Cast</Link></li>
            <li><Link to={`reviews`}>Reviews</Link></li>
          </ul>
          <Outlet/>
        </div>

    </div>
)
}

export default MovieDetails;