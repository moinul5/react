import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext';

function TodoForm() {
    const [todo,setTodo] = useState("")

    const {addTodo} = useTodo()

    const add = (e)=>{
        e.preventDefault();
        if(!todo) return
        addTodo({todo,completed: false}) // addTodo need object and the app , the todo:todo can written as only todo
        // we didn't pass the id because already created in the app.js and id = date.now() in there.
        setTodo("") 
    }

    return (
        <form  className="flex"
        onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} // this is called wiring up, which connect it with the state
                onChange={(e)=> setTodo(e.target.value)} 
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

