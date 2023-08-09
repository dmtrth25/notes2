import { FC } from "react"
import { useDispatch } from "react-redux"
import { TableHead } from "../table/TableHead"
import { unarchiveNote } from "../../redux/slices/notesSlice"
import { RiInboxUnarchiveLine } from "react-icons/ri"

import { ArchivedProps } from "../../@types"

export const Archived: FC<ArchivedProps> = ({
  showArchivedModal,
  archivedArr,
  label = "Archived",
}) => {
  const dispatch = useDispatch()

  const unarchiveNoteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const noteId = parseInt(event.currentTarget.dataset.id || "")
    dispatch(unarchiveNote(noteId))
  }
  return (
    <>
      {showArchivedModal && (
        <div className="block mt-5">
          <h2 className="font-semibold text-2xl">{label}</h2>
          <table className="w-full border-collapse my-5">
            <TableHead />
            <tbody id="archived">
              {archivedArr?.map((item) => (
                <tr key={item.id}>
                  <td>{item.time}</td>
                  <td>{item.name}</td>
                  <td>{item.content}</td>
                  <td>{item.category}</td>
                  <td>{item.dates}</td>
                  <td className="flex justify-center items-center">
                    <button
                      onClick={unarchiveNoteHandler}
                      data-id={item.id}
                      className="
                        rounded-lg 
                        mr-2
                        mb-2
                        mt-1
                        bg-custom
                        text-white 
                        border-0 
                        py-3 
                        px-4 
                        cursor-pointer 
                        transition 
                        duration-200 
                        hover:bg-hover 
                        hover:text-black
                      "
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
