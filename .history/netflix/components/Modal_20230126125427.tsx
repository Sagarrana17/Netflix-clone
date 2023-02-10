import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom."
import MuiModal from '@mui/material'

function Modal() {

const [showModal, setShowModal] = useRecoilState(modalState)
const handleClose = () => {
    setShowModal(false)
}
  return (
    <MuiModal open={showModal} onClose={handleClose}>
    <>Modal</>
    </MuiModal>
  )
}

export default Modal