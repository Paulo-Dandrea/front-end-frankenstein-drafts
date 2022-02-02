import { createGlobalStyle } from 'styled-components'

import colour from './colour'

export const GlobalStyle = createGlobalStyle`

  .tick {

    font-family: 'Zen Old Mincho', serif;


    line {
    stroke: ${colour.sunlightDataViz.lineGreyAccent};
    }

    text {
      fill: ${colour.sunlightDataViz.textMain};
    }

  }

  .mark {
    fill: #6BBBA1
  }


  .marks  {
    path {
    fill: none;
    stroke: #F6B656;
    stroke-width: 5px;
    stroke-linejoin: round;
    stroke-linecap: round;
    }

    circle {
      fill:#F6B656;

    }
  }
  

  .axis-label {
    font-size: 2.5em;
    fill: ${colour.sunlightDataViz.textMain};

  }  



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
    color: ${colour.darkGray};
  }

  body {
    background:  ${colour.lightGray};
  }

  .debug > * {
    border: 2px solid ${colour.danger};
  } */

  `
