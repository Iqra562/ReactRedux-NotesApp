import logo from '../../src/images/page.jpg';
import {useSelector,useDispatch} from "react-redux";
import { removeTodo } from "../redux/slices/todoSlice";
import { useState ,useEffect} from "react";
import AddTodo from "./AddTodo";
function Todos(){
    const todos = useSelector(state => state.todos);
    const [getId,setId] = useState(0);
    const [element,setElement]= useState({
      id:0,
      listId:0,
      text:"",
    })
    const dispatch = useDispatch();

useEffect(() => {
    if (getId != 0) {
      const getUserElement = todos.find((todo) => todo.listId === getId);
      setElement({
        id: getUserElement.id,
        listId:getUserElement.listId,
        text: getUserElement.text,
      });
  }
}, [getId]);

return(
    <>
      <div className="container w-50">
        <div className="row">
            <div className="col s12">
                <div id="main" className="card">
                    <div className="card-content">
                        <span className="card-title">Task List</span>
    <AddTodo  element={element}/>
                       
                    </div>
                    <div className="card-action">
                        <h5 id="task-title">Tasks</h5>
                        <div className="input-field col s12">
                            <input type="text" name="filter" id="filter"/>
                            <label >Filter Task</label>
                        </div>
                        <ul className="collection">
                          
                            {todos.slice(1).map(todo=>(
  <li key={todo.id} className="collection-item">
    
    {todo.text}
   
    <a  className="delete-item secondary-content">
 <i className="fa fa-edit"   onClick={()=>setId(todo.listId)}></i>
</a>
    <a  className="delete-item secondary-content">
 <i className="fa fa-remove"  onClick={()=>dispatch(removeTodo(todo.id))}></i>
</a>
    </li>

))}
                        </ul>
                        <a className="clear-tasks btn black">Clear Tasks</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* <div>TODOS</div>
      <ul>

{todos.slice(1).map(todo=>(
  <li key={todo.id}>
    {todo.listId} :
    {todo.text}
    <button className="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded"
 onClick={()=>setId(todo.listId)}>Update</button>
    <button className="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded"
 onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
    </li>

))}
</ul> */}
</>
)

}
export default Todos;

