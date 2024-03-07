import { configureStore } from '@reduxjs/toolkit'
import NoteReducer from './NoteSlice'


const store = configureStore({
  reducer: {
    notes: NoteReducer,
  },
})

export default store