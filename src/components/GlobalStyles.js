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
    margin-top: 10%;
    font-family: 'Raleway', sans-serif;
    ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1000px){
        margin-top:180px;
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
