import React from "react";
import HamsterWheel from "components/HamsterWheel";
import {
  BiChevronRight,
  BiChevronLeft,
  BiLogoJavascript,
  BiLogoGithub,
  BiLogoTypescript,
} from "react-icons/bi";
import image1 from "../assets/avatar.jpeg";
import image2 from "../assets/projects/portalMinhaSenha.png";
interface IComponents {
  projects: React.ReactNode;
  icons: {
    [key: string]: React.ReactNode[];
  };
  imagesModais: {
    [key: string]: string[];
  };
}

const components: IComponents = {
  projects: <HamsterWheel />,
  icons: {
    icons1: [<BiChevronRight />, <BiChevronLeft />],
    icons2: [<BiLogoJavascript />, <BiLogoTypescript />],
  },
  imagesModais: {
    modalOne: [image1, image2],
  },
};

export default components;
