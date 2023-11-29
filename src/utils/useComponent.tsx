import React from "react";
import HamsterWheel from "components/HamsterWheel";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoTypescript,
} from "react-icons/bi";
import portal1 from "../assets/projects/Portal-Minha-Senha/minhasenha.cea.com.br_ (5).png";
import portal2 from "../assets/projects/Portal-Minha-Senha/minhasenha.cea.com.br_ (1).png";
import portal3 from "../assets/projects/Portal-Minha-Senha/minhasenha.cea.com.br_ (2).png";
import portal4 from "../assets/projects/Portal-Minha-Senha/minhasenha.cea.com.br_ (3).png";
import meet1 from "../assets/projects/page-meet/landing-page-lime-mu-82.vercel.app_ (5).png";
import meet2 from "../assets/projects/page-meet/landing-page-lime-mu-82.vercel.app_ (6).png";
import meet3 from "../assets/projects/page-meet/landing-page-lime-mu-82.vercel.app_ (7).png";
//tipagem para os componentes
interface IComponents {
  projects: React.ReactNode;
  icons: {
    [key: string]: React.ReactNode[];
  };
  imagesCards: {
    [key: string]: string;
  };
  imagesModais: {
    [key: string]: string[];
  };
}

const components: IComponents = {
  //componente para projetos em andamento
  projects: <HamsterWheel />,
  //icones para definir as tecnologias utilizadas em cada projeto
  icons: {
    icons1: [<BiLogoJavascript />, <BiLogoHtml5 />, <BiLogoCss3 />],
    icons2: [<BiLogoJavascript />, <BiLogoTypescript />],
  },
  //imagens dos projetos nos respectivos cards
  imagesCards: {
    cardOne: portal1,
    cardTwo: meet1,
  },
  //imagens dos projetos nos respectivos modais
  imagesModais: {
    modalOne: [portal1, portal2, portal3, portal4],
    modalTwo: [meet1, meet2, meet3],
  },
};

export default components;
