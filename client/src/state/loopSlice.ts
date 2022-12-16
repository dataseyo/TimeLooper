import { createSlice } from '@reduxjs/toolkit'

type EventChoices = {

}

type Event = {
    name: string,
    id: number,
    details: string,
    choices: EventChoices[]
}

type LoopType = {
    days: number,
    currentDay: number,
    turns: number,
    currentTurn: number
}

const initialState: LoopType = {
    days: 30,
    currentDay: 1,
    turns: 8,
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