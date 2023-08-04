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

  return (
    <tbody id="body">
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.time}</td>
          <td>{item.name}</td>
          <td>{item.content}</td>
          <td>{item.category}</td>
          <td>{item.dates}</td>
          <td className="actions">
            <button
              onClick={showModalEditHandler}
              data-id={item.id}
              className="button action-button edit-button"
            >
              <FiEdit2 />
            </button>
            <button
              onClick={onDeleteNoteClick}
              data-id={item.id}
              className="button action-button delete-button"
            >
              <BsTrash3 />
            </button>
            <button
              onClick={archiveNoteHandler}
              data-id={item.id}
              className="button action-button archive-button"
            >
              <BsFillArchiveFill />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
