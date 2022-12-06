import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import { css, ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
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

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
        {/* <Layout>
        </Layout> */}
      </ThemeProvider>
    </SessionProvider>
  );
}
