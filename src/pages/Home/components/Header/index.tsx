import React, { RefObject, useContext, useRef, useState } from "react";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
import ThemeSwitch from "../../../../components/Switch";
interface Props {
  toggleTheme(): void;
  sectionOneRef: RefObject<HTMLElement>;
  sectionTwoRef: RefObject<HTMLElement>;
  sectionThreeRef: RefObject<HTMLElement>;
  sectionForRef: RefObject<HTMLElement>;
}
const Header: React.FC<Props> = ({
  toggleTheme,
  sectionOneRef,
  sectionTwoRef,
  sectionThreeRef,
  sectionForRef,
}) => {
  const theme = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <Container>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className="menu-items">
            <li onClick={() => scrollToSection(sectionOneRef)}>Início</li>
            <li onClick={() => scrollToSection(sectionTwoRef)}>Sobre mim</li>
            <li onClick={() => scrollToSection(sectionThreeRef)}>Projetos</li>
            <li onClick={() => scrollToSection(sectionForRef)}>Contato</li>
          </ul>
        </div>
        <div className="portfolio">
          <p>&lsaquo;Portfolio &frasl;&rsaquo;</p>
        </div>
        <div className="switch">
          <ul>
            <li onClick={() => scrollToSection(sectionOneRef)}>Início</li>
            <li onClick={() => scrollToSection(sectionTwoRef)}>Sobre mim</li>
            <li onClick={() => scrollToSection(sectionThreeRef)}>Projetos</li>
            <li onClick={() => scrollToSection(sectionForRef)}>Contato</li>
          </ul>
          <ThemeSwitch toggleTheme={toggleTheme} />
        </div>
      </Container>
    </>
  );
};

export default Header;
