import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      background: string;
      background_popover: string;
      text_popover: string;
      text: string;
      h1: string;
      svg: string;
      filter: number;
    };
  }
}
