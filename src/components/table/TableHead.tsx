import { FC } from "react"

interface TableHeadProps {
  time?: string
  name?: string
  content?: string
  category?: string
  dates?: string
  actions?: string
}

export const TableHead: FC<TableHeadProps> = ({
  time = "Time of Creation",
  name = "Name",
  content = "Content",
  category = "Category",
  dates = "Dates",
  actions = "Actions",
}) => {
  return (
    <thead>
      <tr>
        <th className="text-white bg-custom p-[14px] text-center border-b border-gray-300 text-base">
          {time}
        </th>
        <th className="text-white bg-custom p-[14px] text-center border-b border-gray-300 text-base">
          {name}
        </th>
        <th className="text-white bg-custom p-[14px] text-center border-b border-gray-300 text-base">
          {content}
        </th>
        <th className="text-white bg-custom p-[14px] text-center border-b border-gray-300 text-base">
          {category}
        </th>
        <th className="text-white bg-custom p-[14px] text-center border-b border-gray-300 text-base">
          {dates}
        </th>
        <th className="text-white bg-custom p-[14px] text-center border-b border-gray-300 text-base">
          {actions}
        </th>
      </tr>
    </thead>
  )
}
