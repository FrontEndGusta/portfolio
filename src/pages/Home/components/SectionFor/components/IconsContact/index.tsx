import React from 'react';
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedinSquare } from 'react-icons/bi';
import { ContactContainer } from './styles';

const iconsArray: React.ReactNode[] = [
  <BiLogoGithub />,
  <BiLogoGmail />,
  <BiLogoLinkedinSquare />,
];

const IconsContact: React.FC = () => {
  return (
    <ContactContainer>
      {iconsArray.map((icon, index) => (
        <button key={index} className="btn">
          <div className="icon">{icon}</div>
        </button>
      ))}
    </ContactContainer>
  );
};

export default IconsContact;
