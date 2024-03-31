import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {usersMock} from "../../../shared/lib/server";
import type {typeUsers} from "../../../shared/lib/server";

const userSlice = createSlice({
    name: 'users',
    initialState: usersMock,
    reducers:{}
})

export const selectAllUsers = (state:{users:typeUsers[]})=>state.users;

export default userSlice.reducer