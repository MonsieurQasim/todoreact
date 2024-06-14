import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
/*
const ListComponent=()=>{
  const [items, setitems] = useState(['item1', 'item 2', 'item 3'])
return(
  <div>
     <h2>My List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
  </div>
)
}
*/
function App() {
  return (
    <div className="todo-app">
      <TodoList />
      {/*
      <h1>Todo app</h1>
      <input className='text'></input>
      <button className='enter'></button>
      <ListComponent></ListComponent>
*/}
    </div>
  );
}

export default App;
