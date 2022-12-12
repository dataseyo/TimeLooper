import { createSlice } from '@reduxjs/toolkit'

type Event = {

}

type LoopType = {
    days: number,
    currentDay: number,
    turns: number
}

const initialState = {
    days: 30,
    currentDay: 27,
    turns: 4,
    currentTurn: 1
}

const loopSlice = createSlice({
    name: "char",
    initialState,
    reducers: {
        iterateLoop: (state, action) => {

        },

        iterateTurn: (state, action) => {

        }
    }
})

// export actions
export const {
    iterateLoop,
    iterateTurn
} = loopSlice.actions

// export reducer
export default loopSlice.reducer