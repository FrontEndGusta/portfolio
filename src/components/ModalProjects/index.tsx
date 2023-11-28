import React, { useState, useEffect } from 'react';
import {BiSolidXCircle} from 'react-icons/bi'
import { ModalVideoContainer, ModalContent, VideoContainer, ButtonContainer } from './styles';
import Carousel from 'components/Carousel';

interface ModalProps {
  title: string;
  description: string;
  images: string[];
  closeModal: () => void;
  isOpen: boolean;
}

export const ModalVideo: React.FC<ModalProps> = ({ title, description, images, closeModal, isOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {isModalOpen && (
        <ModalVideoContainer>
          <ModalContent>
            <h2>{title}</h2>
            <VideoContainer>
                <div className="videoIframe">
              <Carousel images={images} />
              <span className='close'onClick={closeModal}><BiSolidXCircle/></span>
              </div>
              <div className="description">
              <p>{description}</p>
              </div>
            </VideoContainer>
            <ButtonContainer>
              <button>Botão 1</button>
              <button>Botão 2</button>
              <button>Botão 3</button>
            </ButtonContainer>
          </ModalContent>
        </ModalVideoContainer>
      )}
    </>
  );
};

export default ModalVideo;
