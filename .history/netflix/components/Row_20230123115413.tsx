import { Props } from "next/script"

interface Props{
    title:string
    <movies:Movu></movies:Movu>
}

function Row({title,movies}: Props) {
  return (
    <div>Row</div>
  )
}

export default Row