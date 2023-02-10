import Image from "next/image"
import { Movie } from "../typings"
import { useEffect, useState } from 'react'

interface Props{
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)
    
  
    useEffect(() => {
      setMovie(
        netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
      )
    }, [netflixOriginals])

function Banner({netflixOriginals} : Props) {
  return (
    <div>
       <Image/>
    </div>
  )
}

export default Banner