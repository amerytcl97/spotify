import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import { css, ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  const theme = {
    "--sidebar-width": "12rem",
    "--header-height": "3.5rem",
    "--footer-height": "6rem",
    "--typical-icon-button": css`
      height: 1.3rem;
      width: 1.3rem;
    `,
    fullrounded: "9999px",
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
