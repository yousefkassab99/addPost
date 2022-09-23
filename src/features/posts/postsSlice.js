import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'1', title: 'learning Redux Toolkit' , content: 'I have header good thing,,,,'},
    {id:'2', title: 'Slices....' , content: 'the more I say slices , the more I ,,,,,'}
]


const postsSlice = createSlice({
    name: 'Posts',
    initialState,
    reducers:{
        postAdded(state,action) {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer;