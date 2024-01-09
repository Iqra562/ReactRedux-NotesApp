import AddTodo from "./components/AddTodo";
import Todos from   "./components/Todos";
import {useSelector,useDispatch} from "react-redux";
import { removeTodo } from "./redux/slices/todoSlice";
import React from "react";
import Home from "./pages/Home";

function App() {
 
  
  return (

    <div>
       
<Home/>
    </div>
    

  )
}

export default App;
