import { fetchMovieBySearch } from "api/api";
import { MoviesList } from "components/MoviesList/MoviesList";
import SearchForm from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Movies = ()=>{
   const [searchParams, setSearchParams] = useSearchParams();
   const [movies, setMovies]= useState([]);
   const [isEmpty, setIsEmpty] = useState(false)

   const query = searchParams.get('query') ?? '';

   useEffect(() => {
   if (!query) return;
   SerchMovies(query)
   }, [query]);

   const SerchMovies = async(searchParams) =>{
      try {
         const  {results} = await fetchMovieBySearch(searchParams);
         setMovies(results);
         if (results.length<0){
            setIsEmpty(true)
         }
         console.log(results);
       } catch (error) {
         console.log(error.message)
       } finally {
         
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
      {isEmpty && (<p >We don`t find any movies for your request. </p>)}
      {!isEmpty && <MoviesList movies={movies}/>}

    </div>
 )
}

export default Movies;