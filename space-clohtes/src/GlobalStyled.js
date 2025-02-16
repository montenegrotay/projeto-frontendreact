import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    }

    .App{
        font-family: sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

`;

export default GlobalStyled;