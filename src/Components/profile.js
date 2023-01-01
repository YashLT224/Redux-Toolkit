import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {updatestatus,fetchName} from '../actions'
import {updatestatuses,updateNamee,updateAgee,fetchUserNamee} from '../reducers/userReducer'
const Profile = () => {
    const dispatch=useDispatch();
   
   const {name,age,status}= useSelector((state)=>state.authreducer)
   const {name:namee,age:agee,status:statuss}= useSelector((state)=>state.userReducer)
   const updateAge=()=>{
       dispatch({type:'UPDATE_AGE',payload:40})

   }
   const updateName=()=>{
     
    dispatch(fetchName())

}
const updateStatus=()=>{
    dispatch(updatestatus('dev'))
    // dispatch({type:'UPDATE_STATUS',payload:'developer'})

}
    return (
        <div>
            <h1> Redux Toolkit genuine  approach</h1>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{status}</h1>
            <button onClick={()=>updateAge()}> Update Age</button>
            <button onClick={()=>updateName()}> Update Name</button>
            <button onClick={()=>updateStatus()}> Update Status</button>
<br/>
<hr/>

<h1> Redux Toolkit short boilerPlate modern approach</h1>
          <h1>{namee}</h1>
            <h1>{agee}</h1>
            <h1>{statuss}</h1>
            <button onClick={()=>dispatch(updatestatuses('60'))}> Update Age modernWay</button>
            <button onClick={()=>dispatch(fetchUserNamee('yash'))}> Update Name modernWay</button>
            <button onClick={()=>dispatch(updateAgee('backend'))}> Update Status modernWay</button>
        </div>
    )
}

export default Profile
