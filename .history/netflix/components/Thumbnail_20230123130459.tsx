import { Props } from "next/script"

interface Props{
    movies:Movi
}

function Thumbnail({movies}: Props) {
  return (
    <div>Thumbnail</div>
  )
}

export default Thumbnail