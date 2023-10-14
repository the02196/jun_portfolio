//1. configureStore,createSlice import 해주기

import {configureStore, createSlice} from "@reduxjs/toolkit" ;

let dark = createSlice({
    name: "dark",
    initialState :"light",
    reducers:{
        toggleTheme : (state) => state === "light" ? "dark" :"light"
    }
})

export default configureStore({
    reducer:{
        dark : dark.reducer
        
    }
})