import axios from 'axios';


const API_KEY = '4969eba800ff3540fe0a2726537242dc';

export async function fetchTrendingMovies(){
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      // console.log(data)
      return data;
    };

export async function fetchMovieById(movieId){
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,images`
  );
  // console.log(data)
  return data;
}

export async function fetchMovieActors(movieId){
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&append_to_response=videos,images`
  );
  // console.log(data)
  return data;
}
export async function fetchMovieReviews(movieId){
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&append_to_response=videos,images`
  );
  // console.log(data)
  return data;
}

