import React, { useState, useEffect } from "react";
import { BiSolidXCircle } from "react-icons/bi";
import {
  ModalVideoContainer,
  ModalContent,
  VideoContainer,
  ButtonContainer,
} from "./styles";
import CarrouselTwo from "components/Carrousel";
import { Link } from "react-router-dom";
interface ModalProps {
  title: string;
  description: string;
  images: { icon: string }[];
  projectLink?: string;
  repositoryLink?: string;
  LinkedInLink?: string;
  closeModal: () => void;
  isOpen: boolean;
}

export const ModalVideo: React.FC<ModalProps> = ({
  title,
  description,
  images,
  projectLink,
  repositoryLink,
  LinkedInLink,
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
            <VideoContainer>
              <span className="close" onClick={closeModal}>
                <BiSolidXCircle />
              </span>
              <div className="description">
                <div className="carrousel">
                  <CarrouselTwo items={images} />
                </div>
                <div className="textDescription">
                  <div className="titleModal">
                    <h2>{title}</h2>
                  </div>
                  <p>{description}</p>
                </div>
              </div>
            </VideoContainer>
            <ButtonContainer>
              <Link className="linkTo" target="_blank" to={projectLink || ""}>
                Acessar Projeto
              </Link>
              {repositoryLink !== "" && (
                <Link
                  className="linkTo"
                  target="_blank"
                  to={repositoryLink || ""}
                >
                  Acessar Repositório
                </Link>
              )}
              <Link className="linkTo" target="_blank" to={LinkedInLink || ""}>
                Acessar LinkedIn
              </Link>
            </ButtonContainer>
          </ModalContent>
        </ModalVideoContainer>
      )}
    </>
  );
};

export default ModalVideo;
