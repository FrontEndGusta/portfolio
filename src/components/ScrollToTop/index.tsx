import React, { useEffect, useState } from "react";
import {MdKeyboardDoubleArrowUp} from "react-icons/md";
import { ContainerScrollToTop } from "./styles";
import useIntersectionObserver from "../../utils/useIntersectionObserver";

interface ScrollToTopProps {
  sectionOneRef: React.RefObject<HTMLDivElement>;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ sectionOneRef }) => {
  const isScrollTopVisible = useIntersectionObserver(sectionOneRef);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Atualiza o estado de "visible" com base em isScrollTopVisible
    setVisible(isScrollTopVisible);
  }, [isScrollTopVisible]);

  const scrollUp = () =>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
  }
  return (
    <ContainerScrollToTop>
      {!visible && (
        <div className="scrollToTop" onClick={scrollUp}>
          <MdKeyboardDoubleArrowUp />
        </div>
      )}
    </ContainerScrollToTop>
  );
};

export default ScrollToTop;
