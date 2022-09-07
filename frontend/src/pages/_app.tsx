import type { AppProps } from "next/app";
import "../../styles/globals.css";
import Appbar from "../components/Appbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Appbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
