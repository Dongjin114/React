import styled, { createGlobalStyle } from "styled-components";
import * as COLOR from "./constants/color";

export const GlobalStyle = createGlobalStyle`
  body{
    background-color: #f0f0f0; 
    ${COLOR.UNCORKED1};
  }
`;
