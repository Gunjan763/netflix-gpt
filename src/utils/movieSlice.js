import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        getPopularMovies:null,
        getTrendingMovies:null,
        getUpcomingMovies:null
    },
    reducers:{
addNowPlayingMovies:(state,action)=>
{
    state.nowPlayingMovies=action.payload;
},
addGetPopularMovies:(state,action)=>
{
    state.getPopularMovies=action.payload;
},
addTrailerVideo:(state,action)=>
{
    state.trailerVideo=action.payload;
},
addGetTrendingMovies:(state,action)=>
{
    state.getTrendingMovies=action.payload;
},
addGetUpcomingMovies:(state,action)=>
{
    state.getUpcomingMovies=action.payload;
}
    }
})

export default movieSlice.reducer;
export const {addNowPlayingMovies,addTrailerVideo,addGetPopularMovies,addGetTrendingMovies,addGetUpcomingMovies}=movieSlice.actions;