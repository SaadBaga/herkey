import { createTheme } from "@mui/material/styles";

const createMuiTheme = createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            fontWeight: "bold",
            fontSize: 14,
            fontFamily: "Open Sans, sans-serif",
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            fontWeight: "bold",
            fontSize: 14,
            fontFamily: "Open Sans, sans-serif",
          },
        },
        {
          props: { variant: "contained", color: "primary" },
          style: {
            fontWeight: "bold",
            fontSize: 14,
            fontFamily: "Open Sans, sans-serif",
            backgroundColor: "#25a541",
            color: "#FFF",
            "&:hover": {
              backgroundColor: "#50B766",
              cursor: "pointer",
            },
            "&:focus": {
              backgroundColor: "#21953A",
              boxShadow: "inset 0 -1px 8px 0 rgba(0, 0, 0, 0.28)",
            },
            "&:disabled": {
              color: "#9e9e9e",
              backgroundColor: "rgba(0, 0, 0, 0.16)",
              cursor: "not-allowed",
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            fontWeight: "bold",
            fontSize: 14,
            fontFamily: "Open Sans, sans-serif",
            border: "solid 1px #25a541",
            backgroundColor: "#ffffff",
            "&:hover": {
              border: "solid 1px #25a541",
              backgroundColor: "rgba(37, 165, 65, 0.06)",
              cursor: "pointer",
            },
            "&:focus": {
              border: "solid 1px #25a541",
              backgroundColor: "rgba(37, 165, 65, 0.2)",
            },
            "&:disabled": {
              border: "solid 1px #d3d3d3",
              backgroundColor: "#ffffff",
            },
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: "#25a541",
      light: "#25a541",
    },
    secondary: {
      main: "#45bbff",
    },
    error: {
      main: "#d90b13",
    },
    default: {
      main: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
});

export default createMuiTheme;
