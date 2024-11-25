import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./reducers/user";

const Store = configureStore({
   reducer: {
    userAuth: userReducer,
    
   },
});
export default Store;