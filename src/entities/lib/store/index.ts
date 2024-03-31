import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "../slice/post"
import usersReducer from "../slice/user"

export const store = configureStore({
    reducer:{
        posts: postsReducer,
        users: usersReducer
    }
})