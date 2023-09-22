import { fetchMovieReviews } from "api/api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Reviews = ()=>{
    const { movieId } = useParams();
    const [reviews, setReviews]= useState([]);
    const [isEmpty, setIsEmpty] = useState(false)

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
            console.log(results)
        } catch (error) {
          console.log(error.message)
        } finally {
          
        }
      };
    return(
        <div>
            {isEmpty && (<p >We don`t have any reviews for this movie. </p>)}
            {!isEmpty &&  ( 
            <ul>
                {reviews.map(review => <li key={review.id}> <span>{review.author}</span>
                <p>{review.content}</p> </li>)}
            </ul> )}
        </div>
    )
}

export default Reviews;