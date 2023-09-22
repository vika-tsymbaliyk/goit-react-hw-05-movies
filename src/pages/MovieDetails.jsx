import { fetchMovieById } from "api/api";
import { MovieCard } from "components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const MovieDetails = ()=>{
    const [movie , setMovie] = useState(null)
    const {movieId} = useParams();
    useEffect(()=>{getMovie(movieId)},[movieId])

    const getMovie = async(movieId)=>{
        try {
            const movie = await fetchMovieById(movieId);
            // console.log(movie);
            setMovie(movie)
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

    </div>
)
}