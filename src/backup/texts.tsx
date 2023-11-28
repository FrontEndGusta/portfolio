import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript } from 'react-icons/bi';
import image1 from '../assets/projects/portalMinhaSenha.png'
import HamsterWheel from '../components/HamsterWheel';

const icons = [<BiLogoJavascript />, <BiLogoHtml5 />, <BiLogoCss3 />];

const texts = {
  sectionTwo: {
    about: {
      aboutMe: "Sobre mim",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis reiciendis, perspiciatis quod laboriosam quas consectetur amet, vitae facilis possimus recusandae accusamus quibusdam perferendis ex. Illo unde totam mollitia eos.",
    },
  },

  sectionTree: {
    cardsHighlights: [
      {
        title: "Portal Minha Senha",
        images: image1,
        icons: icons,
      },
      {
        title: "Portal Minha Senha",
        images: image1,
      },
      {
        title: "Portal Minha Senha",
        images: image1,
      },
    ],

    projects: {
      title: "Todos os Projetos",
    },

    cardsAllProjects: [
      {
        title: "Portal Minha Senha",
        images: image1,
      },
      {
        title: "Portal Minha Senha",
        images: image1,
      },
      {
        title: "Portal Minha Senha",
        images: image1,
      },
      {
        title: "Portal Minha Senha",
        images: image1,
      },
      {
        title: "Trabalhando nisso...",
        component: <HamsterWheel/>,
        viewMore: false,
      },
    ],

    modalVideoHighlights: [
      {
        title: "titulo do video",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis reiciendis, perspiciatis quod laboriosam quas consectetur amet, vitae facilis possimus recusandae accusamus quibusdam perferendis ex. Illo unde totam mollitia eos.",
        url: "https://www.youtube.com/embed/SEZNJp3otzg",
      },
      {
        title: "titulo do video",
        description:
          "ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis reiciendis, perspiciatis quod laboriosam quas consectetur amet, vitae facilis possimus recusandae accusamus quibusdam perferendis ex. Illo unde totam mollitia eos.",
        url: "https://www.youtube.com/embed/SEZNJp3otzg",
      },
      {
        title: "titulo do video",
        description:
          "ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis reiciendis, perspiciatis quod laboriosam quas consectetur amet, vitae facilis possimus recusandae accusamus quibusdam perferendis ex. Illo unde totam mollitia eos.",
        url: "https://www.youtube.com/embed/SEZNJp3otzg",
      },
    ],

    modalVideoAllProjects: [
      {
        title: "titulo de teste1",
        description:
          "1 ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis reiciendis, perspiciatis quod laboriosam quas consectetur amet, vitae facilis possimus recusandae accusamus quibusdam perferendis ex. Illo unde totam mollitia eos.",
        url: "https://www.youtube.com/embed/SEZNJp3otzg",
      },
      {
        title: "titulo teste2",
        description:
          "2 ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis reiciendis, perspiciatis quod laboriosam quas consectetur amet, vitae facilis possimus recusandae accusamus quibusdam perferendis ex. Illo unde totam mollitia eos.",
        url: "https://www.youtube.com/embed/SEZNJp3otzg",
      },
      {
        title: "titulo teste2",
        description:
          "2 ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis reiciendis, perspiciatis quod laboriosam quas consectetur amet, vitae facilis possimus recusandae accusamus quibusdam perferendis ex. Illo unde totam mollitia eos.",
        url: "https://www.youtube.com/embed/SEZNJp3otzg",
      },
    ],
  },
};

export default texts;
