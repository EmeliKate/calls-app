import  {configureStore} from "@reduxjs/toolkit";
import callsSlice from "../features/calls/callsSlice"


export const store = configureStore({
    reducer: {
        calls: callsSlice
    }
})