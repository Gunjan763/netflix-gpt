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
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user=useSelector(store => store.user);
  const showgptSearch=useSelector(store=>store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => {
}).catch((error) => {
  navigate("/error");
});
  };
  const handleSearch=()=>
{
  dispatch(toggleGptSearchView());
}
const handleLanguageChange=(e)=>
{
  dispatch(changeLanguage(e.target.value));
}
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
   <div className="absolute w-screen px-12 py-2 z-10 flex items-center justify-between h-20 
  bg-gradient-to-r from-black via-gray-900 opacity to-black shadow-lg">

      <img className="w-44 "src={netflixlogo} alt="logo"/>
    {user &&(<div className='flex gap-4'>
    { showgptSearch && <select className='bg-black text-white h-10 mt-1' onChange={handleLanguageChange} >{SUPPORTED_LANGUAGES.map(lang=>
        {
         return <option value={lang.identifier}>{lang.name}</option>
        })}
      </select>}
        <button onClick={handleSearch}className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
     {showgptSearch?"HomePage":"🔎 GPT Search"}
    </button>
      <img src={user?.photoURL} className='h-12 w-12'></img>
      <button onClick={handleSignOut} className='text-white font-bold'>Sign Out</button>
    </div>)
}
    </div>
  )
}
export default Header
