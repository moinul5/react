//step 2
// reducer is as slices where features are defined
import { createSlice, nanoid } from "@reduxjs/toolkit"; // Import createSlice and nanoid from Redux Toolkit,
// nanoid is used to generate unique IDs
// createSlice is a function that takes an object with the initial state and reducers, and returns a slice reducer function

const initialState = {
  // Define the initial state of the todo slice , here you can add more properties if needed
  todos: [
    {
      id: 1, // Example todo item with a unique ID
      text: "Learn Redux Toolkit", // Title of the todo item
    },
  ], // Initialize an empty array for todos
};

export const todoSlice = createSlice({
  name: "todo", // when you use the redux-toolkit in the chorom, it shows this name and the key name is the property
  initialState, // every slice has initialState, which is write in the top, you can also write here.
  reducers: {
    // then we write the reducers, here come properties and function
    // here is the change from the context api from redux.
    // in the context api we just write the function declare but didn't the defination
    // but in the redux we write the defination also
    // in the reducers we have properties and functions
    addTodo: (state, action) => {
      // in this we always have the access == one is state and the action
      //state give the access the current value in the initialState
      //action values are given for different works like getting the id for remove todo

      const todo = {
        // we get the todo from the action
        id: nanoid(), // getting uniqe id
        text: action.payload, // payload is a object and access using (.) here don't need the payload.text because key is same
      };

      state.todos.push(todo); // state.todos.push(todo) adds the todo into the todos array inside the initialState.
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
    },
    updateTodo: (state,action) =>{
      state.todos =  state.todos.map(todo => todo.id === action.payload.id ? {...todo,text: action.payload.text}:todo) // todo is just a name used inside the map() function to access each todo while updating.
    } 
  },
});

// step 3, to use the function in use it in the components
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions // Exporting the action creators to use them in components with dispatch

export default todoSlice.reducer //  used for the reducer, the main function Redux needs from this file to manage state.