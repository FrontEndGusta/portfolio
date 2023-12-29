import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

const useIconsContact = () => {
  const iconsArray: { icon: React.ReactNode; to: string }[] = [
    { icon: <BiLogoGithub />, to: "https://github.com/FrontEndGusta" },
    { icon: <BiLogoGmail />, to: "mailto:gustavo.lima1307@gmail.com" },
    {
      icon: <BiLogoLinkedinSquare />,
      to: "https://www.linkedin.com/in/gustavo-silva-37453a144?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  return {
    iconsArray,
  };
};

export default useIconsContact;
