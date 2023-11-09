import React from "react";
import "./styles";
import {
  BiLogoJavascript,
  BiLogoGithub,
  BiLogoTypescript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
} from "react-icons/bi";
import { SiStyledcomponents, SiPostman } from "react-icons/si";
import image1 from "../../assets/avatar.jpeg";
import { ContainerTeste } from "./styles";

const imageSources = [
  { icon: <BiLogoJavascript />, name: "JavaScript" },
  { icon: <BiLogoGithub />, name: "GitHub" },
  { icon: <BiLogoTypescript />, name: "TypeScript" },
  { icon: <BiLogoHtml5 />, name: "HTML" },
  { icon: <BiLogoCss3 />, name: "CSS3" },
  { icon: <SiStyledcomponents />, name: "Styled-Components" },
  { icon: <BiLogoReact />, name: "React" },
  { icon: <SiPostman />, name: "Postman" },
];

const IconSlider: React.FC = () => {
  return (
    <>
      <ContainerTeste>
        <div className="logos">
          <div className="logos-slide">
            {imageSources.map((item, index) => (
              <div className="slides" key={index}>
                {typeof item.icon === "string" ? (
                  <img
                    src={item.icon}
                    alt={`Slide ${index}`}
                    className="carousel-image"
                  />
                ) : (
                  item.icon // Render React elements directly
                )}
                <div className="technology-name">{item.name}</div>
              </div>
            ))}
          </div>
          <div className="logos-slide">
            {imageSources.map((item, index) => (
              <div className="slides" key={index}>
                {typeof item.icon === "string" ? (
                  <img
                    src={item.icon}
                    alt={`Slide ${index}`}
                    className="carousel-image"
                  />
                ) : (
                  item.icon // Render React elements directly
                )}
                <div className="technology-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </ContainerTeste>
    </>
  );
};

export default IconSlider;
