import {configureStore} from "@reduxjs/toolkit";
import {postsReducer, usersReducer} from "../slice"

export const store = configureStore({
    reducer:{
        posts: postsReducer,
        users: usersReducer
    }
})