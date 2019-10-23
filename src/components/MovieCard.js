import React from "react";

const MovieCard = props => (
  <div className="card">
    <div className="card-image">
      <img style={{ width: "100%" }} src={props.movie.image} alt="img"></img>
    </div>
    <div className="card-header">
      <h1 className="card-header-title">{props.movie.title}</h1>
    </div>
  </div>
);
export default MovieCard;
