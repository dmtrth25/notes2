import { FC, useRef } from "react"
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

  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const categoryRef = useRef<HTMLSelectElement>(null)

  const onUpdateNoteClick = () => {
    if (!editedNote || editedNoteIndex === null) {
      return
    }

    const updatedNote = {
      ...editedNote,
      name: titleRef.current?.value || "",
      content: contentRef.current?.value || "",
      category: categoryRef.current?.value || "",
    }

    dispatch(updateNote({ index: editedNoteIndex, note: updatedNote }))
    setShowEditModal(false)
  }

  return (
    <>
      {showEditModal && editedNote && (
        <div
          className="
            fixed 
            top-0 
            left-0 
            w-full 
            h-full 
            bg-black 
            flex 
            items-center 
            justify-center 
            bg-opacity-50
          "
          id="edit-note-modal"
          style={{ display: showEditModal ? "flex" : "none" }}
        >
          <div
            className="
              bg-white 
              p-[20px] 
              rounded-lg 
              w-[500px] 
              shadow-custom 
              relative
            "
          >
            <div>
              <span
                onClick={closeModaEditlHandler}
                className="
                  w-[30px] 
                  h-[30px] 
                  absolute 
                  top-[10px] 
                  right-[10px] 
                  flex 
                  justify-center 
                  items-center 
                  text-[20px] 
                  cursor-pointer 
                  text-white 
                  bg-custom 
                  p-[4px] 
                  rounded-[50%] 
                  shadow-md 
                  transition 
                  duration-200 
                  ease-out 
                  hover:bg-hover
                "
                id="edit-close-button"
              >
                &times;
              </span>
              <h2 className="mb-[20px] text-[24px]">Edit Note</h2>
            </div>
            <label className="block mb-[5px]" htmlFor="edit-note-title">
              Title:
            </label>
            <input
              className="
                w-full 
                p-[10px] 
                mb-[10px] 
                border 
                border-solid 
                border-gray-300 
                rounded-[4px]
              "
              type="text"
              id="edit-note-title"
              required
              defaultValue={editedNote.name}
              ref={titleRef}
            />
            <label className="block mb-[5px]" htmlFor="edit-note-content">
              Content:
            </label>
            <textarea
              className="
                w-full 
                p-[10px] 
                mb-[10px] 
                border 
                border-solid 
                border-gray-300 
                rounded-[4px]
              "
              id="edit-note-content"
              rows={4}
              required
              defaultValue={editedNote.content}
              ref={contentRef}
            ></textarea>
            <label htmlFor="edit-note-category">Category:</label>
            <select
              className="
                w-full 
                p-[10px] 
                mb-[10px] 
                border 
                border-solid 
                border-gray-300 
                rounded-[4px]
              "
              id="edit-note-category"
              defaultValue={editedNote.category}
              ref={categoryRef}
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
            </select>
            <button
              onClick={onUpdateNoteClick}
              className="
              bg-custom
              text-white 
                px-5 
                py-3 
                rounded-lg 
                w-full 
                transition 
                duration-200 
                ease-out 
                hover:bg-hover 
                hover:text-gray-900 
                focus:outline-none
              "
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
