import Settings from "../Settings/Settings"
import Modal from "../ui/Modal/Modal"

type SettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Settings />
    </Modal>
  )
}

export default SettingsModal