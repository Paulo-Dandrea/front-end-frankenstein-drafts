import type { AppProps } from "next/app";
import { GlobalStyle } from "../src/ui/theme/global-style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
