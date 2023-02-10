import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom."

function Modal() {

const [showModal, setShowModal] = useRecoilState(modalState)
const handleClose = () => {
    set
}
  return (
    <div>Modal</div>
  )
}

export default Modal