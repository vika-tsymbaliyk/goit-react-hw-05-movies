import { fetchMovieReviews } from "api/api";
import { CastList } from "components/Cast/Cast.styled";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Reviews = ()=>{
    const { movieId } = useParams();
    const [reviews, setReviews]= useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => { if (!movieId) {
        return } 
         getReviewsList(movieId)}, 
         [movieId]);

    const getReviewsList = async (movieId) => {
          try {
          const { results } = await fetchMovieReviews(movieId);
          if (results.length === 0) {
            setIsEmpty(true);
          }
          setReviews(results);
  
        } catch (error) {
          console.log(error.message)
        } finally {
          setLoading(false);
        }
      };
    return(
        <div>
            {loading && <Loader/>}
            {isEmpty && (<p >We don`t have any reviews for this movie. </p>)}
            {!isEmpty &&  ( 
            <CastList>
                {reviews.map(review => <li key={review.id}> <span>{review.author}</span>
                <p>{review.content}</p> </li>)}
            </CastList> )}
        </div>
    )
}

export default Reviews;