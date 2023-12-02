import React, { useState, useEffect } from "react";
import { BiSolidXCircle } from "react-icons/bi";
import {
  ModalVideoContainer,
  ModalContent,
  VideoContainer,
  ButtonContainer,
} from "./styles";
import CarrouselTwo from "components/CarrouselTwo";
interface CarouselItemProps {
  icon: string
}
interface ModalProps {
  title: string;
  description: string;
  images: { icon: string }[];
  closeModal: () => void;
  isOpen: boolean;
}

export const ModalVideo: React.FC<ModalProps> = ({
  title,
  description,
  images,
  closeModal,
  isOpen,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {isModalOpen && (
        <ModalVideoContainer>
          <ModalContent>
            <div className="titleModal">
            <h2>{title}</h2>
            </div>
            <VideoContainer>
              <span className="close" onClick={closeModal}>
                <BiSolidXCircle />
              </span>
              <div className="description">
                <div className="carrousel">
                 <CarrouselTwo items={images} />
                </div>
                <div className="textDescription">
                  <p>{description}</p>
                </div>
              </div>
            </VideoContainer>
            <ButtonContainer>
              <button>Acessar Projeto</button>
              <button>Acessar Repositório</button>
              <button>Acessar LinkedIn</button>
            </ButtonContainer>
          </ModalContent>
        </ModalVideoContainer>
      )}
    </>
  );
};

export default ModalVideo;
