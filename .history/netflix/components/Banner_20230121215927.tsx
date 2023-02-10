import Image from "next/image"
import { Movie } from "../typings"

interface Props{
    netflixOriginals: Movie[]
}



function Banner({netflixOriginals} : Props) {
  return (
    <div>
       <Image/>
    </div>
  )
}

export default Banner