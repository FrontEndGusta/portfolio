import React from "react";
import HamsterWheel from "components/HamsterWheel";
import {
  BiChevronRight,
  BiChevronLeft,
  BiLogoJavascript,
  BiLogoGithub,
  BiLogoTypescript,
} from "react-icons/bi";

interface IComponents {
  projects: React.ReactNode;
  icons: {
    [key: string]: React.ReactNode[];
  };
}

const components: IComponents = {
  projects: <HamsterWheel />,
  icons:{
  icons1: [<BiChevronRight />, <BiChevronLeft />],
  icons2: [<BiLogoJavascript />, <BiLogoTypescript />],
  },
};

export default components;
