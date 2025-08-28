import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import useMovieVideos from '../Hooks/useMovieVideos';
const VideoBackground = ({ movieId }) => {
  const trailer = useSelector(store => store.movies.trailerVideo);
  useMovieVideos({ movieId });

  if (!trailer) return null; // don’t render until we have trailer

  return (
    <div>
      <iframe
        className="w-screen aspect-video overflow-x-hidden"
        src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"

      ></iframe>
    </div>
  );
};
export default VideoBackground
