import React from 'react'
import MoviesCard from '../Card/MoviesCard'
import './MoviesList.css'
const MoviesList = ({AllMovies}) => { 
  return (
    <div className='list' >
         {AllMovies.map((movie)=><MoviesCard movie={movie}></MoviesCard>)}

    </div>
  )
}

export default MoviesList