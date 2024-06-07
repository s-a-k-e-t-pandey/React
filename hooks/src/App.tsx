// import { useState } from "react";


// function App(){
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <button onClick={function(){setCount(count+1)}}>+ Click</button>
//       <button onClick={function(){setCount(count-1)}}>- Click</button>
//       <div className="absolute p-4 m-5 bg-grey-500">{count}</div>
//     </div>
//   )
// }

// export default App



// import { useEffect, useState } from "react";
// import axios from "axios";

// interface TodoType {
//   title: string;
//   description: string;
// }


// function App(){
//   const [todos, setTodos] = useState<TodoType[]>([])
//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(function(response){
//       setTodos(response.data.todos)
//     })
//   }, [])
  
//   return (
//     <div>
//       {todos.map((todo, index) => <Todo key={index} title={todo.title} description={todo.description}/>)}
//     </div>
//   )
// }

// function Todo({title, description}: {title: string; description: string}){
//   return (
//     <div>
//       <h1>{title}</h1>
//       {description}
//     </div>
//   )
// }

// export default App




// import { useEffect, useState } from "react";
// import axios from "axios";

// function App(){
//   const [selectedId, SetSelectedId] = useState(1);

//   return(
//     <div>
//       <button onClick={function(){SetSelectedId(1)}}>1</button>
//       <button onClick={function(){SetSelectedId(2)}}>2</button>
//       <button onClick={function(){SetSelectedId(3)}}>3</button>
//       <button onClick={function(){SetSelectedId(4)}}>4</button>

//       <Todo id={selectedId}/>
//     </div>
//   )
// }

// interface TodoType {
//   title: string;
//   description: string;
// }

// function Todo({id}: {id: number}){
//   const [todo, setTodo] = useState<{ title: string; description: string } | null>(null)
//   useEffect(()=>{
//     axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//     .then(response=>{
//       setTodo(response.data.todo)
//     })
//   }, [id])
  
//   return (
//     <div>
//       Id: {id}
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   )
// }

// export default App



