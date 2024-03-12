import {createSlice} from '@reduxjs/toolkit' 

const statuses=Object.freeze({
    success:'success',
    error:'error',
    loading:'loading'
})

const productslice=createSlice({
    name:'product',
    initialState:{
        data:[],
        status:statuses
    },
    reducers:{
        setproduct(state,action){
            state.data=action.payload
        },

        setstatus(state,action){
            state.status=action.payload
        }
        
    }
})



export const {setproduct,setstatus} =productslice.actions
export default productslice.reducer


//middleware

export function fetchproducts(){
    return async function fetchproductstunk(dispatch){
        dispatch(setstatus(statuses.loading))
        try {
            const res=await fetch("https://fakestoreapi.com/products")
            const result=await res.json()
            dispatch(setproduct(result))
            dispatch(setstatus(statuses.success))
        } catch (error) {
            console.log(error)
            dispatch(setstatus(statuses.error))
            
        }
    }
}