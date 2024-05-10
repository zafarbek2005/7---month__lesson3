import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        value:[]
    },
    reducers :{
        addUsers(state,action) {
            state.value = [...state.value,action.payload]
        },
        removeUser(state,action) {
            state.value = state.value.filter(user => user.id !== action.payload.id)
        }
    }
})

export const {addUsers,removeUser} = userSlice.actions
export default userSlice.reducer