import {createSlice} from "@reduxjs/toolkit";
import {postsMock} from "../../../shared/lib/server";
import type {typePosts} from "../../../shared/lib/server";

const postSlice = createSlice({
    name: 'posts',
    initialState: postsMock,
    reducers:{

    }
})

export const selectAllPost = (state:{posts:Array<typePosts>})=>state.posts;

export default postSlice.reducer