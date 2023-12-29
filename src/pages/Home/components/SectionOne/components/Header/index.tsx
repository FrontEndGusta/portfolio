import React, { RefObject, useContext, useRef, useState } from "react";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
import ThemeSwitch from "../../../../../../components/Switch";
import useHeader from "./hooks/useHeader";
import { useHeaderReturn } from "./hooks/useHeader.types";

const Header: React.FC<useHeaderReturn> = ({
  toggleTheme,
  sectionOneRef,
  sectionTwoRef,
  sectionThreeRef,
  sectionForRef,
}) => {
  const theme = useContext(ThemeContext);

  const { menuOpen, toggleMenu, scrollToSection } = useHeader();

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
