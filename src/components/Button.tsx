import { FC } from "react"

type ButtonProps = {
  label?: string
  color?: string
  showModalHandler: () => void
}

export const Button: FC<ButtonProps> = ({
  showModalHandler,
  label = "Add Note",
  color = "custom",
}) => {
  return (
    <button
      onClick={showModalHandler}
      id="add-note"
      className={[
        "w-[130px]",
        "text-[13px]",
        "float-right",
        "rounded-[12px]",
        "mr-1",
        "mb-2",
        "mt-2",
        `${color}`,
        "text-white",
        "border-0",
        "py-3",
        "px-3",
        "cursor-pointer",
        "transition",
        "duration-200",
        "hover:bg-hover",
        "hover:text-black",
      ].join(" ")}
    >
      {label}
    </button>
  )
}
