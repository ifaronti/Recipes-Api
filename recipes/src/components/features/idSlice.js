import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
    name:'dataID',
    initialState:{value:'5ed6604591c37cdc054bc9ca'},
    reducers:{
        updateID:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default idSlice.reducer
export const {updateID} = idSlice.actions