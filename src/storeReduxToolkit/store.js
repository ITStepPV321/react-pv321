import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../storeReduxToolkit/counterSlice";

export const store=configureStore({
    reducer:{
        counter: counterReducer,
        // user: userReducer
        // posts: postsReducer
    },
});