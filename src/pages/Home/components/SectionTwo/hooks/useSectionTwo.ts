import { useSectionContext } from "context/contentSections/SectionContext";
import useApi from "services/useApi";
import useIntersectionObserver from "utils/useIntersectionObserver";
import { AboutData } from "./useSectionTwo.types";

const useSectionTwo = () => {
  const { sectionTwoRef } = useSectionContext();

  const technologies = [
    { name: "React", width: 80 },
    { name: "Javascript", width: 70 },
    { name: "Typescript", width: 80 },
    { name: "Git", width: 70 },
    { name: "Styled-Components", width: 85 },
    // Adicione quantas tecnologias desejar
  ];
  const { data, isLoading } = useApi<AboutData>("/sectionTwo");
  const isAboutVisible = useIntersectionObserver(sectionTwoRef);
  return {
    technologies,
    isAboutVisible,
    sectionTwoRef,
    data,
    isLoading
  };
};

export default useSectionTwo;
