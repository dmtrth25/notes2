import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { archiveNote, removeNote } from "../../redux/slices/notesSlice"
import { FiEdit2 } from "react-icons/fi"
import { BsTrash3 } from "react-icons/bs"
import { BsFillArchiveFill } from "react-icons/bs"

import { RootState, TableBodyProps } from "../../@types"

export const TableBody: FC<TableBodyProps> = ({
  setEditedNote,
  setEditedNoteIndex,
  setShowEditModal,
}) => {
  const data = useSelector((state: RootState) => state.notes.data)
  const dispatch = useDispatch()

  const archiveNoteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const noteId = parseInt(event.currentTarget.dataset.id || "")
    dispatch(archiveNote(noteId))
  }

  const handleRemoveNote = (noteId: number) => {
    dispatch(removeNote(noteId))
  }

  const onDeleteNoteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const noteId = parseInt(event.currentTarget.dataset.id || "")
    handleRemoveNote(noteId)
  }

  const showModalEditHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const noteId = parseInt(event.currentTarget.dataset.id || "")
    const foundNote = data.find((note) => note.id === noteId)
    if (foundNote) {
      setEditedNote({
        ...foundNote,
        dates: foundNote.dates ?? "",
      })
      setEditedNoteIndex(data.indexOf(foundNote))
      setShowEditModal(true)
    }
  }

  if (data.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={6} className="p-[14px] text-center">
            <div className="bg-gray-200 rounded-md p-4 text-gray-700 font-bold">
              There are no notes!
            </div>
          </td>
        </tr>
      </tbody>
    )
  }

  return (
    <tbody id="body">
      {data.map((item) => (
        <tr key={item.id}>
          <td className="p-[14px] text-center border-b border-gray-300 text-base">
            {item.time}
          </td>
          <td className="p-[14px] text-center border-b border-gray-300 text-base">
            {item.name}
          </td>
          <td className="p-[14px] text-center border-b border-gray-300 text-base">
            {item.content}
          </td>
          <td className="p-[14px] text-center border-b border-gray-300 text-base">
            {item.category}
          </td>
          <td className="p-[14px] text-center border-b border-gray-300 text-base">
            {item.dates}
          </td>
          <td className="p-[14px] text-center border-b border-gray-300 text-base">
            <button
              onClick={showModalEditHandler}
              data-id={item.id}
              className="
                rounded-[12px] 
                mr-[3px] 
                bg-custom
                text-white 
                border-0 
                py-[12px]
                px-[15px]
                cursor-pointer 
                transition 
                duration-200 
                hover:bg-hover 
                hover:text-black
              "
            >
              <FiEdit2 />
            </button>
            <button
              onClick={onDeleteNoteClick}
              data-id={item.id}
              className="
                rounded-[12px] 
                mr-[3px] 
                bg-custom
                text-white 
                border-0 
                py-[12px]
                px-[15px]
                cursor-pointer 
                transition 
                duration-200 
                hover:bg-hover 
                hover:text-black
              "
            >
              <BsTrash3 />
            </button>
            <button
              onClick={archiveNoteHandler}
              data-id={item.id}
              className="
                rounded-[12px] 
                mr-[3px] 
                bg-custom
                text-white 
                border-0 
                py-[12px]
                px-[15px]
                cursor-pointer 
                transition 
                duration-200 
                hover:bg-hover 
                hover:text-black
              "
            >
              <BsFillArchiveFill />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
