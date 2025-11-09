import Settings from "../Settings/Settings"
import Button from "../ui/Button/Button";
import Modal from "../ui/Modal/Modal"

type SettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Settings />
      <Button onClick={onClose}>Luk indstillinger</Button>
    </Modal>
  )
}

export default SettingsModal