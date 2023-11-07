import React, { useContext, useState } from "react";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
import ThemeSwitch from "../Switch";
import Progress from "../Progress";
interface Props {
  toggleTheme(): void;
}
const Header: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <li>Contact</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="portfolio">
          <p>&lsaquo;Portfolio	&frasl;&rsaquo;</p>
        </div>
        <div className="switch">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ThemeSwitch toggleTheme={toggleTheme} />
        </div>
      </Container>
    </>
  );
};

export default Header;
