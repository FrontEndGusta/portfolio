import React from "react";
import { ContainerCarouselTwo } from "./styles";
import image1 from "../../assets/Carousel/1.svg";
import image2 from "../../assets/Carousel/2.svg";
import image3 from "../../assets/Carousel/3.svg";
import image4 from "../../assets/Carousel/4.svg";
import image5 from "../../assets/Carousel/5.svg";
import image6 from "../../assets/Carousel/6.svg";
import image7 from "../../assets/Carousel/7.svg";
const CarouselTwo: React.FC = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const numImagesToShow = images.length; // Define o número de imagens para mostrar
  return (
    <>
      <ContainerCarouselTwo>
        <div className="containerSkills">
          <div className="skills">
            <h2>My Skills | Tecnologias</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              corrupti quisquam minus quia eaque, voluptas illo laborum hic
              laboriosam ducimus, perspiciatis sunt, rem cumque dignissimos vel
              aperiam? A, modi alias.
            </p>
          </div>
          <div className="box">
            {images.slice(0, numImagesToShow).map((image, index) => (
              <span
                key={index}
                style={{ "--i": index + 1 } as React.CSSProperties}
              >
                <img src={image} alt="" />
                {index === 3 ? (
                  <div className="image4-overlay"></div>
                ) : null}
                <img className={`filtered-image ${index === 5 ? "image6" : ""}`} src={image} alt="" />

              </span>
            ))}
          </div>
        </div>
      </ContainerCarouselTwo>
    </>
  );
};

export default CarouselTwo;
