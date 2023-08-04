import { FC } from "react"
import { useDispatch } from "react-redux"
import { updateNote } from "../../redux/slices/notesSlice"

import { EditModalProps } from "../../@types"

export const EditModal: FC<EditModalProps> = ({
  showEditModal,
  editedNote,
  editedNoteIndex,
  setShowEditModal,
}) => {
  const dispatch = useDispatch()
  const closeModaEditlHandler = () => {
    setShowEditModal(false)
  }
  const onUpdateNoteClick = () => {
    if (!editedNote || editedNoteIndex === null) {
      return
    }

    const updatedNote = {
      ...editedNote,
      name:
        (document.getElementById("edit-note-title") as HTMLInputElement)
          ?.value || "",
      content:
        (document.getElementById("edit-note-content") as HTMLTextAreaElement)
          ?.value || "",
      category:
        (document.getElementById("edit-note-category") as HTMLSelectElement)
          ?.value || "",
    }

    dispatch(updateNote({ index: editedNoteIndex, note: updatedNote }))
    setShowEditModal(false)
  }
  return (
    <>
      {showEditModal && editedNote && (
        <div
          className="modal"
          id="edit-note-modal"
          style={{ display: showEditModal ? "flex" : "none" }}
        >
          <div className="modal-content">
            <div className="modal-content_header">
              <span
                onClick={closeModaEditlHandler}
                className="close-button"
                id="edit-close-button"
              >
                &times;
              </span>
              <h2>Edit Note</h2>
            </div>
            <label htmlFor="edit-note-title">Title:</label>
            <input
              type="text"
              id="edit-note-title"
              required
              defaultValue={editedNote.name}
            />
            <label htmlFor="edit-note-content">Content:</label>
            <textarea
              id="edit-note-content"
              rows={4}
              required
              defaultValue={editedNote.content}
            ></textarea>
            <label htmlFor="edit-note-category">Category:</label>
            <select id="edit-note-category" defaultValue={editedNote.category}>
              <option value="" disabled>
                Select category
              </option>
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
            </select>
            <button
              onClick={onUpdateNoteClick}
              className="button"
              id="update-note-button"
            >
              Update Note
            </button>
          </div>
        </div>
      )}
    </>
  )
}
