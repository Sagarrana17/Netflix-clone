import { ChevronLeftIcon,ChevronRightIcon } from "@heroicons/react/outline"
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
            <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer"/>
            <ChevronRightIcon/>
        </div>
    </div>
    
  )
}

export default Row