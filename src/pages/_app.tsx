import { globalStyle } from "@/styles/Global";
import { sofia, vt323 } from "@/styles/customFonts";
import { Global } from "@emotion/react";
import clsx from "clsx";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(sofia.className, vt323.className)}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </main>
  );
}
