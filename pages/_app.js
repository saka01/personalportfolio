import "styles/globals.css";
import RootLayout from "./layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const getLayout =
    Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);

  return getLayout(
    // <RootLayout>
      <Component {...pageProps} />
    // {/* </RootLayout> */}
  );
}

export default MyApp;
