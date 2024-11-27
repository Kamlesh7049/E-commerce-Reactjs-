import { configureStore } from "@reduxjs/toolkit";

import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react

import myReducer from "./cartSlice";

const persistConfig={
    key:"root",
    storage
}
const persistedReducer=persistReducer(persistConfig,myReducer);

const store= configureStore({
    reducer:{
    //  mycart:myReducer
     mycart:persistedReducer
    }
})
export default store;
export const persistor=persistStore(store)