import useIntersectionObserver from "utils/useIntersectionObserver";
import { SectionTwoPropsReturn } from "./useSectionOne.types";
import { RefObject } from "react";
import useDownload from "services/useDownload";
import useContactClick from "services/useContact";
import { useSectionContext } from "../../../../../context/contentSections/SectionContext";

const useSectionOne = () => {

  const { sectionOneRef } = useSectionContext();
  const isBannerVisible = useIntersectionObserver(sectionOneRef);

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const { handleContactClick } = useContactClick();

  const { downloadFile } = useDownload();
  const cv = "/../../../../../documents/cv.pdf";

  const handleDownloadClick = () => {
    downloadFile(cv);
  };

  return {
    isBannerVisible,
    scrollToSection,
    handleDownloadClick,
    handleContactClick,
  };
};
export default useSectionOne;
