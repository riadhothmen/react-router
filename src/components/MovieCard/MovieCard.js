import React from 'react';
import StarRating from '../StarRating/StarRating';
import "./MovieCard.css";
import {Link} from 'react-router-dom';



const MovieCard = ({film}) => {
    return(
     
         <Link to= {`trailer/${film.name}`}  style={{textDecoration:"none"}}   >
   <div className="movie-card">
       <img src={film.image} alt={film.name} />
         <h3>{film.name}</h3>
          <p>{film.date} </p>
          <StarRating rate={film.rating} />
         </div>
         </Link>
    )
}

export default MovieCard;