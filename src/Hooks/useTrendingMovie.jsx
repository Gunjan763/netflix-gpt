import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGetTrendingMovies } from "../utils/movieSlice";
const useTrendingMovie=()=>
{ 
    const dispatch=useDispatch();
  const getTrendingMovies=async()=>
  {
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
    const json=await data.json();
    console.log(json.results);
    dispatch(addGetTrendingMovies(json.results));
  }
  useEffect(()=>
  {
    getTrendingMovies();
  },[]);
}
export default useTrendingMovie;