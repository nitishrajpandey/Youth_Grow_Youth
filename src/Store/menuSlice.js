import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: { value: false },
    reducers: {
        ToggleMenu: (state) => {
            state.value = !state.value
        }
    }
})
export const { ToggleMenu } = menuSlice.actions

export default menuSlice.reducer