import React, { useRef } from "react";
import Header from "./components/Header";
import Popovers from "../../components/Popovers";
import Progress from "../../components/Progress";
import ScrollToTop from "../../components/ScrollToTop";
import SectionFor from "./components/SectionFor";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

const Home = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);

  return (
    <>
      <ScrollToTop sectionOneRef={sectionOneRef} />
      <Header
        toggleTheme={toggleTheme}
        sectionOneRef={sectionOneRef}
        sectionTwoRef={sectionTwoRef}
        sectionThreeRef={sectionThreeRef}
      />
      <SectionOne sectionOneRef={sectionOneRef} sectionTwoRef={sectionTwoRef} />
      <SectionTwo sectionTwoRef={sectionTwoRef} />
      <SectionThree sectionThreeRef={sectionThreeRef} />
      <SectionFor />
      <Popovers />
      <Progress />
    </>
  );
};

export default Home;
