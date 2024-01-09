import { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { updateTodo } from "../redux/slices/todoSlice";
import { addTodo } from "../redux/slices/todoSlice";

function AddTodo(props){
  const {element} = props;
  const dispatch = useDispatch();

  const [inputvalue,setInput]  = useState("");
 
  useEffect(() => {
    if (element.id != 0) {
      setInput(element.text);
    }
  }, [element]);
  const addTodoHandler = (event)=>{
    event.preventDefault();
   

      if(!inputvalue){
        alert("input can't be empty");
        return
      }
    
      
   
  if (element.id !== 0) {
    dispatch(updateTodo({ id: element.id, text: inputvalue }));
    element.id = 0;
  }else{
 
dispatch(addTodo(inputvalue))    
 }
setInput("");
  }
 

    return(
     <>
       <form  onSubmit={addTodoHandler}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text"  value={inputvalue} onChange={(event)=>setInput(event.target.value)}/>
                                    <label>New Task</label>
                                </div>
                            </div>
                            {/* <input type="submit" value="Add Task" /> */}
                            <button className="btn teal" > {element.id ?  "Edit" : "Add"}  </button>
                        </form>

  
  </>
)
    
}
export default AddTodo;