import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-orange-500 focus:outline-none"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
