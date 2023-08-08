import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNewNote } from "../../redux/slices/notesSlice"
import { RootState } from "../../@types"

export const CreateModal = () => {
  const [showCreateModal, setShowCreateModal] = useState(false)

  const data = useSelector((state: RootState) => state.notes.data)
  const dispatch = useDispatch()

  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const categoryRef = useRef<HTMLSelectElement>(null)

  const showModalHandler = () => {
    setShowCreateModal(true)
  }

  const closeModalHandler = () => {
    setShowCreateModal(false)
  }

  const onAddNoteClick = () => {
    const name = titleRef.current?.value || ""
    const content = contentRef.current?.value || ""
    const category = categoryRef.current?.value || ""

    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })

    const parts = formattedDate.split("/")
    const day = parts[1]
    const month = parts[0]
    const year = parts[2]

    const newNote = {
      id: data.length + 1,
      name,
      time: `${day}/${month}/${year}`,
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
      <button
        onClick={showModalHandler}
        id="add-note"
        className="
          w-[130px] 
          text-[13px]
          float-right
          rounded-[12px]
          mr-1
          mb-2
          mt-2
          bg-custom
          text-white 
          border-0 
          py-3
          px-3 
          cursor-pointer 
          transition 
          duration-200 
          hover:bg-hover 
          hover:text-black
        "
      >
        Add note
      </button>
      <h2 className="font-semibold text-2xl">Summary</h2>
      {showCreateModal && (
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
          id="add-note-modal"
          style={{ display: showCreateModal ? "flex" : "none" }}
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
                onClick={closeModalHandler}
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
                id="close-button"
              >
                &times;
              </span>
              <h2 className="mb-[20px] text-[24px]">Add New Note</h2>
            </div>
            <label className="block mb-[5px]" htmlFor="note-title">
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
              id="note-title"
              ref={titleRef}
              required
            />
            <label className="block mb-[5px]" htmlFor="note-content">
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
              id="note-content"
              rows={4}
              ref={contentRef}
              required
            ></textarea>
            <label htmlFor="note-category">Category:</label>
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
              id="note-category"
              defaultValue=""
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
              onClick={onAddNoteClick}
              className="
              bg-custom
              text-white 
                px-3 
                py-1 
                rounded-[12px] 
                w-full 
                transition 
                duration-200 
                ease-out 
                hover:bg-hover 
                hover:text-gray-900 
                focus:outline-none
              "
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
