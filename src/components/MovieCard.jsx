import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 flex-shrink-0"> 
      <img
        src={IMG_CDN_URL + posterPath}
        alt="movie poster"
        className="w-full h-60 object-cover rounded-lg shadow-md"
      />
    </div>
  )
}

export default MovieCard
