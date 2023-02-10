import { CheckCircleIcon } from "@heroicons/react/o"
import { Movie } from "../typings"

interface Props{
    title:string
    movies:Movie[]
}

function Row({title, movies}: Props) {
  return (
    <div>
        <h2>{title}</h2>
        <div>
            <ChevronLeftIcon/>
        </div>
    </div>
    
  )
}

export default Row