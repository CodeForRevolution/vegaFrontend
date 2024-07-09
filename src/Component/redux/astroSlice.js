import { createSlice } from "@reduxjs/toolkit";

var initialState={
    Blogs:[],
}

export const AstroSlice=createSlice({
    name:"Astrology",
    initialState,
    reducers:{
         addBulkBlogs:(state,action)=>{
            state.Blogs=[...action.payload]
         },
         addBlogs:(state,action)=>{
             state.Blogs.push(action.payload);     
         },
         removeBlogs:(state,action)=>{
         state.Blogs=state.Blogs.filter((question)=>question._id!==action.payload);
         },
         updateBlogs:(state,action)=>{
         state.Blogs = state.Blogs.map((question) =>
             question._id === action.payload._id ? action.payload : question
           );
         }, 
    }
})

export const {addBulkBlogs,addBlogs,removeBlogs,updateBlogs}=AstroSlice.actions
export default AstroSlice.reducer;