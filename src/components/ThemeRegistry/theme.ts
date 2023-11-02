import { Playpen_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const playpen = Playpen_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const colorSecondary = "#b2712f";

const theme = createTheme({
  palette: {
    background: {
      default: "#ebdcba",
    },
    primary: {
      main: "#b22f2f",
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
});

export default theme;
