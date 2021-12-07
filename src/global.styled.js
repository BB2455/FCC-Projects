import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background: ${(props) => props.theme.background};
  }
`;

export default GlobalStyle;
