import Head from "next/head";
import { useInitializer } from "@/hooks/useInitializer";
import { ASCIIMaze } from "@/components/maze/ascii/ASCIIMaze";
import { useMovement } from "@/hooks/useMovement";
import { ViewPort } from "@/components/viewport/ViewPort";
import { ArrowButton } from "@/components/controls/buttons/ArrowButton";
import { DirectionalPad } from "@/components/controls/buttons/DirectionalPad";

export default function Home() {
  const { squares, nX } = useInitializer({ nX: 20 });
  const { moveHandler } = useMovement();

  return (
    <>
      <Head>
        <title>Maze game</title>
        <meta name="description" content="amazeballs" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        style={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem 0",
          overflow: "hidden",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <ViewPort>
          <ASCIIMaze {...{ squares, nX }} />
        </ViewPort>
        <DirectionalPad>
          <ArrowButton
            position="left"
            callback={() => moveHandler(["ArrowLeft"])}
            rotation="270deg"
          />
          <ArrowButton
            position="up"
            callback={() => moveHandler(["ArrowUp"])}
            rotation="0deg"
          />
          <ArrowButton
            position="right"
            callback={() => moveHandler(["ArrowRight"])}
            rotation="90deg"
          />
          <ArrowButton
            position="down"
            callback={() => moveHandler(["ArrowDown"])}
            rotation="180deg"
          />
        </DirectionalPad>
      </section>
    </>
  );
}
