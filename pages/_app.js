import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { blue, GlobalStyle, standard } from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(standard);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} setTheme={setTheme} theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
