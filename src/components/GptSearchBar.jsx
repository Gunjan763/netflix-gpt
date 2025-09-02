import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
const GptSearchBar = () => {
  const langKey=useSelector(state=>state.config.lang);
  return (
    <div className='pt-30 flex justify-center opacity-80'>
      <form className=' bg-black w-1/2 rounded-md grid grid-cols-12 '> 
        <input type="text" placeholder={lang[langKey].gptSearchPlaceholder} className='m-4 border rounded-md h-10  p-4 text-white col-span-9' />
        <button type="submit" className='bg-red-800 text-white px-4 py-2 rounded-md col-span-3 m-4'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}
export default GptSearchBar
