import { createSlice } from "@reduxjs/toolkit";


const counterReducer = createSlice({
    name: "counter",
    initialState: {value: 0},
    reducers: {
        increment: (state)=>{
            console.log(state);
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state)=> {
            state.value = 0;
        }
    }
});

export const { increment, decrement, reset } = counterReducer.actions;
export default counterReducer.reducer