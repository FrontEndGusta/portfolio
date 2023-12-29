import { RefObject } from "react";

export type useHeaderReturn = {
  toggleTheme(): void;
  sectionOneRef: RefObject<HTMLElement>;
  sectionTwoRef: RefObject<HTMLElement>;
  sectionThreeRef: RefObject<HTMLElement>;
  sectionForRef: RefObject<HTMLElement>;
};
