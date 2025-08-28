import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-36 px-20 absolute text-white bg-gradient-to-b from-black w-screen aspect-video my-15'>
      <h1 className='text-5xl font-bold '>{title}</h1>
      <p className='text-lg py-6 w-2/6'>{overview}</p>
      <div>
        <button className=' bg-white font-semibold text-xl text-black px-9 rounded-sm py-2 hover:opacity-60 '>⯈Play</button>
        <button className='mx-2 px-10 bg-gray-500 text-white font-semibold text-xl rounded-sm py-2.5 opacity-50 hover:opacity-60'>🛈 More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
