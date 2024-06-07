// import { useState } from "react";
// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// import {
//   // jobsAtom,
//   // messagingAtom,
//   // networkAtom,
//   // notificationAtom,
//   notifications,
//   totalNotificationSelector,
// } from "./atoms";


// function App() {
//   return (
//     <RecoilRoot>
//       <MainApp />
//     </RecoilRoot>
//   );
// }

// function MainApp() {
//   const networkNotificationCount = useRecoilValue(networkAtom);
//   const jobsAtomCount = useRecoilValue(jobsAtom);
//   const notificationAtomCount = useRecoilValue(notificationAtom);
//   const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector)
//   return (
//     <div>
//       <div className="rounded-lg flex flex-row text-semibold p-2 m-1 bg-blue-500">
//         <button className="rounded-lg bg-orange-500 flex justify-between p-2 m-2">
//           Home
//         </button>
//         <button className="rounded-lg bg-orange-500 flex justify-between p-2 m-2">
//           My Network (
//           {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
//         </button>
//         <button className="rounded-lg bg-orange-500 flex justify-between p-2 m-2">
//           Jobs ({jobsAtomCount})
//         </button>
//         <button onClick={()=>{
//           setMessagingAtomCount(messagingAtomCount+1)
//         }} className="rounded-lg bg-orange-500 flex justify-between p-2 m-2">
//           Messaging ({messagingAtomCount})
//         </button>
//         <button className="rounded-lg bg-orange-500 flex justify-between p-2 m-2">
//           Notification ({notificationAtomCount})
//         </button>
//         <button className="rounded-lg bg-orange-500 flex justify-between p-2 m-2">
//           Me ({totalNotificationCount})
//         </button>
//       </div>
//     </div>
//   );
// }

// function MainApp() {
//   const [networkCount, setNetworkCount] = useRecoilState(notifications);
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);
//   return (
//     <>
//       <button>Home</button>

//       <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
//       <button>Message ({networkCount.messaging})</button>
//       <button>Jobs({networkCount.jobs})</button>
//       <button>Notificastion ({networkCount.notifications})</button>
//       <button>Me ({totalNotificationCount})</button>
//     </>
//   );
// }

// export default App;



import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todosAtomFamily } from "./atoms";
import { useEffect } from "react";

function App(){

  return <RecoilRoot>
    <UpdateComponent/>
      <Todo id={1}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>

  </RecoilRoot>
}


function UpdateComponent(){
  const updateTodo = useSetRecoilState(todosAtomFamily(2));

  useEffect(()=>{
    setTimeout(()=>{
      updateTodo({
        id: 2,
        title : "newTodo",
        description: "It's new One"
      })
    }, 5000)
  }, [])
  return <div></div>
}


function Todo({id}){
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return(
    <>
    {currentTodo.title}
    {currentTodo.description}
    <br />
    </>
  )
}

export default App;