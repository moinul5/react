import {configureStore} from '@reduxjs/toolkit' // step 1
import todoReducer  from '../Todo/todoSlice' // Import the todoReducer from the todoSlice file
// The todoSlice file contains the logic for managing todos, including adding, removing, and updating them

export const store = configureStore({
    reducer: todoReducer  // we have one reducer that's we write like this
    // If you have multiple reducers, you can pass an object with multiple keys, each key being a slice of state
    // For example: reducer: { todo: todoReducers, anotherSlice: anotherReducer }
    // The reducer is the main function that Redux uses to manage state, here we use the todoReducers
    // The configureStore function is a utility from Redux Toolkit that simplifies store setup

})  // it took a object, in most of the cases   