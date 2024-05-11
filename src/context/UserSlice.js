import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        value: JSON.parse(localStorage.getItem("users")) || []
    },
    reducers: {
        addUsers(state, action) {
            state.value = [...state.value, action.payload];
            localStorage.setItem("users", JSON.stringify(state.value));
        },
        removeUser(state, action) {
            state.value = state.value.filter(user => user.id !== action.payload.id);
            localStorage.setItem("users", JSON.stringify(state.value));
        }
    }
});

export const { addUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;
