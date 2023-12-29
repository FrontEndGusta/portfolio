import React from "react";
import { ContactContainer } from "./styles";
import { Link } from "react-router-dom";
import useIconsContact from "./hooks/useIconsContact";

const IconsContact: React.FC = () => {

  const { iconsArray } = useIconsContact();

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
