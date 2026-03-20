import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6366f1",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
