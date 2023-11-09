import React from "react";
import { ModalContainer } from "./styles";
import {BiSolidXCircle} from 'react-icons/bi'

interface ModalProps {
  title: string;
  children: React.ReactNode;
  closeModal: () => void; // Adicione a propriedade closeModal
}

const Modal: React.FC<ModalProps> = ({ title, children, closeModal }) => {
  return (
    <ModalContainer>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{title}</h2>
            <span className="close-button" onClick={closeModal}>
              <BiSolidXCircle />
            </span>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
