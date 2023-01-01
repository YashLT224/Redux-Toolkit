import { createReducer,createSlice,createAsyncThunk } from "@reduxjs/toolkit" 
 
const initialState={
    name:'ramesh',
    age:'20',
    status:'coder'
    }
    

   // old way 
// export const  authreducer =(state=initialState,action)=>{
//     if(action.type==='UPDATE_AGE'){
//         return{
//             ...state,
//             age:action.payload
//         }
//     }
//     return state
// }

//new toolkit way1
 export const authreducer= createReducer(initialState,(builder)=>{
    builder.addCase('UPDATE_AGE',(state,action)=>{
        state.age=action.payload

    })
    builder.addCase('UPDATE_NAME',(state,action)=>{
        state.name=action.payload

    })
    builder.addCase('UPDATE_STATUS',(state,action)=>{
        state.status=action.payload
    })
    builder.addCase('LOADING',(state,action)=>{
        alert("true")

    })
})



//modern way react toolkit way2   //action aur reducer update ek hi jagah

//mention below is way2
export const  fetchUserNamee=createAsyncThunk(
    'fetchuser',
    async( )=>{
        const res=  await fetch('https://jsonplaceholder.typicode.com/users')
        const res2= await res.json()
        return res2[0].name
    }
     
)

 export const userReducerway= createSlice({
    name:'person',
    initialState:initialState,
    reducers:{
        updateNamee(state,action){
             console.log(state)
            state.name=action.payload
        },
        updateAgee(state,action){
            state.name=action.payload
        },
        updatestatuses(state,action){
            state.status=action.payload

        }
    },
    extraReducers:{
        [fetchUserNamee.pending]:(state,action)=>{
           state.name='loading'
        },
        [fetchUserNamee.fulfilled]:(state,action)=>{
            state.name=action.payload
        },
        [fetchUserNamee.rejected]:(state,action)=>{
            state.name='not found, try again'
        }
    }
})



export const userReducer=userReducerway.reducer
export const {updateNamee,updateAgee,updatestatuses}=userReducerway.actions