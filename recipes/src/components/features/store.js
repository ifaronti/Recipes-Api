import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import detailsSlice from "./detailsDataSlice";
import favoritesSlice from "./favoritesSlice";
import idSlice from "./idSlice";
import searchSlice from "./searchSlice";
import isFavSlice from "./isFavSlice";


export const theStore = configureStore({
    reducer:{
        data: dataSlice,
        detailsData: detailsSlice,
        favorites: favoritesSlice,
        id: idSlice,
        search: searchSlice,
        isFav: isFavSlice
    }
})