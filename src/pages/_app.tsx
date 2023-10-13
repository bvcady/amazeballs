import { useSeeding } from "@/hooks/useSeeding";
import { globalStyle } from "@/styles/Global";
import { sofia, vt323 } from "@/styles/customFonts";
import { Global } from "@emotion/react";
import clsx from "clsx";
import type { AppProps } from "next/app";
import { useMazeStore } from "@/store/MazeStore";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(sofia.className, vt323.className)}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </main>
  );
}
