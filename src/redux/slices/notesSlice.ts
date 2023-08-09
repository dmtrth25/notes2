import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { data as dataArr } from "../../../data"
import { Note, NotesState } from "../../@types"

const initialState: NotesState = {
  data: dataArr,
  archivedArr: [],
}

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewNote: (state, action: PayloadAction<Note>) => {
      state.data.push(action.payload)
    },
    updateNote: (state, action: PayloadAction<{ index: number, note: Note }>) => {
      state.data[action.payload.index] = action.payload.note
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((note) => note.id !== action.payload)
    },
    archiveNote: (state, action: PayloadAction<number>) => {
      const index = state.data.findIndex((note) => note.id === action.payload)
      if (index !== -1) {
        const note = state.data[index]
        note.archived = true
        state.archivedArr!.push(note)
        state.data.splice(index, 1)
      }
    },
    unarchiveNote: (state, action: PayloadAction<number>) => {
      const index = state.archivedArr!.findIndex(
        (note) => note.id === action.payload
      )
      if (index !== -1) {
        const note = state.archivedArr![index]
        note.archived = false
        state.data.push(note)
        state.archivedArr!.splice(index, 1)
      }
    },
  },
})

export const { 
  addNewNote, 
  updateNote, 
  removeNote, 
  archiveNote, 
  unarchiveNote 
} = notesSlice.actions

export default notesSlice.reducer
