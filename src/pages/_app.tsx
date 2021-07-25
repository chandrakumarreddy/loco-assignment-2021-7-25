import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextComponentType, NextPage, NextPageContext } from "next";

interface IDefaultProps {}

const DefaultLayout = ({ children }: React.PropsWithChildren<IDefaultProps>) =>
  children;

type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    layout: NextPage;
  };
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout: NextPage = Component.layout || DefaultLayout;
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
