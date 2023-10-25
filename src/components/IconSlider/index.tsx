import React from "react";
import "./styles";
import {
  BiChevronRight,
  BiChevronLeft,
  BiLogoJavascript,
  BiLogoGithub,
  BiLogoTypescript,
} from "react-icons/bi";
import image1 from "../../assets/avatar.jpeg";
import { ContainerTeste } from "./styles";

// Import other images as needed

const imageSources = [<BiLogoJavascript />, <BiLogoGithub />, <BiLogoTypescript />, <BiLogoJavascript />, <BiLogoGithub />, <BiLogoTypescript />, <BiLogoTypescript />];

const IconSlider: React.FC = () => {
  return (
    <>
      <ContainerTeste>
      <div className="logos">
        <div className="logos-slide">
          {imageSources.map((image, index) => (
            typeof image === "string" ? (
              <img
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            ) : (
              image // Render React elements directly
            )
          ))}
        </div>
        <div className="logos-slide">
          {imageSources.map((image, index) => (
            typeof image === "string" ? (
              <img
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            ) : (
              image // Render React elements directly
            )
          ))}
        </div>
      </div>
    </ContainerTeste>
    </>
  );
};

export default IconSlider;
