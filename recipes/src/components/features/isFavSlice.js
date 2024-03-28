import { createSlice } from "@reduxjs/toolkit";

export const isFavSlice = createSlice({
    name: 'isFav',
    initialState:{value:false},
    reducers:{
        changeIsFav:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default isFavSlice.reducer
export const {changeIsFav} = isFavSlice.actions