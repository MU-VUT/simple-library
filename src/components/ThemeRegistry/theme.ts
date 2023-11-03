import { Playpen_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const playpen = Playpen_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const colorPrimary = "#b22f2f";
const colorSecondary = "#b2712f";

const theme = createTheme({
  palette: {
    background: {
      default: "#ebdcba",
    },
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorSecondary,
    },
  },
  typography: {
    fontFamily: playpen.style.fontFamily,
    h3: {
      color: colorSecondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          "&:hover": {
            color: "black",
          },
        },
      },
    },
  },
});

export default theme;
