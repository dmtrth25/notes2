import { FC } from "react"
import { SummaryTableProps } from "../../@types"

export const SummaryTable: FC<SummaryTableProps> = ({
  categories,
  data,
  archivedArr,
}) => {
  return (
    <table className="w-full border-collapse my-[20px]">
      <thead>
        <tr>
          <th className="text-white bg-custom p-[14px] text-center border-b border-gray-300 text-base">
            Category
          </th>
          <th className="text-white bg-custom p-[14px] text-center border-b border-gray-300 text-base">
            Active Notes
          </th>
          <th className="text-white bg-custom p-[14px] text-center border-b border-gray-300 text-base">
            Archived Notes
          </th>
        </tr>
      </thead>
      <tbody id="summary">
        {categories.map((category) => {
          const activeNotesCount = data.filter(
            (note) => note.category === category && !note.archived
          ).length
          const archivedNotesCount = archivedArr.filter(
            (note) => note.category === category
          ).length
          return (
            <tr key={category}>
              <td className="p-[8px] text-center border-b border-gray-300 text-base">
                {category}
              </td>
              <td className="p-[8px] text-center border-b border-gray-300 text-base">
                {activeNotesCount}
              </td>
              <td className="p-[8px] text-center border-b border-gray-300 text-base">
                {archivedNotesCount}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
