import React, { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import ThemeSwitch from '../Switch';
import Progress from '../Progress';
interface Props {
  toggleTheme(): void;
}
const Header: React.FC<Props> = ({toggleTheme}) => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <p>About</p>
      <h2>Portfólio</h2>
      <ThemeSwitch toggleTheme={toggleTheme}/>

    </Container>
  );
};

export default Header;
