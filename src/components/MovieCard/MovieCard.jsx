export const MovieCard = ({movie})=>{
    const {title, overview, genres, vote_average, poster_path, release_date} = movie;
    const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const userScore = Math.ceil(vote_average*10);
    const year = release_date.slice(0,4)
    
    return(
        <div>
             <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: defaultImg}
                    width={250}
                    alt="poster" />
            <div>
                <h2>{title} ({year})</h2>
                <p>User Score: {userScore} %</p>
                <h3>Overview:</h3>
                <p> {overview}</p>
                <h3>Genres:</h3>
                <p> {genres.map(genre=> <span key={genre.id}>{genre.name}, </span>)}</p>

            </div>
        </div>
    )
}