import { css } from "@emotion/react";

export const theme = {
  colors: {
    // background: "#fceed8",
    // dark: "#d16c74",
    // medium: "#faae88",
    // light: "#faddd9",
    // accent: "chartreuse",
    background: "#dadada",
    dark: "#1d1d1b",
    medium: "#575756",
    light: "#878787",
    accent: "hotpink",
  },
};

export const globalStyle = css`
  :root {
    --bgColor: ${theme.colors.background};
    --darkColor: ${theme.colors.dark};
    --mediumColor: ${theme.colors.medium};
    --lightColor: ${theme.colors.light};
    --accentColor: ${theme.colors.accent};
  }

  * {
    box-sizing: border-box;
  }
  body {
    background-color: var(--bgColor);
    font-family: var(--font-sofia);
    font-weight: 400;
    font-style: normal;
    margin: 0;
    padding: 0;
  }
  code {
    font-family: var(--font-vt323);
    color: var(--lightColor);
  }
`;
