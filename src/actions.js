//old way but it is working file with redux toolkit
// export const updatestatus=(status)=>{
//     return{
//         type:'UPDATE_STATUS',
//         payload:status
//     }
// }

// above and below ways both are same
import { createAction } from "@reduxjs/toolkit";
export const updatestatus= createAction('UPDATE_STATUS')

export const fetchName=()=>{
  
return async(dispatch)=>{
    dispatch({type:'LOADING',})
    const res=  await fetch('https://jsonplaceholder.typicode.com/users')
    const result= await res.json()
    dispatch({type:'UPDATE_NAME',payload:result[0].name})
}
}