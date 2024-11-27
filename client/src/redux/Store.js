import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./reducers/user";
import {foodReducer} from "./reducers/Food"

const Store = configureStore({
   reducer: {
    userAuth: userReducer,
    FoodList: foodReducer
    
   },
});
export default Store;