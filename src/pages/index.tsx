import Head from "next/head";
import { useInitializer } from "@/hooks/useInitializer";
import { ASCIIMaze } from "@/components/maze/ascii/ASCIIMaze";
import { useMovement } from "@/hooks/useMovement";
import { ViewPort } from "@/components/maze/viewport/ViewPort";

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
          display: "grid",
          placeItems: "center",
          width: "100dvw",
          height: "100dvh",
        }}
      >
        <ViewPort>
          <ASCIIMaze {...{ squares, nX }} />
        </ViewPort>
        <div>
          <button onClick={() => moveHandler(["ArrowLeft"])}>LEFT</button>
          <button onClick={() => moveHandler(["ArrowRight"])}>RIGHT</button>
          <button onClick={() => moveHandler(["ArrowDown"])}>DOWN</button>
          <button onClick={() => moveHandler(["ArrowUp"])}>UP</button>
        </div>
      </section>
    </>
  );
}
