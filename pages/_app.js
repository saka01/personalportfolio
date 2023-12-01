import "styles/globals.css";
import RootLayout from "./layout";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";


function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
