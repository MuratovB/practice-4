import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        tripleIncrement: (state) => {
            state.value += 3
        },
        input: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const { increment, decrement, tripleIncrement, input } = counterSlice.actions;

export default counterSlice.reducer;
