import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react'
import { validateData } from '../utils/validate.js';
import {auth} from '../utils/firebase.js';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';
import { USER_AVATAR } from '../utils/constants.js';

const Login = () => {
 
  const dispatch=useDispatch();
  const[isSignInForm,setSignInForm]=useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const handleButtonClick=()=>
  {
    //validation
 
    const message=validateData(email.current.value,password.current.value,name.current ? name.current.value : null);
    setErrorMessage(message);
    if(message)
      return;//if thers is some msg like "Email and Password is required" then return
//if no erorr we ll craeate the user
if(!isSignInForm)
{
  //sign up logic
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, photoURL: USER_AVATAR
}).then(() => {
   const{uid,email,displayName,photoURL}= auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));


}).catch((error) => {
 setErrorMessage("Error updating profile: " + error.message);
});
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error creating user:", errorCode, errorMessage);
    setErrorMessage(errorCode+errorMessage); 
  });
}
else
{
  //sign in logic
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user)
      console.log("User signed in successfully:", user);
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in:", errorCode, errorMessage);
    setErrorMessage("Your email or password is incorrect. Please try again.");
  });

}
  
  }
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

     <form onSubmit={(e)=>e.preventDefault()} className='bg-black/80 absolute p-10 text-white w-3/12 my-32 mx-auto right-0 left-0 text-center '>
    
     <h2 className='font-bold text-3xl'>{ isSignInForm? "Sign In" : "Sign Up"}</h2>
      {!isSignInForm &&(<input type="text" ref={name}placeholder='Full Name' className='p-4 my-4  border-1  w-full  rounded-md bg-black/50'></input>)}
      <input type="text" ref={email} placeholder='Email Id' className='p-4 my-4  border-1  w-full  rounded-md bg-black/50'></input>
      <input type="password" ref={password} placeholder='Password' className='p-4 my-4 border-1 w-full  bg-black/50 rounded-md'></input>
      <button type='submit' className='bg-red-800 h-12 text-xl font-bold w-full my-5 rounded-md' onClick={handleButtonClick}>{ isSignInForm? "Sign In" : "Sign Up"}</button>
       <p className='text-red-800 font-bold m-3'>{errorMessage}</p>
     <span className='cursor-pointer'onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? " : "Already have an account? "}<span className='font-bold '>{isSignInForm?"Sign up Now" :"Sign in"}.</span></span>
     </form>
    </div>
  )
}

export default Login
