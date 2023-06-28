import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    callsList: ["test"],
    sortedByDate: false,
    sortedByDirection: false,
    sortedByClient: false
}

const callsSlice = createSlice({
    name: "calls",
    initialState,
    reducers: {
        setCallsList(state, action){
            state.callsList = action.payload;
        },
        toggleSortedByDate(state){
            state.sortedByDate = !state.sortedByDate;
        },
        toggleSortedByDirection(state){
            state.sortedByDirection = !state.sortedByDirection;
        },
        toggleSortedByClient(state){
            state.sortedByClient = !state.sortedByClient;
        }
    }
})

export const {setCallsList, toggleSortedByDate, toggleSortedByDirection, toggleSortedByClient} = callsSlice.actions;
export default callsSlice.reducer;