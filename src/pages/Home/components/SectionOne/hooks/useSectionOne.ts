import useIntersectionObserver from "utils/useIntersectionObserver";
import { RefObject } from "react";
import useDownload from "services/useDownload";
import useContactClick from "services/useContact";
import { useSectionContext } from "context/contentSections/SectionContext";
import useApi from "services/useApi";
import { AboutData } from "pages/Home/components/SectionTwo/hooks/useSectionTwo.types";
const useSectionOne = () => {
  const { sectionOneRef } = useSectionContext();
  const isBannerVisible = useIntersectionObserver(sectionOneRef);

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const { handleContactClick } = useContactClick();

  const { downloadFile } = useDownload();
  const cvPath = require("documents/cv.pdf");

  const handleDownloadClick = () => {
    downloadFile(cvPath);
  };

  const { data, isLoading } = useApi<AboutData>("/sectionTwo");
  return {
    isBannerVisible,
    data,
    isLoading,
    scrollToSection,
    handleDownloadClick,
    handleContactClick,
  };
};
export default useSectionOne;
