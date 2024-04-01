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
                        date: new Date().toString(),
                        reactions:{
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action:PayloadAction<{postId: string, reaction: keyof typePosts['reactions']}>) {
            const {postId,reaction} = action.payload;
            const existingPost = state.find(post=>post.id===postId);
            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPost = (state:{posts:typePosts[]})=>state.posts;

export const {postAdded, reactionAdded} = postSlice.actions;

export default postSlice.reducer