import { createSlice } from '@reduxjs/toolkit'

type LoopType = {
    days: number,
    currentDay: number,
    turns: number
}

const initialState = {
    days: 30,
    currentDay: 1,
    turns: 4
}

const charSlice = createSlice({
    name: "char",
    initialState,
    reducers: {
        mutate: (state, action) => {

        }
    }
})

// export actions
export const {
    mutate
} = charSlice.actions

// export reducer
export default charSlice.reducer