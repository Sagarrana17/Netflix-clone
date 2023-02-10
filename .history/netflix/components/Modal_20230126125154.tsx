import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom."

function Modal() {

const [showModal, setShowModal] = useRecoilState(modalState)
  return (
    <div>Modal</div>
  )
}

export default Modal