import "styles/globals.css";
import RootLayout from "./layout";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import AnimatedCursor from "react-animated-cursor";
import { SpeedInsights } from "@vercel/speed-insights/next";


function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);

  return getLayout(
    <>
      <Head>
        <title>Moshood Saka</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Moshood Saka" key="title" />
      </Head>
      <AnimatedCursor
        hasBlendMode={true}
        color="#fff"
        innerSize={8}
        outerSize={65}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#d0d8c2",
        }}
        outerStyle={{
          backgroundColor: "#1A334C",
          mixBlendMode: "exclusion",
        }}
      />
        <Component {...pageProps} />
      <Analytics mode={'production'} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
