import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import { css, keyframes, ThemeProvider } from "styled-components";
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
    "--main-theme": "#1DB954",
    fullrounded: "9999px",
    "animation-fadein-slidedown": keyframes`
      0% {
        transform: translateY(-1rem);
        opacity: 0;
      }
      100% {
        transform: translateY(0rem);
        opacity: 1;
      }
    `,
    "animation-fadeout": keyframes`
      0% {
        opacity: 1;
      }
      100% {
        opacity : 0;
      }
    `,
    "animation-fadein": keyframes`
        0% {
          opacity: 0;
        }
        100% {
          opacity : 1;
        }
      `,
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
