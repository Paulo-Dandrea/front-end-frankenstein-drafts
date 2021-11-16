import { createGlobalStyle } from 'styled-components'

import colors from './colors'

export const GlobalStyle = createGlobalStyle`
 /* @font-face {
    font-family: "Sharon";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/SharonSans-Regular.woff2") format("woff2"),
      url("/fonts/SharonSans-Regular.woff") format("woff");
  }

  @font-face {
    font-family: "Sharon";
    font-weight: 600;
    font-style: normal;
    src: url("/fonts/SharonSans-Medium.woff2") format("woff2"),
      url("/fonts/SharonSans-Medium.woff") format("woff");
  }

  @font-face {
    
    font-family: "Sharon"; 

    
    font-weight: 700;
    font-style: normal;
    src: url("/fonts/SharonSans-Bold.woff2") format("woff2"),
      url("/fonts/SharonSans-Bold.woff") format("woff");
  } */



  /* * {
    font-family: Sharon, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    text-size-adjust: none;
  }

  a, button {
    transition: all .3s ease-in-out;
  }


  :root{
    line-height: 1.5;
    color: ${colors.darkGray};
  }

  body {
    background:  ${colors.lightGray};
  }

  .debug > * {
    border: 2px solid ${colors.danger};
  } */

  `
