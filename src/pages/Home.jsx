
import { fetchTrendingMovies } from "api/api";
import { MainContainer} from "components/BodyStyle";
import Loader from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";

const Home = () =>{

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{ RenderTrendingMovies() },[])
    const RenderTrendingMovies = async()=>{
        try {
            const {results} = await fetchTrendingMovies();
            if (results.length === 0) {
             setIsEmpty(true);
            }
            setMovies(results)
          } catch (error) {
            setError(error.message)
          } finally {
            setLoading(false);
          }
    }
    
return (
    
    <MainContainer>
      
        {loading && <Loader/>}
        {error && (<p >❌ Something went wrong - {error}</p>)}
        {isEmpty && (<p >Sorry. Something went wrong... 😭</p>)}
      
        
        <h1>Trending today</h1>
        <MoviesList movies={movies}/>
        

    </MainContainer>
)
}

export default Home;
