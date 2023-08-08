import { FC } from "react"
import { HeaderProps } from "../@types"
import { BsFillArchiveFill } from "react-icons/bs"

export const Header: FC<HeaderProps> = ({ setShowArchivedModal }) => {
  const toggleArchivedModal = () => {
    setShowArchivedModal((prevState: boolean) => !prevState)
  }
  return (
    <div className="container-header">
      <h1 className="text-3xl">Notes App 2</h1>
      <button
        onClick={toggleArchivedModal}
        className="button"
        id="show-archived-btn"
      >
        <BsFillArchiveFill size={18} />
      </button>
    </div>
  )
}
