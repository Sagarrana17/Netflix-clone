import { Props } from "next/script"

interface Props{
    <title:string></title:string>
}

function Row({title,movies}: Props) {
  return (
    <div>Row</div>
  )
}

export default Row