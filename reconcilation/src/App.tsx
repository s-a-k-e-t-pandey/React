// import React, { useState } from "react";

// function App(){
//   const [title, setTitle] = useState("my name is saket pandey");
//   function updateTitle(){
//     setTitle("my name is "+ Math.random())
//   }
//   return(
//     <div>
//       {/* <HeaderWithButton/>
//       <Header title="Saket45"></Header>
//     <Header title="Saket45"></Header>
//     <Header title="Saket45"></Header>
//     <Header title="Saket45"></Header> */}
//     <button onClick={updateTitle}>Update the title</button>
//     <Header title={title}/>
//     <Header title="saket"></Header>
//     <Header title="saket"></Header>
//     <Header title="saket"></Header>
//     <Header title="saket"></Header>
//     <Header title={title}/>
//     <Header title="saket"></Header>
//     <Header title="saket"></Header>
//     <Header title="saket"></Header>
//     <Header title="saket"></Header>
//     </div>
//   )
// }

// // function HeaderWithButton(){
// //   const [title, setTitle] = useState("my name is saket");

// //   function updateTitle(){
// //     setTitle("my name is "+ Math.random());
// //   }
// //   return (
// //     <div>
// //       <button onClick={updateTitle}>sdfgh</button>
// //     <Header title={title}></Header>
// //     </div>
// //   )
// // }


// // type HeaderProps = {
// //   title: string; // Define the type of the 'title' prop as string
// // };


// // function Header({title}: HeaderProps){
// //   return (
// //     <div>
// //       {title}
// //     </div>
// //   )
// // }

// const Header = React.memo(function ({title}: {title: string}){
//   return (
//     <div>
//       {title}
//     </div>
//   )
// })

// export default App



import React, {useState} from "react";
let counter = 4;
function App(){
  const [todos, setTodos] = useState([{
    id: 1,
    title: "GO to Zym",
    description: "yeah bro"
  },{
    id: 1,
    title: "GO to Zym",
    description: "yeah bro"
  },{
    id: 1,
    title: "GO to Zym",
    description: "yeah bro"
  }])

  function addTodo(){
    setTodos([...todos,{
      id: counter++,
      title: Math.random().toString(),
      description: Math.random().toString()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>update Todo</button>
      {todos.map((todo, index)=>(
        <Todo key={index} title={todo.title} description={todo.description}/>
      ))}
    </div>
  )
}


function Todo({title, description}: {title: string; description: string}){
  return (
    <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
    </div>
  )
}

export default App