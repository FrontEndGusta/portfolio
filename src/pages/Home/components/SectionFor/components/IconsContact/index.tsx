import React from "react";
import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { ContactContainer } from "./styles";
import { Link } from "react-router-dom";

const iconsArray: { icon: React.ReactNode; to: string }[] = [
  { icon: <BiLogoGithub />, to: "https://github.com/FrontEndGusta" },
  { icon: <BiLogoGmail />, to: "mailto:gustavo.lima1307@gmail.com" },
  {
    icon: <BiLogoLinkedinSquare />,
    to: "https://www.linkedin.com/in/gustavo-silva-37453a144?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const IconsContact: React.FC = () => {
  return (
    <ContactContainer>
      {iconsArray.map(({ icon, to }, index) => (
        <Link key={index} to={to} target="_blank" className="btn">
          <div className="icon">{icon}</div>
        </Link>
      ))}
    </ContactContainer>
  );
};

export default IconsContact;
