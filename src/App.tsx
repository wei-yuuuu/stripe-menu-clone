import React from "react";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  min-height: 100%;
  background: #202020;
}
*, button, input {
  border: 0;
  background: none;
  font-family: 'Roboto', -apple-system, system-ui, sans-serif;
}
ul {
  list-style: none;
  padding-left: 0;
}
`;

function App() {
  return (
    <>
      <Navbar />
      <GlobalStyles />
    </>
  );
}

export default App;
