import { css } from "@emotion/react";

export const theme = {
  colors: {
    background: "#e0f8d0",
    dark: "#081820",
    medium: "#346856",
    light: "#88c070",
  },
};

export const globalStyle = css`
  :root {
    --bgColor: ${theme.colors.background};
    --darkColor: ${theme.colors.dark};
    --mediumColor: ${theme.colors.medium};
    --lightColor: ${theme.colors.light};
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
