import { Movie } from "../typings"
import <Image></Image>

interface Props{
    movie:Movie
}

function Thumbnail({movie}: Props) {
  return (
    <div>
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