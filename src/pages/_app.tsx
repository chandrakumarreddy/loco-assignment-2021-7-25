import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

interface IDefaultProps {}

const DefaultLayout = ({ children }: React.PropsWithChildren<IDefaultProps>) =>
  children;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Component.layout || DefaultLayout;
  return (
    <>
      <Head>
        <title>Made with ❤️ By chandra</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
