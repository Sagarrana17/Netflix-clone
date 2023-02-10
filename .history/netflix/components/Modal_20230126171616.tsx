import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom."
import MuiModal from '@mui/material/Modal'
import { XIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { Movie } from "../typings"

function Modal() {

const [showModal, setShowModal] = useRecoilState(modalState)
const [showModal, setShowModal] = useRecoilState(modalState)

    useEffect(() => {
        if(!movie) return

        async function fetchMovie() {
            const data = await fetch(
              `https://api.themoviedb.org/3/${
                movie?.media_type === 'tv' ? 'tv' : 'movie'
              }/${movie?.id}?api_key=${
                process.env.NEXT_PUBLIC_API_KEY
              }&language=en-US&append_to_response=videos`
            )
            }
    }, [])

const handleClose = () => {
    setShowModal(false)
}
  return (
    <MuiModal open={showModal} onClose={handleClose}>
    <>
        <button onClick={handleClose}
         className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]">
            <XIcon className="h-6 w-6" />
        </button>
    </>
    </MuiModal>
  )
}

export default Modal