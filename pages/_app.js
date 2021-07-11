import { useState } from "react";
import themes from "../constants/themes";
import Head from "next/head";
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
      <Head>
        <title>Ranko Ostojic</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/rale.jpg" />
      </Head>
      <Component {...pageProps} setTheme={handleSetTheme} theme={theme} />
    </div>
  );
}

export default MyApp;
