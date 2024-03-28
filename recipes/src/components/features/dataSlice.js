import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState:{value: []},
    reducers:{
        loadData:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default dataSlice.reducer
export const {loadData} = dataSlice.actions