import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
`;

const Theme = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle theme={theme} />
      {props.children}
    </>
  </ThemeProvider>
);

export default Theme;
