import React from 'react'

const MovieCard = props => (
        <div className="card">
            <div className="card-image">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="img"></img>
            </div>
            <div className="card-header">
                <h1 className="card-header-title">{props.movie.title}</h1>
            </div>

        </div>
)
export default MovieCard;