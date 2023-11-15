import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Header from "./components/Header";
import usePersistedState from "./utils/usePersistedState";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import { useRef } from "react";
import SectionThree from "./components/SectionThree";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import ScrollToTop from "./components/ScrollToTop";
import SectionFor from "./components/SectionFor";
import HamsterWheel from "./components/HamsterWheel";

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <ScrollToTop sectionOneRef={sectionOneRef} />
        <Header
          toggleTheme={toggleTheme}
          sectionOneRef={sectionOneRef}
          sectionTwoRef={sectionTwoRef}
          sectionThreeRef={sectionThreeRef}
        />
        <SectionOne
          sectionOneRef={sectionOneRef}
          sectionTwoRef={sectionTwoRef}
        />
        <SectionTwo sectionTwoRef={sectionTwoRef} />
        <SectionThree sectionThreeRef={sectionThreeRef} />
        <SectionFor />
        <Popovers />
        <Progress />
      </div>
    </ThemeProvider>
  );
};

export default App;
