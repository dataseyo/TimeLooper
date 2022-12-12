import { configureStore } from "@reduxjs/toolkit";

import loopReducer from "./loopSlice";
import charReducer from "./charSlice";

const store = configureStore({
    reducer: {
        char: charReducer,
        loop: loopReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
