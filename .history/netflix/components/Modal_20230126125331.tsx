import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom."

function Modal() {

const [showModal, setShowModal] = useRecoilState(modalState)
const handleClose = () => {
    setShowModal(false)
}
  return (
    <MuiModal open={showModal} onClose={handleClose}
  )
}

export default Modal