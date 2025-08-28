import React from 'react'
import netflixlogo from "../assets/netflixlogo.png" 
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user=useSelector(store => store.user);
  console.log("User photoURL:", user?.photoURL);

  const handleSignOut = () => {
    signOut(auth).then(() => {
}).catch((error) => {
  navigate("/error");
});
  };
   useEffect(()=>
    {
const unSubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    const{uid,email,displayName,photoURL}= user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    navigate("/browse");
  } else {
  dispatch(removeUser());
  navigate("/");
  }
});
return()=>unSubscribe();
    },[])
  return (
    <div className='absolute w-full px-12 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between'>
      <img className="w-44 "src={netflixlogo} alt="logo"/>
    {user &&(<div className='flex gap-4'>
      <img src={user?.photoURL} className='h-12 w-12'></img>
      
      <button onClick={handleSignOut} className='text-white font-bold'>Sign Out</button>
    </div>)
}
    </div>
  )
}

export default Header
