import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript } from 'react-icons/bi';
import image1 from '../assets/projects/Page-Meet/meet1.png'
import HamsterWheel from '../components/HamsterWheel';
import components from './useComponent';

const icons = [<BiLogoJavascript />, <BiLogoHtml5 />, <BiLogoCss3 />];

const texts = {
  sectionTwo: {
    about: {
      aboutMe: "Sobre mim",
      description: "Desenvolvedor Front-end experiente em React.js, JavaScript, TypeScript, Styled Components e Material UI. Habilidades destacadas incluem a criação de componentes reutilizáveis, o desenvolvimento de interfaces dinâmicas e responsivas, e a gestão eficiente de projetos com Metodologias Ágeis. Formado em Análise e Desenvolvimento de Sistemas, atualizado em novas tecnologias, com ênfase em aprimorar minha proficiência em TypeScript e outras inovações no desenvolvimento web."
    }
  },
  sectionTree: {
    titleHighlights: {
      title: "Projetos em destaque"
    },
    cardsHighlights: [
      {
        title: "Portal Minha Senha (C&A)",
        images: "cardOne", // Corrigido aqui
        icons: "icons1"
      }
    ],
    titleAllProjects: {
      title: "Todos os Projetos"
    },
    cardsAllProjects: [
      {
        title: "Portal Minha Senha (C&A)",
        images: components.imagesCards.cardOne, // Corrigido aqui
        icons: "icons1"
      },
      {
        title: "Landing Page Meet",
        images: components.imagesCards.cardOne, // Corrigido aqui
        icons: components.icons.icons2
      },
      {
        title: "Game Secret Word",
        images: components.imagesCards.cardOne, // Corrigido aqui
        icons: components.icons.icons3
      },
      {
        title: "Page Login",
        images: components.imagesCards.cardOne, // Corrigido aqui
        icons: components.icons.icons1
      },
      {
        title: "Trabalhando nisso...",
        component: "customComponentKey",
        viewMore: false
      }
    ],
    modalVideoHighlights: [
      {
        title: "Portal Minha Senha (C&A)",
        description: "Este projeto foi elaborado utilizando HTML, CSS e JavaScript, com o objetivo de proporcionar orientação e assistência aos usuários da empresa durante os processos de desbloqueio de conta e redefinição de senha. A interface é responsiva, incorporando modais para uma experiência de usuário intuitiva. Além disso, o projeto oferece um vídeo instrutivo para guiar os usuários através dos procedimentos e disponibiliza a opção de download de um PDF contendo instruções detalhadas para facilitar ainda mais o processo.",
        images: "modalOne",
        projectLink: "https://minhasenha.cea.com.br",
        repositoryLink: "",
        LinkedInLink: "https://www.linkedin.com/in/gustavo-silva-37453a144?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ],
    modalVideoAllProjects: [
      {
        title: "Portal Minha Senha (C&A)",
        description: "Este projeto foi elaborado utilizando HTML, CSS e JavaScript, com o objetivo de proporcionar orientação e assistência aos usuários da empresa durante os processos de desbloqueio de conta e redefinição de senha. A interface é responsiva, incorporando modais para uma experiência de usuário intuitiva. Além disso, o projeto oferece um vídeo instrutivo para guiar os usuários através dos procedimentos e disponibiliza a opção de download de um PDF contendo instruções detalhadas para facilitar ainda mais o processo.",
        images: "modalOne",
        projectLink: "https://minhasenha.cea.com.br",
        repositoryLink: "",
        LinkedInLink: "https://www.linkedin.com/in/gustavo-silva-37453a144?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        title: "Landing Page Meet",
        description: "Este projeto consiste na criação de um clone responsivo da landing page do Meet usando HTML e CSS. Focado no treinamento de habilidades, busca oferecer uma experiência prática, destacando a construção de um design adaptável a diferentes dispositivos. Incorpora técnicas avançadas de estilização CSS e elementos interativos, proporcionando uma oportunidade para aprimorar habilidades em HTML, CSS e design responsivo.",
        images: "modalTwo",
        projectLink: "https://landing-page-lime-mu-82.vercel.app/",
        repositoryLink: "https://github.com/FrontEndGusta/Landing-page.git",
        LinkedInLink: "https://www.linkedin.com/in/gustavo-silva-37453a144?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        title: "Game Secret Word",
        description: "O projeto Secret Word é um jogo de adivinhação de palavras desenvolvido em React.js, React e CSS, composto por três estágios: início, jogo e fim, o jogo envolve a escolha aleatória de palavras, adivinhação de letras, e pontuação. Utilizando React Hooks e props, o projeto destaca-se pela responsividade e oferece uma oportunidade prática para aprimorar habilidades em React, manipulação de estado e design responsivo.",
        images: "modalThree",
        projectLink: "https://game-secret-word-sable.vercel.app/",
        repositoryLink: "https://github.com/FrontEndGusta/Game_secretWord.git",
        LinkedInLink: "https://www.linkedin.com/in/gustavo-silva-37453a144?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        title: "Page Login",
        description: "Este projeto abrange a criação de uma página de login responsiva usando HTML, CSS e JavaScript. Com foco no desenvolvimento de habilidades práticas, a página oferece uma experiência de usuário envolvente, destacando a adaptabilidade do design em dispositivos variados. Incorporando elementos interativos e estilização avançada com CSS, proporciona uma oportunidade valiosa para aprimorar competências em HTML, CSS e design responsivo.",
        images: "modalFor",
        projectLink: "https://page-login-hazel.vercel.app/",
        repositoryLink: "https://github.com/FrontEndGusta/Page_Login.git",
        LinkedInLink: "https://www.linkedin.com/in/gustavo-silva-37453a144?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    ]
  }
};


export default texts;
