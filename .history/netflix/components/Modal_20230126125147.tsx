import { useRecoilState } from "recoil"

function Modal() {

const [showModal, setShowModal] = useRecoilState(moa)
  return (
    <div>Modal</div>
  )
}

export default Modal