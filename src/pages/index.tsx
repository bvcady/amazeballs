/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useInitializer } from "@/hooks/useInitializer";
import { ASCIIMaze } from "@/components/maze/ASCIIMaze";
import { useMovement } from "@/hooks/useMovement";
import { ViewPort } from "@/components/viewport/ViewPort";
import { ArrowButton } from "@/components/console/controls/buttons/ArrowButton";
import { DirectionalPad } from "@/components/console/controls/buttons/DirectionalPad";
import { useMazeStore } from "@/store/MazeStore";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useSeeding } from "@/hooks/useSeeding";
import { UI } from "@/components/ui/UI";
import { Console } from "@/components/console/Console";
import { ScreenPadding } from "@/components/console/Console.styles";
import { Grate } from "@/components/console/Grate";
import { SSButton } from "@/components/console/controls/buttons/SSButton";
import { ButtonArea } from "@/components/console/ButtonArea";
import { useUIStore } from "@/store/UIStore";

export default function Home() {
  const { setNewSeed } = useSeeding();

  const { squares, nX, reload, seedBuilder } = useInitializer({ nX: 20 });
  const { saveFile } = useMazeStore((state) => state);
  const { seed } = saveFile;
  const { menuOpen, toggleMenuOpen } = useUIStore((state) => state);

  useEffect(() => {
    reload();
  }, [seed]);

  const { moveHandler } = useMovement();

  return (
    <>
      <Head>
        <title>Inferno Descent</title>
        <meta
          name="description"
          content="The only roguelite without enemy encounters."
        />
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
          padding: "2rem 0",
          overflow: "hidden",
          // maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <Console>
          <ScreenPadding>
            <ViewPort>
              <UI />
              <ASCIIMaze {...{ squares, nX, seedBuilder }} />
            </ViewPort>
          </ScreenPadding>
          <Grate />
          <ButtonArea>
            <DirectionalPad>
              <ArrowButton
                position="left"
                callback={() => moveHandler("ArrowLeft")}
                rotation="270deg"
              />
              <ArrowButton
                position="up"
                callback={() => moveHandler("ArrowUp")}
                rotation="0deg"
              />
              <ArrowButton
                position="right"
                callback={() => moveHandler("ArrowRight")}
                rotation="90deg"
              />
              <ArrowButton
                position="down"
                callback={() => moveHandler("ArrowDown")}
                rotation="180deg"
              />
            </DirectionalPad>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <SSButton callback={() => moveHandler("Space")} />
              <SSButton callback={() => null} />
            </div>
            <div></div>
          </ButtonArea>
          <span style={{ opacity: seed ? 0.2 : 0 }}>
            {seed || "placeholder"}
          </span>
        </Console>

        <Button onClick={() => setNewSeed()}>Reload</Button>
      </section>
    </>
  );
}
