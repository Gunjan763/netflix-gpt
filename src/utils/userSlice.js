import { createSlice } from "@reduxjs/toolkit";

const userSLice=createSlice(
    {
        name:"user",
        initialState:null,
        reducers:
        {
            addUser:(state,action)=>
            {
return action.payload;
            },
             removeUser:(state,action)=>
            {
                return null;
            }
        }
    }
)
export default userSLice.reducer;
export const {addUser,removeUser}=userSLice.actions;