// SectionContext.tsx
import React, { createContext, useContext, useRef, ReactNode, useState } from "react";

interface SectionContextProps {
  sectionOneRef: React.RefObject<HTMLDivElement>;
  sectionTwoRef: React.RefObject<HTMLDivElement>;
  sectionThreeRef: React.RefObject<HTMLDivElement>;
  sectionForRef: React.RefObject<HTMLDivElement>;
}

const SectionContext = createContext<SectionContextProps | undefined>(undefined);

export const SectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [refs, setRefs] = useState<SectionContextProps>({
    sectionOneRef: useRef<HTMLDivElement>(null),
    sectionTwoRef: useRef<HTMLDivElement>(null),
    sectionThreeRef: useRef<HTMLDivElement>(null),
    sectionForRef: useRef<HTMLDivElement>(null),
  });

  return (
    <SectionContext.Provider value={refs}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
};
