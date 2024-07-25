// src/components/Modal.tsx
import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, src, alt }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal if the click is on the overlay, not inside the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="relative w-[350px] h-[450px] bg-black p-2 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="object-contain max-w-full max-h-full"
        />
      </div>
    </div>,
    document.body
  );
};

export default Modal;
