import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom."
import MuiModal from '@mui/material/Modal'
import { XIcon } from '@heroicons/react/outline'
import { useEffec}

function Modal() {

const [showModal, setShowModal] = useRecoilState(modalState)

    useEffect(() => {
        if(!movie) return
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