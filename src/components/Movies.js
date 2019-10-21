import React from 'react'
import MovieCard from './MovieCard'

const handlerSearchTerm = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase())

class Movies extends React.Component{
    constructor(){
        super()
        this.state ={
            movies:[
                {
                    id:1,
                    title: 'Tes Title 1',
                    image : 'https://bulma.io/images/placeholders/1280x960.pn'
                },
                {
                    id:2,
                    title: 'Tes Title 2',
                    image : 'https://bulma.io/images/placeholders/1280x960.pn'
                },
            ]
        }
    }

    render(){
        return (
            <div className="columns">
                {
                    this.state.movies
                    .filter(handlerSearchTerm(this.props.search))
                    .map(movie=>{
                        return (
                            <div className="column is-half">
                                <MovieCard key={movie.id} movie={movie}></MovieCard>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Movies;