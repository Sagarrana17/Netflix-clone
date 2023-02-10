import { Movie } from "../typings"

interface Props{
    movie:Movie
}

function Thumbnail({movies}: Props) {
  return (
    <div>Thumbnail</div>
  )
}

export default Thumbnail