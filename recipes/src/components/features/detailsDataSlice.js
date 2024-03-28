import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
    name:'detailsData',
    initialState:{value: ''},
    reducers:{
        updateDetailsData: (state, action)=>{
            state.value = action.payload
        }
    }
})

export default detailsSlice.reducer
export const {updateDetailsData} = detailsSlice.actions