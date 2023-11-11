import "styles/globals.css";
import RootLayout from "./layout";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
