import { useRecoilState } from "recoil"

function Modal() {

const [showModal, setShowModal] = useRecoilState
  return (
    <div>Modal</div>
  )
}

export default Modal