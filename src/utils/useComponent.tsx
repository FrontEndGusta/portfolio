import React from "react";
import HamsterWheel from "components/HamsterWheel";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoMongodb,
} from "react-icons/bi";

import { TbBrandNextjs } from "react-icons/tb";
import { SiMongoose } from "react-icons/si";

import portal1 from "../assets/projects/Portal-Minha-Senha/portal1.png";
import portal2 from "../assets/projects/Portal-Minha-Senha/portal2.png";
import portal3 from "../assets/projects/Portal-Minha-Senha/portal3.png";
import portal4 from "../assets/projects/Portal-Minha-Senha/portal4.png";

import meet1 from "../assets/projects/Page-Meet/meet1.png";
import meet2 from "../assets/projects/Page-Meet/meet2.png";
import meet3 from "../assets/projects/Page-Meet/meet3.png";

import secretWord1 from "../assets/projects/Secret-Word/secret1.png";
import secretWord2 from "../assets/projects/Secret-Word/secret2.png";
import secretWord3 from "../assets/projects/Secret-Word/secret3.png";

import login1 from "../assets/projects/Page-Login/login1.png";
import login2 from "../assets/projects/Page-Login/login2.png";
import login3 from "../assets/projects/Page-Login/login3.png";

import projetosons1 from "../assets/projects/Page-Projetosons/cadastro.png";
import projetosons2 from "../assets/projects/Page-Projetosons/login.png";
import projetosons3 from "../assets/projects/Page-Projetosons/recuperar senha.png";
import projetosons4 from "../assets/projects/Page-Projetosons/input-otp.png";
import projetosons5 from "../assets/projects/Page-Projetosons/nova-senha.png";
import projetosons6 from "../assets/projects/Page-Projetosons/home.png";
import projetosons7 from "../assets/projects/Page-Projetosons/perfil.png";

import { MdOutlineNetworkWifi1Bar } from "react-icons/md";
//tipagem para os componentes
interface IComponents {
  customComponent: {
    [key: string]: React.ReactNode;
  };
  icons: {
    [key: string]: React.ReactNode[];
  };
  imagesCards: {
    [key: string]: string;
  };
  imagesModais: {
    [key: string]: { icon: string }[];
  };
}

const components: IComponents = {
  //componente para projetos em andamento
  customComponent: { customComponentKey: <HamsterWheel /> },
  //icones para definir as tecnologias utilizadas em cada projeto
  icons: {
    icons1: [<BiLogoJavascript />, <BiLogoHtml5 />, <BiLogoCss3 />],
    icons2: [<BiLogoHtml5 />, <BiLogoCss3 />],
    icons3: [<BiLogoReact />, <BiLogoJavascript />, <BiLogoCss3 />],
    icons4: [
      <BiLogoTypescript />,
      <TbBrandNextjs />,
      <BiLogoTailwindCss />,
      <BiLogoReact />,
      <SiMongoose />,
      <BiLogoMongodb />,
    ],
  },
  //imagens dos projetos nos respectivos cards
  imagesCards: {
    cardOne: portal1,
    cardTwo: meet1,
    cardThree: secretWord1,
    cardFor: login1,
    cardFive: projetosons1,
  },
  //imagens dos projetos nos respectivos modais
  imagesModais: {
    modalOne: [
      {
        icon: portal1,
      },
      {
        icon: portal2,
      },
      {
        icon: portal3,
      },
      {
        icon: portal4,
      },
    ],
    modalTwo: [
      {
        icon: meet1,
      },
      {
        icon: meet2,
      },
      {
        icon: meet3,
      },
    ],
    modalThree: [
      {
        icon: secretWord1,
      },
      {
        icon: secretWord2,
      },
      {
        icon: secretWord3,
      },
    ],
    modalFor: [
      {
        icon: login1,
      },
      {
        icon: login2,
      },
      {
        icon: login3,
      },
    ],
    modalFive: [
      {
        icon: projetosons1,
      },
      {
        icon: projetosons2,
      },
      {
        icon: projetosons3,
      },
      {
        icon: projetosons4,
      },
      {
        icon: projetosons5,
      },
      {
        icon: projetosons6,
      },
      {
        icon: projetosons7,
      },
    ],
  },
};

export default components;
