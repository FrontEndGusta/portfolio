import { RefObject, useState } from "react";

const useHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return {
    toggleMenu,
    scrollToSection,
    menuOpen,
  };
};

export default useHeader;
