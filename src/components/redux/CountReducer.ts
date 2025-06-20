import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface countState {
    countData: any
}

const initialState: countState = {
    countData: 0
}

const countSlice = createSlice ({
    name: "countData",
    initialState,
    reducers: {
        setCountData: (state, action: PayloadAction<any>) => {
            state.countData = action.payload
        }
    }
});
export const { setCountData }= countSlice.actions;
export default countSlice.reducer