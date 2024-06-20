export type sectionThreeReturn = {
  sectionThreeRef: React.RefObject<HTMLDivElement>;
}
// export type para os  =dados de um card
export type CardData = {
  title: string;
  images?: string 
  component?: React.ReactNode;
  icons?: string | React.ReactNode[];
  viewMore?: boolean;
}

// export type para os  =dados de um modal de vídeo
export type ModalVideoData = {
  title: string;
  description: string;
  images?: string;
  projectLink?: string;
  repositoryLink?: string;
  LinkedInLink?: string;
}

export type SectionThreeData = {
  titleHighlights: {
    title: string;
  };
  cardsHighlights: CardData[];
  titleAllProjects: {
    title: string;
  };
  cardsAllProjects: CardData[];
  modalVideoHighlights: ModalVideoData[];
  modalVideoAllProjects: ModalVideoData[];
}