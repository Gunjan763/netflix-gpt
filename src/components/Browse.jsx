import React, { use, useEffect} from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import useTrendingMovie from '../Hooks/useTrendingMovie';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
const Browse = () => {
  usePopularMovies();
  useNowPlayingMovies();
  useTrendingMovie();
  useUpcomingMovies();
  return (
    <div>
   <Header/>
   <MainContainer/>
   <SecondaryContainer/>
    </div>
  )
}

export default Browse
