import { createSlice } from '@reduxjs/toolkit';

export const NoteSlice = createSlice({
    name: 'input',
    initialState: {
        valueInput: "dante",
        idUnico: "",
    },
    reducers: {
        setInput: (state, action) => {
            state.valueInput = action.payload 
        },

        setId: (state, action) => {
            state.idUnico = action.payload 
        },
    }
});

export const { setInput,setId } = NoteSlice.actions;

export default NoteSlice.reducer;