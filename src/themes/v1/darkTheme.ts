import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const darkTheme: ThemeOptions = createTheme({
 
  palette: {
    primary: {
      main: "#262730",
      contrastText: "red"
    },
    secondary: {
      main: "#D8D8D8"
    },
  },
});