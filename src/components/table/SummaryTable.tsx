import { SummaryTableProps } from "../../@types"

export const SummaryTable: React.FC<SummaryTableProps> = ({
  categories,
  data,
  archivedArr,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Active Notes</th>
          <th>Archived Notes</th>
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
              <td>{category}</td>
              <td>{activeNotesCount}</td>
              <td>{archivedNotesCount}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
