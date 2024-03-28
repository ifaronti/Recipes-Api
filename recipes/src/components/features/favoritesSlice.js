import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState:{value:[]},
    reducers:{
        addFav:(state, action)=>{
            state.value = [...state.value, action.payload]
        },

        deleteFav:(state, action)=>{
            const newState = state.value.filter(item => item.id !== action.payload.id)
            state.value = newState
        }
    }
})

export default favoriteSlice.reducer
export const {addFav, deleteFav} = favoriteSlice.actions