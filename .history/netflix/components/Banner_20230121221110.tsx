import Image from "next/image"
import { Movie } from "../typings"
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'

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


  return (
    <div>
       <Image 
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        layout="fle"
        />
    </div>
  )
 }


export default Banner