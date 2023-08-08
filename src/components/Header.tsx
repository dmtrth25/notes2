import { FC } from "react"
import { HeaderProps } from "../@types"
import { BsFillArchiveFill } from "react-icons/bs"

export const Header: FC<HeaderProps> = ({ setShowArchivedModal }) => {
  const toggleArchivedModal = () => {
    setShowArchivedModal((prevState: boolean) => !prevState)
  }
  return (
    <div className="flex justify-between">
      <h1 className="text-32 font-semibold">Notes App 2</h1>
      <button
        onClick={toggleArchivedModal}
        className="
          text-[13px]
          rounded-[12px]
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
        id="show-archived-btn"
      >
        <BsFillArchiveFill size={18} />
      </button>
    </div>
  )
}
