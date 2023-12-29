import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";
import Home from "./pages/Home";
import { ToastProvider } from "components/Toast/useToastContext";
import { SectionProvider } from "context/contentSections/SectionContext";

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <SectionProvider>
      <ToastProvider>
      <div className="App">
        <GlobalStyle />
        <Home toggleTheme={toggleTheme} />
      </div>
      </ToastProvider>
      </SectionProvider>
    </ThemeProvider>
  );
};

export default App;
