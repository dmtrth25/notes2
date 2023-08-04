import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNewNote } from "../../redux/slices/notesSlice"
import { Note, RootState } from "../../@types"

export const CreateModal = () => {
  const [showCreateModal, setShowCreateModal] = useState(false)

  const data = useSelector((state: RootState) => state.notes.data)
  const dispatch = useDispatch()

  const showModalHandler = () => {
    setShowCreateModal(true)
  }

  const closeModalHandler = () => {
    setShowCreateModal(false)
  }

  const onAddNoteClick = () => {
    const name = (document.getElementById("note-title") as HTMLInputElement)
      ?.value
    const content = (
      document.getElementById("note-content") as HTMLTextAreaElement
    )?.value
    const category = (
      document.getElementById("note-category") as HTMLSelectElement
    )?.value

    const newNote: Note = {
      id: data.length + 1,
      name,
      time: new Date().toLocaleString(),
      content,
      category,
      dates: "",
      archived: false,
    }

    dispatch(addNewNote(newNote))
    setShowCreateModal(false)
  }

  return (
    <>
      <button onClick={showModalHandler} id="add-note" className="button">
        Add note
      </button>
      <h2>Summary</h2>
      {showCreateModal && (
        <div
          className="modal"
          id="add-note-modal"
          style={{ display: showCreateModal ? "flex" : "none" }}
        >
          <div className="modal-content">
            <div className="modal-content_header">
              <span
                onClick={closeModalHandler}
                className="close-button"
                id="close-button"
              >
                &times;
              </span>
              <h2>Add New Note</h2>
            </div>
            <label htmlFor="note-title">Title:</label>
            <input type="text" id="note-title" required />
            <label htmlFor="note-content">Content:</label>
            <textarea id="note-content" rows={4} required></textarea>
            <label htmlFor="note-category">Category:</label>
            <select id="note-category" defaultValue="">
              <option value="" disabled>
                Select category
              </option>
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
            </select>
            <button
              onClick={onAddNoteClick}
              className="button"
              id="add-note-button"
            >
              Add Note
            </button>
          </div>
        </div>
      )}
    </>
  )
}
