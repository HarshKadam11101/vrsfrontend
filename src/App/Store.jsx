import {configureStore} from "@reduxjs/toolkit";
import { UserReducer } from "../Reducers/UserReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

export default configureStore({
    reducer: { user: UserReducer },
    //middleware:(getDefaultMiddleware) => getDefaultMiddleware.concat(thunk).concat(logger)
})