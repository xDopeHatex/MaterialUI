import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    otherColor: {
      main: string;
    };
  }

  interface PaletteOptions {
    otherColor?: {
      main: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    otherColor: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    otherColor: {
      main: "#999",
    },
  },
});
