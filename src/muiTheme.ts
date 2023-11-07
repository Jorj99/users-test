import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          padding: "6px",
          height: "36px",
          fontSize: "18px",
          backgroundColor: "var(--mint-green)",
          "&:hover": {
            backgroundColor: "var(--mint-green)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          backgroundColor: "white",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          color: "var(--silver-chalice)",
          border: "1px solid var(--silver-chalice)",
          "& > *": {
            color: "var(--body1)",
          },
        },
      },
    },
  },
  typography: {
    h1: {
      color: "var(--slate-gray)",

      fontFamily: "Futura PT Bold, sans-serif",
      fontWeight: 600,
      fontSize: "26px",
      fontStyle: "normal",
      lineHeight: "44px",
    },
    h2: {
      color: "var(--slate-gray)",
      fontFamily: "Futura PT Medium, sans-serif",
      fontWeight: 500,
      fontSize: "18px",
      fontStyle: "normal",
      lineHeight: "20px",
    },
    body1: {
      color: "var(--body1)",
      textAlign: "center",
      fontFamily: "Futura PT Book, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      fontStyle: "normal",
      lineHeight: "20px",
    },
  },
});

export default theme;
