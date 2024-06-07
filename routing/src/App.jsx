// import React, { Suspense } from "react"
// const Dashboard = React.lazy(()=> import("./components/Dashboard"))
// const Landing = React.lazy(()=> import("./components/Landing"))
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"


// function App(){
  
//   return(
//     <div>
//       {/* <div style={{background: "black", color: "white"}}>
//         <button onClick={()=>{
//           window.location.href= "/";
//         }}>Landing Page</button>
//         <button onClick={()=>{
//           window.location.href= "/dashboard"
//         }}>Dashboard Page</button>
//       </div> */}
//       <BrowserRouter>
//         <Appbar/>
//         <Routes>
//           <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard/></Suspense>}></Route>
//           <Route path="/" element={<Suspense fallback={"Loading"}><Landing/></Suspense>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Appbar(){
//   const navigate = useNavigate();
//   return <div>
//         <div>
//           <button onClick={()=>{
//             navigate("/")
//           }}>Landing Page</button>
//           <button onClick={()=>{
//             navigate("/dashboard");
//           }}>Dashboard Page</button>
//         </div>
//   </div>
// }

// export default App







import { useContext, useState } from "react";
import { CountContext } from "./context";
function App(){
  const [count, setCount] = useState(0);

  return <div>
    <CountContext.Provider value={count}>
      <Count setCount={setCount}/>
    </CountContext.Provider>
  </div>
}

function Count({setCount}){
  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
    </div>
  )
}

function CountRenderer(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Button({setCount}){
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>INCREASE</button>
      <button onClick={()=>{setCount(count-1)}}>DECREASE</button>
    </div>
  )
}

export default App