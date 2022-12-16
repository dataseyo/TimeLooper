import { createSlice } from '@reduxjs/toolkit'

type Task = {
    id: number,
    name: string,
    xp: number,
    asset: string,
    // unlock: number [task should unlock and be shown at a certain level, only display if user is that level]
}

type Skills = {
    id: number,
    name: string,
    asset: string,
    level: number,
    tasks: Task[]
}

type Inventory = {

}

type Equipment = {

}

type Char = {
    name: string,
    inventory: Inventory,
    equipment: Equipment,
    skills: Skills[]
}

const initialState: Char = {
    name: "",
    inventory: {},
    equipment: {},
    skills: [{
        id: 1,
        name: "Strength",
        asset: "-128px -32px",
        level: 1,
        tasks: [
            {
                id: 1,
                name: "task 1",
                xp: 10,
                asset: ""
            },

            {
                id: 2,
                name: "task 2",
                xp: 20,
                asset: ""
            }
        ]
    },

    {
        id: 2,
        name: "Arcane",
        level: 1,
        asset: "-128px -576px",
        tasks: [
            {
                id: 1,
                name: "task 1",
                xp: 10,
                asset: ""
            },

            {
                id: 2,
                name: "task 2",
                xp: 20,
                asset: ""
            }
        ]
    },

    {
        id: 3,
        name: "Mind",
        level: 1,
        asset: "-448px -96px",
        tasks: [
            {
                id: 1,
                name: "task 1",
                xp: 10,
                asset: ""
            },

            {
                id: 2,
                name: "task 2",
                xp: 20,
                asset: ""
            }
        ]
    },

    {
        id: 4,
        name: "Tinkering",
        level: 9,
        asset: "-128px -128px",
        tasks: [
            {
                id: 1,
                name: "task 1",
                xp: 10,
                asset: ""
            },

            {
                id: 2,
                name: "task 2",
                xp: 20,
                asset: ""
            }
        ]
    },

    {
        id: 5,
        name: "Exploring",
        level: 22,
        asset: "-382px -416px",
        tasks: [
            {
                id: 1,
                name: "task 1",
                xp: 10,
                asset: ""
            },

            {
                id: 2,
                name: "task 2",
                xp: 20,
                asset: ""
            }
        ]
    }]
}

const loopSlice = createSlice({
    name: "loop",
    initialState,
    reducers: {
        
    }
})

// export actions
export const {
    
} = loopSlice.actions

// export reducer
export default loopSlice.reducer