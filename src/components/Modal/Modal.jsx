import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalPopup } from './Modal.styled';

export const Modal = ({ onClose }) => {
    useEffect(() => {
        const handleKeydown = event => {
            if (event.code === 'Escape') {
                onClose();
            };
        };

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    }, [onClose]);

    const handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    const modalRoot = document.querySelector('#modal-root');
    
    return createPortal(
        <Backdrop onClick={handleOverlayClick}>
            <ModalPopup>
                <span>modal kukusiki</span>
            </ModalPopup>
        </Backdrop>,
        modalRoot,
    );
};
