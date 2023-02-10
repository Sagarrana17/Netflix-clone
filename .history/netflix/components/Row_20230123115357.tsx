import { Props } from "next/script"

interface Props{
    tit
}

function Row({title,movies}: Props) {
  return (
    <div>Row</div>
  )
}

export default Row