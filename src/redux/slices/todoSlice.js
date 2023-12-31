import {createSlice,nanoid} from "@reduxjs/toolkit";
const initialState = {
    todos:[{id:0,listId:0, text:"hello world!"}]
}
export const todoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
 const todo = {
    id:nanoid(),
    listId: Math.max(...state.todos.map(todo => todo.listId)) + 1,
    text:action.payload,
 }
 state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
    
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);

        },
      updateTodo : (state, action) => {
  const { id, text } = action.payload;

  const updatedTodos = state.todos.map((todo) =>
    todo.id === id ? { ...todo, text } : todo
  );

  return {
    ...state,
    todos: updatedTodos,
  };
}

    }
})
export const{addTodo,removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;