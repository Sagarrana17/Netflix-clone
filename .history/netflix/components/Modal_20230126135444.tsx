import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom."
import MuiModal from '@mui/material/Modal'
import { Xicon } from '@'

function Modal() {

const [showModal, setShowModal] = useRecoilState(modalState)
const handleClose = () => {
    setShowModal(false)
}
  return (
    <MuiModal open={showModal} onClose={handleClose}>
    <>
        <button>
            <Xicon className="h-6 w-6" />
        </button>
    </>
    </MuiModal>
  )
}

export default Modal