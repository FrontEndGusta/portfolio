import React, { useState } from 'react';
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './components/Header';
import usePersistedState from './utils/usePersistedState';
import TypeWriter from './components/TypeWriter';
import SectionOne from './components/SectionOne';
import Popovers from './components/Popovers';
import SectionTwo from './components/SectionTwo';
import Progress from './components/Progress';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light)


  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle />
      <Progress />
      <Header toggleTheme={toggleTheme}/>
      <SectionOne />
      <SectionTwo/>
      <Popovers />
    </div>
    </ThemeProvider>
  );
}

export default App;
