import { atom, atomFamily, selector } from "recoil";
import axios from "axios";
import { TODOS } from "./todos";

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 104
// })
// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 10
// })
// export const notificationAtom = atom({
//     key: "notificationAtom",
//     default: 99
// })
// export const messagingAtom = atom({
//     key: "messagingAtom",
//     default: 100
// })

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get})=>{
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const notificationAtomCount = get(notificationAtom);
//         const messagingAtomCount = get(messagingAtom);
//         return networkAtomCount+jobsAtomCount+notificationAtomCount+messagingAtomCount
//     }
// })



//Asynchronus data queries

// export const notifications = atom({
//     key: "networkAtom",
//     default: selector({
//         key: "networkAtomSelector",
//         get: async ()=>{
//             await new Promise(r=> setTimeout(r, 5000))
//             const res = await axios.get("https://sum-server.100xdevs.com/notifications")
//             return res.data
//         }
//     })
// });

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get})=>{
//         const allNotification = get(notifications);
//         return allNotification.network + 
//         allNotification.jobs + allNotification.notifications + allNotification.messaging
//     }
// })



export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id => {
        return TODOS.find(x => x.id === id)
    }
})

const todoAtom = atom({
    key: "todoAtom",
    default: 1
})