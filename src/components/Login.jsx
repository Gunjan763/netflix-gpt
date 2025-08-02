import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {
  const[isSignInForm,setSignInForm]=useState(true);
 const toggleSignInForm=()=>
  {
    setSignInForm(!isSignInForm);
  }
  return (
    <div >
     <Header/>
     <div className='absolute'>
      <img src="https://fabiandeneuville.github.io/netflix-clone/assets/images/netflix-background.jpeg" alt="logo"></img>
     </div>

     <form className='bg-black/80 absolute p-10 text-white w-3/12 my-32 mx-auto right-0 left-0 text-center '>
     <h2 className='font-bold text-3xl'>{ isSignInForm? "Sign In" : "Sign Up"}</h2>
      {!isSignInForm &&(<input type="text" placeholder='Email Id' className='p-4 my-4  border-1  w-full  rounded-md bg-black/50'></input>)}
      <input type="text" placeholder='Full Name' className='p-4 my-4  border-1  w-full  rounded-md bg-black/50'></input>
      <input type="password" placeholder='Password' className='p-4 my-4 border-1 w-full  bg-black/50 rounded-md'></input>
      <button type='submit' className='bg-red-800 h-12 text-xl font-bold w-full my-5 rounded-md'>{ isSignInForm? "Sign In" : "Sign Up"}</button>
     <span className='cursor-pointer'onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? " : "Already have an account? "}<span className='font-bold '>{isSignInForm?"Sign up Now" :"Sign in"}.</span></span>
     </form>
    </div>
  )
}

export default Login
