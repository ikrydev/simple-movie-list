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
                    title: 'Joker',
                    image : 'https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
                },
                {
                    id:2,
                    title: 'Maleficent: Mistress of Evil',
                    image : 'https://image.tmdb.org/t/p/w342/vloNTScJ3w7jwNwtNGoG8DbTThv.jpg'
                },
                {
                    id:3,
                    title: 'The Lion King',
                    image : 'https://image.tmdb.org/t/p/w342/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg'
                },
                {
                    id:4,
                    title: 'El Camino: A Breaking Bad Movie',
                    image : 'https://image.tmdb.org/t/p/w342/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg'
                },
                {
                    id:5,
                    title: 'Spider-Man: Far from Home',
                    image : 'https://image.tmdb.org/t/p/w342/lcq8dVxeeOqHvvgcte707K0KVx5.jpg'
                }
            ]
        }
    }

    render(){
        return (
            <div className="columns is-multiline">
                {
                    this.state.movies
                    .filter(handlerSearchTerm(this.props.search))
                    .map(movie=>{
                        return (
                            <div className="column is-one-third">
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