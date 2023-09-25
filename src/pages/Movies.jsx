import { fetchMovieBySearch } from "api/api";
import Loader from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import SearchForm from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Movies = ()=>{
   const [searchParams, setSearchParams] = useSearchParams();
   const [movies, setMovies]= useState([]);
   const [isEmpty, setIsEmpty] = useState(false);
   const [loading, setLoading] = useState(false);

   const query = searchParams.get('query') ?? '';

   useEffect(() => {
   if (!query) return;
   SerchMovies(query)
   }, [query]);

   const SerchMovies = async(searchParams) =>{
      try {
         setIsEmpty(false)
         const  {results} = await fetchMovieBySearch(searchParams);
         setMovies(results);
         if (results.length === 0){
            setIsEmpty(true)
         }
       } catch (error) {
         console.log(error.message)
       } finally {
         setLoading(false);
       }
   }

   const handleSubmit = event => {
      event.preventDefault();
      const serchWord = event.target.elements.query.value.trim();
      setSearchParams({ query: serchWord });
      };

 return(
    <div>
      <SearchForm onSubmit={handleSubmit}/>
      {loading && <Loader/>}
      {isEmpty && (<p >We don`t find any movies for your request. </p>)}
      {!isEmpty && <MoviesList movies={movies}/>}

    </div>
 )
}

export default Movies;