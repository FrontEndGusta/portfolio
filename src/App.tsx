import {ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './components/Header';
import usePersistedState from './utils/usePersistedState';
import Popovers from './components/Popovers';
import Progress from './components/Progress';
import PageOne from './pages/PageOne';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
      <PageOne/>
      <Popovers />
      <Progress />
    </div>
    </ThemeProvider>
  );
}

export default App;
