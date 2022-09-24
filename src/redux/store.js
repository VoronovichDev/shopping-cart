import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { shopReducerSlice } from "./Shopping/shopping-slice";
// const store = createStore(rootReducer, composeWithDevTools())


const store = configureStore({
   reducer: rootReducer,
   composeWithDevTools
})

export default store