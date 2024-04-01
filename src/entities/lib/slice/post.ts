import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {postsMock} from "../../../shared/lib/server";
import type {typePosts} from "../../../shared/lib/server";

const postSlice = createSlice({
    name: 'posts',
    initialState: postsMock,
    reducers:{
        postAdded: {
            reducer(state, action:PayloadAction<typePosts>) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toString()
                    }
                }
            }
        }
    }
})

export const selectAllPost = (state:{posts:typePosts[]})=>state.posts;

export const {postAdded} = postSlice.actions;

export default postSlice.reducer