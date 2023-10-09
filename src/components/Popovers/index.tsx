import React, { useState } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { PopoversContainer } from "./styles";
import ione from "../../assets/popovers/1.jpg";
import itwo from "../../assets/popovers/2.jpg";
import itree from "../../assets/popovers/3.jpg";
import ifor from "../../assets/popovers/4.jpg";
import ifive from "../../assets/popovers/4.jpg";
import avatar from "../../assets/popovers/avatar.webp";
import Modal from "../Modal";

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
        <div className="popover">
          <img src={avatar} alt="" />
          <div className="menu">
            <header>
              <img src={avatar} alt="" />
              <div>
                <h2>Gustavo Silva</h2>
                <h3>São Paulo, Cajamar</h3>
              </div>
            </header>
            <div className="images">
              <img src={ione} alt="" />
              <img src={itwo} alt="" />
              <img src={itree} alt="" />
              <img src={ifor} alt="" />
              <img src={ifive} alt="" />
            </div>
          </div>
        </div>
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
              <div>
                <input type="text" placeholder="Input 1" />
                <input type="text" placeholder="Input 2" />
                <input type="text" placeholder="Input 3" />
              </div>
            )
          }
        >
          <BiHeart />
        </button>
      </nav>
      {isModalOpen && ( // Verifica se o modal deve ser exibido
        <Modal title={modalTitle} closeModal={closeModal}>
          <p>{modalChildren}</p>
        </Modal>
      )}
    </PopoversContainer>
  );
};

export default Popovers;
