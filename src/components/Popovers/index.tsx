import React, { useState } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import {
  BiHeart,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoGmail,
} from "react-icons/bi";
import { PopoversContainer } from "./styles";
import ione from "../../assets/popovers/1.jpg";
import Modal from "../ModalPopovers";

export const Popovers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Título do Modal");
  const [modalChildren, setModalChildren] = useState<React.ReactNode | null>(
    null
  );

  const openModal = (title: string, children: React.ReactNode) => {
    setModalTitle(title);
    setModalChildren(children);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Função para fechar o modal
  };
  return (
    <PopoversContainer>
      <nav className="nav">
        <button
          className="btn-bubble"
          data-tooltip="chat_bubble"
          onClick={() => openModal("Título do Chat", <p>Conteúdo do Chat</p>)}
        >
          <BiMessageSquareDetail />
        </button>
        <button
          className="btn-favorite"
          data-tooltip="favorite"
          onClick={() =>
            openModal(
              "Título do Favorito",
              <div className="containerIcons">
                <div className="imageCard">
                  <img src='#' alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  unde architecto consequuntur hic! Dolores consequatur
                  laboriosam beatae, dolorem ab nostrum fuga illum ratione
                  porro? Eveniet quos quae a ipsa maiores.
                </p>
                <div className="icons">
                  <BiLogoLinkedinSquare />
                  <BiLogoGithub href="" />
                  <BiLogoGmail />
                </div>
              </div>
            )
          }
        >
          <BiHeart />
        </button>
      </nav>
      {isModalOpen && ( // Verifica se o modal deve ser exibido
        <Modal title={modalTitle} closeModal={closeModal}>
         {modalChildren}
        </Modal>
      )}
    </PopoversContainer>
  );
};

export default Popovers;
