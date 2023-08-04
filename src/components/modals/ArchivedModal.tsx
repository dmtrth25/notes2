import { FC } from "react"
import { useDispatch } from "react-redux"
import { TableHead } from "../table/TableHead"
import { unarchiveNote } from "../../redux/slices/notesSlice"
import { RiInboxUnarchiveLine } from "react-icons/ri"

import { ArchivedProps } from "../../@types"

export const Archived: FC<ArchivedProps> = ({
  showArchivedModal,
  archivedArr,
}) => {
  const dispatch = useDispatch()

  const unarchiveNoteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const noteId = parseInt(event.currentTarget.dataset.id || "")
    dispatch(unarchiveNote(noteId))
  }
  return (
    <>
      {showArchivedModal && (
        <div className="archived">
          <h2>Archived</h2>
          <table className="table">
            <TableHead />
            <tbody id="archived">
              {archivedArr.map((item) => (
                <tr key={item.id}>
                  <td>{item.time}</td>
                  <td>{item.name}</td>
                  <td>{item.content}</td>
                  <td>{item.category}</td>
                  <td>{item.dates}</td>
                  <td className="actions">
                    <button
                      onClick={unarchiveNoteHandler}
                      data-id={item.id}
                      className="button action-button edit-button"
                    >
                      <RiInboxUnarchiveLine size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
