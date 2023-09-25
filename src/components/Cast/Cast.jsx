import { fetchMovieActors } from "api/api";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { CastList } from "./Cast.styled";

const Cast =() => {
    const { movieId } = useParams();
    const [actors, setActors]= useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => { if (!movieId) {
        return } 
         getActorsList(movieId)}, 
         [movieId]);

    const getActorsList = async (movieId) => {
          try {
          const { cast } = await fetchMovieActors(movieId);
            setActors(cast);
           
        } catch (error) {
            setError(error.message)
            console.log(error);
        } finally {
            setLoading(false);
        }
      };
    if (!actors) {
        return <Loader/>;
      }
    const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
return(
    <div>
        {loading && <Loader/>}
        {error && (<p >❌ Something went wrong - {error}</p>)}
        <CastList>
            {actors.map(actor => <li key={actor.id}> 
                <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`: defaultImg}
                    width={100}
                    alt="poster" />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
             </li>)}
        </CastList>
    </div>
)
}

export default Cast;