import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ics = JSON.parse(localStorage.getItem('cart')) || []

const cartslice=createSlice({
    name:'cart',
    initialState:ics,
    reducers:{
        addtocart(state,action){
            state.push(action.payload);
            localStorage.setItem('cart',JSON.stringify(state))
            
        },
        
        removetocart(state,action){
            const ne= state.filter((item)=> item.id !== action.payload);
            localStorage.setItem('cart',JSON.stringify(ne))
            return ne

        }
    }
})



export const{addtocart,removetocart}=cartslice.actions
export default cartslice.reducer


