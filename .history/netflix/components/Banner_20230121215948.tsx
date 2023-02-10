import Image from "next/image"
import { Movie } from "../typings"
import sta

interface Props{
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
    const [showModal, setShowModal] = useRecoilState(modalState)
  
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