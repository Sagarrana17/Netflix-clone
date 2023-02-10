import { Movie } from "../typings"
import Image from 'next/image'

interface Props{
    movie:Movie
}

function Thumbnail({movie}: Props) {
  return (
    <div className=""
        <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail