import React from "react";
import HamsterWheel from "components/HamsterWheel";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoTypescript,
  BiLogoReact,
} from "react-icons/bi";

import portal1 from "../assets/projects/Portal-Minha-Senha/minhasenha.cea.com.br_ (5).png";
import portal2 from "../assets/projects/Portal-Minha-Senha/minhasenha.cea.com.br_ (1).png";
import portal3 from "../assets/projects/Portal-Minha-Senha/minhasenha.cea.com.br_ (2).png";
import portal4 from "../assets/projects/Portal-Minha-Senha/minhasenha.cea.com.br_ (3).png";

import meet1 from "../assets/projects/Page-Meet/landing-page-lime-mu-82.vercel.app_ (5).png";
import meet2 from "../assets/projects/Page-Meet/landing-page-lime-mu-82.vercel.app_ (6).png";
import meet3 from "../assets/projects/Page-Meet/landing-page-lime-mu-82.vercel.app_ (7).png";

import secretWord1 from '../assets/projects/Secret-Word/game-secret-word-sable.vercel.app_ (2).png'
import secretWord2 from '../assets/projects/Secret-Word/game-secret-word-sable.vercel.app_ (1).png'
import secretWord3 from '../assets/projects/Secret-Word/game-secret-word-sable.vercel.app_.png'


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
    icons2: [<BiLogoHtml5 />, <BiLogoCss3  />],
    icons3: [<BiLogoReact/>, <BiLogoJavascript/>, <BiLogoCss3 />]
  },
  //imagens dos projetos nos respectivos cards
  imagesCards: {
    cardOne: portal1,
    cardTwo: meet1,
    cardThree: secretWord1
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
  },
};

export default components;
