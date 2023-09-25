import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`
const API_KEY = '4969eba800ff3540fe0a2726537242dc';

export async function fetchTrendingMovies(){
    const {data} = await axios.get(
        `trending/movie/day?api_key=${API_KEY}`
      );
      
      return data;
    };

export async function fetchMovieById(movieId){
  const {data} = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,images`
  );
 
  return data;
}

export async function fetchMovieActors(movieId){
  const {data} = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&append_to_response=videos,images`
  );
  
  return data;
}

export async function fetchMovieReviews(movieId){
  const {data} = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&append_to_response=videos,images`
  );
  
  return data;
}

export async function fetchMovieBySearch(query){
  const {data} = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US'`
  );
  
  return data;
}

