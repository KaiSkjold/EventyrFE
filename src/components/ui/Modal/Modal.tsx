import Xmark from "../../Svg/Xmark";
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    }) => {
        if (!isOpen) return null;

        const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        };
    return (
    <div className="modal-background" onClick={handleCloseClick}>
        <div className="modal-content">
            <div onClick={(e) => e.stopPropagation()}>
                <div className="modal-closeButton" onClick={onClose}>
                    <Xmark width={20} height={20}/>
                </div>
                <div className="modal-childrenContainer">
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal