import "styles/globals.css";
import RootLayout from "./layout";
import Router, { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.asPath == "/links") {
    return <Component {...pageProps} />;
  }
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
