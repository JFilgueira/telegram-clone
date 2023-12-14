import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        height: 100vh;
        background-color: ${props => props.theme.highlightBgColor};
        font-family: 'Roboto';
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.titleFontColor};
    }

    p, span {
        color: ${props => props.theme.textFontColor}
    }

    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.textFontColor};
      border-radius: 6px;
    }
`;