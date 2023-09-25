import { fetchMovieById } from "api/api";
import { MovieCard } from "components/MovieCard/MovieCard";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom"
import { Suspense } from "react";
import Loader from "components/Loader/Loader";
import { LinkStyled, LinkStyledBtn, MainContainer } from "components/BodyStyle";
import { List } from "components/MovieCard/MovieCard.styled";

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
    <MainContainer>
      <LinkStyledBtn to={backLink.current}> Go back</LinkStyledBtn>
      {loading && <Loader/>}
      {error && (<p >❌ Something went wrong - {error}</p>)}
        <MovieCard movie={movie}/>
        <div>
          <p>Additional information</p>
          <List>
            <li><LinkStyled to={`cast`}>Cast</LinkStyled></li>
            <li><LinkStyled to={`reviews`}> Reviews</LinkStyled></li>
          </List>
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </div>

    </MainContainer>
)
}

export default MovieDetails;