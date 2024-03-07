import { createSlice } from '@reduxjs/toolkit';

export const NoteSlice = createSlice({
    name: 'input',
    initialState: {
        valueInput: "dante",
    },
    reducers: {
        setInput: (state, action) => {
            state.valueInput = action.payload 
        },
    }
});

export const { setInput } = NoteSlice.actions;

export default NoteSlice.reducer;