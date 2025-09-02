import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <div>
       <div className='absolute z-0 w-screen h-screen '>
      <img src="https://fabiandeneuville.github.io/netflix-clone/assets/images/netflix-background.jpeg" alt="logo"></img>
     </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
