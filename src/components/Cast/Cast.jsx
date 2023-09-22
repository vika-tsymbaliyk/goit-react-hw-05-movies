import { fetchMovieActors } from "api/api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Cast =() => {
    const { movieId } = useParams();
    const [actors, setActors]= useState([]);

    useEffect(() => { if (!movieId) {
        return } 
         getActorsList(movieId)}, 
         [movieId]);

    const getActorsList = async (movieId) => {
          try {
          const { cast } = await fetchMovieActors(movieId);
            setActors(cast);
            console.log(cast)
        } catch (error) {
          console.log(error.message)
        } finally {
          
        }
      };
    const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
return(
    <div>
        <ul>
            {actors.map(actor => <li key={actor.id}> 
                <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`: defaultImg}
                    width={100}
                    alt="poster" />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
             </li>)}
        </ul>
    </div>
)
}

export default Cast;