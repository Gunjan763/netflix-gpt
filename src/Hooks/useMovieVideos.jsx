import React from 'react'
import{useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
const useMovieVideos = ({movieId}) => {
   const dispatch=useDispatch();
   const getMovieVideos=async()=>
    {
     const response= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
     const json=await response.json();
     const trailer=json.results[0];//in case of multiple trailers
    dispatch(addTrailerVideo(trailer.key));
    }
    useEffect(()=>
    {
      getMovieVideos();
    },[movieId])
  return (
    <div>
      
    </div>
  )
}

export default useMovieVideos
