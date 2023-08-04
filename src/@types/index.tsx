import { Dispatch, SetStateAction } from "react"

export interface Note {
  id: number
  name: string
  time: string
  content: string
  category: string
  dates: string
  archived: boolean
}

export interface ArchivedProps {
  showArchivedModal: boolean
  archivedArr: Note[]
}

export type HeaderProps = {
  setShowArchivedModal: Dispatch<SetStateAction<boolean>>
}

export interface SummaryTableProps {
  categories: string[]
  data: Note[]
  archivedArr: Note[]
}

export interface TableBodyProps {
  setEditedNote: Dispatch<SetStateAction<Note | null>>
  setEditedNoteIndex: Dispatch<SetStateAction<number | null>>
  setShowEditModal: Dispatch<SetStateAction<boolean>>
}

export interface NotesState {
  data: Note[]
  archivedArr: Note[]
}

export interface RootState {
  notes: {
    data: Note[]
    archivedArr: Note[]
  }
}

export interface EditModalProps {
  showEditModal: boolean
  editedNote: Note | null
  editedNoteIndex: number | null
  setShowEditModal: (value: boolean) => void
}
