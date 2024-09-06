import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/loginSlice";


const store= configureStore({
    reducer:{
        user:loginReducer
    }
});

export default store;