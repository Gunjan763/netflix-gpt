import React, { use } from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
      const movies=useSelector(store=>store.movies);
  return (
    <div className='bg-black '>
      <div className='-mt-72 relative z-30'> 
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
         <MovieList title={"Top Rated Movies"} movies={movies.getTrendingMovies}/>
             <MovieList title={"Upcoming Movies"} movies={movies.getUpcomingMovies}/>
                 <MovieList title={"Popular"} movies={movies.getPopularMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer
