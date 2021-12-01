import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
body {
    background: #0A0818;
    color: white;
    font-family: 'Raleway', sans-serif;
    ::-webkit-scrollbar {
    display: none;
  }
}
h2 {
    margin-left: 1rem;
}
a{
    text-decoration: none;
    color: white;
}
`;

export default GlobalStyles;
