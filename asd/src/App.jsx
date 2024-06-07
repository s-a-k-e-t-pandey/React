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

// function Todo({id}){
//   const [todo, setTodo] = useState([])
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


// import { useMemo, useState } from "react";

// function App(){
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);

//   let count = useMemo(()=>{
//     let fcount = 0;
//     for(let i=0; i<=inputValue; i++){
//       fcount = fcount + i;
//     }
//     return fcount;
//   }, [inputValue])

//   return(
//     <div>
//       <input onChange={function(e){
//         setInputValue(e.target.value);
//       }} placeholder={"Find the sum from 1 to n"} />
//       <br />
//       Sum from 1 to {inputValue} : {count}
//       <br />
//       <button onClick={function(){
//         setCounter(counter+1);
//       }}>Counter ({counter})</button>
//     </div>
//   )
// }

// export default App


// import { useCallback } from "react";
// import { useState } from "react";
// import { memo } from "react";

// function App(){
//   const [count, setCount] = useState(0);

//   // function logSomething(){
//   //   console.log("Child clicked")
//   // }

//   const inputFunction = useCallback(()=>{
//     console.log("Child render")
//   })

//   return <div>
//     <ButtonComponent inputFunction={inputFunction}/>
//     <button onClick={()=>{
//       setCount(count + 1);
//     }}>click me {count}</button>
//   </div>
// }

// // eslint-disable-next-line react/display-name
// const ButtonComponent = memo(({inputFunction})=>{
//   console.log("child render")
//   return <div>
//     <button onClick={inputFunction}>Button Clicked</button>
//   </div>
// })

// export default App;




import { useEffect, useState, useMemo } from "react";
function App(){
  const [exchangeData, setExchangeData] = useState({})
  const [exchangeData1, setExchangeData1] = useState({})
  const [bankData, setBankData] = useState({});
  
  // console.log("re-render")
  useEffect(()=>{
      setExchangeData({returns: 100})
  }, [])

  useEffect(()=>{
      setExchangeData1({returns: 100})
  }, [])

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({
        income: 100
      });
    }, 5000);
  }, [])

  const cryptoReturns = useMemo(()=>{
    console.log("hii there")
    return exchangeData.returns + exchangeData1.returns;
  })

  const incomeTax = (bankData.income + cryptoReturns)* 0.3;

  return(
    <div>
      hi there, your income tax return: {incomeTax}
    </div>
  )
}

export default App