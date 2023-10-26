import React, { useState } from "react";
import { SessionTwoContainer } from "./styles";
import image1 from "../../assets/avatar.jpeg";
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
import Card from "../Card";
import ModalVideo from "../Modal-2";
import Carousel from "../Carousel";
import Carousel3D from "../Carousel";
import Carouselteste from "../IconSlider";
import IconSlider from "../IconSlider";
interface SectionTwoProps {
  sectionTwoRef: React.RefObject<HTMLDivElement>; // Defina a propriedade sectionTwoRef corretamente
}

const SectionTwo: React.FC<SectionTwoProps> = ({ sectionTwoRef }) => {
  const icons = [<BiLogoJavascript />, <BiLogoHtml5 />, <BiLogoCss3 />];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <SessionTwoContainer ref={sectionTwoRef}>
        <section className="about">
          <div className="containerAbout">
          <div className="tecnologies">
            <h2>Sobre mim</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis reiciendis, perspiciatis quod laboriosam quas consectetur amet, vitae facilis possimus recusandae accusamus quibusdam perferendis ex. Illo unde totam mollitia eos.</p>
          </div>
          <div className="carrousel">
            <h2>Habilidades</h2>
            {/* <Carousel3D images={[]}/> */}
            <IconSlider/>
          </div>
          </div>
          <h2>Experiências</h2>
          <div className="containerCards">
            <Card
              title="Portal Minha Senha"
              imageUrl={image1}
              info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident at perferendis, minima impedit accusamus quod quaerat, quibusdam laboriosam magni culpa nulla facilis eveniet dicta, quos dolorem nesciunt nostrum a eligendi."
              icons={icons}
              onViewMoreClick={openModal}
            />
          </div>
          <div></div>
        </section>
      </SessionTwoContainer>
      <ModalVideo
        title="Título do Vídeo"
        description="Descrição do Vídeo"
        videoUrl="https://www.youtube.com/embed/SEZNJp3otzg"
        closeModal={closeModal}
        isOpen={isModalOpen} // Passa o estado para o ModalVideo
      />
    </>
  );
};

export default SectionTwo;
