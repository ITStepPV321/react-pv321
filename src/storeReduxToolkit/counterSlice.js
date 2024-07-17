import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0,
    title: "Creater Redux/Toolkit"
}

//using immer
export const counterSlice=createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state)=>{
            state.count+=1;
        },
        decrement: (state)=>{
            state.count-=1;
        },
        incrementByN:(state, action) =>{
            state.count+=action.payload;
        },
        reset:(state)=>{
            state.count=0;
        },
    }
});



export const {increment, decrement, incrementByN, reset}=counterSlice.actions;
export default counterSlice.reducer;