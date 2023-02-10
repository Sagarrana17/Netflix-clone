import { useRecoilState } from "recoil"

function Modal() {

const [showModal, setShowModal] = useRecoilState(modal)
  return (
    <div>Modal</div>
  )
}

export default Modal