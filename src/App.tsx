import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import {
  Header,
  Archived,
  SummaryTable,
  TableBody,
  TableHead,
  EditModal,
  CreateModal,
} from "./components"
import { Note, RootState } from "./@types"

const categoriesList = ["Task", "Random Thought", "Idea"]

const App = () => {
  const [showArchivedModal, setShowArchivedModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [categories] = useState<string[]>(categoriesList)
  const [editedNote, setEditedNote] = useState<Note | null>(null)
  const [editedNoteIndex, setEditedNoteIndex] = useState<number | null>(null)

  const data = useSelector((state: RootState) => state.notes.data)
  const archivedArr = useSelector((state: RootState) => state.notes.archivedArr)

  useEffect(() => {
    setShowArchivedModal(archivedArr?.length !== 0)
  }, [archivedArr])

  return (
    <div className="p-[30px] max-w-[1200px] mx-auto">
      <Header setShowArchivedModal={setShowArchivedModal} />
      <table className="w-full border-collapse mt-5 mb-3">
        <TableHead />
        <TableBody
          setEditedNote={setEditedNote}
          setEditedNoteIndex={setEditedNoteIndex}
          setShowEditModal={setShowEditModal}
        />
      </table>
      <Archived
        showArchivedModal={showArchivedModal}
        archivedArr={archivedArr}
      />
      <CreateModal />
      <EditModal
        showEditModal={showEditModal}
        editedNote={editedNote}
        editedNoteIndex={editedNoteIndex}
        setShowEditModal={setShowEditModal}
      />
      <SummaryTable
        categories={categories}
        data={data}
        archivedArr={archivedArr}
      />
    </div>
  )
}

export default App
