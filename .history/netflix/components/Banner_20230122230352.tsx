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
    <><div className="absolute top-0 left-0 h-[95vh] w-screen">
      <Image
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        layout="fill"
        objectFit="cover" />
    </div>
    <h1></h1></>
    
    
  )
 }


export default Banner