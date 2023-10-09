import React, { useState, useEffect } from 'react';
import {BiSolidXCircle} from 'react-icons/bi'
import { ModalVideoContainer, ModalContent, VideoContainer, ButtonContainer } from './styles';

interface ModalProps {
  title: string;
  description: string;
  videoUrl: string;
  closeModal: () => void;
  isOpen: boolean;
}

export const ModalVideo: React.FC<ModalProps> = ({ title, description, videoUrl, closeModal, isOpen }) => {
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
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                allowFullScreen
              ></iframe>
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
