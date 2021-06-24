import { useState } from "react";
import themes from "../constants/themes";
import { Helmet } from "react-helmet";

import "../styles/App.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(themes.default);

  const handleSetTheme = (theme) => {
    setTheme(theme);
  };
  console.log(theme);
  return (
    <div className={theme}>
      <Component {...pageProps} setTheme={handleSetTheme} theme={theme} />
    </div>
  );
}

export default MyApp;
