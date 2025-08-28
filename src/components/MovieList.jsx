import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log("Movies",movies);
  return (
    <div className='p-4 '>
      
          <h2 className='text-xl font-bold px-5 text-white'>{title}</h2>
            <div >
          <div className='flex overflow-x-scroll  gap-4  p-4 scrollbar-hide'>
{movies
  ?.filter(movie => movie.poster_path)
  .map(movie => (
    <MovieCard key={movie.id} posterPath={movie.poster_path} />
))}
          </div>
         
        </div>
    </div>
  )
}

export default MovieList
