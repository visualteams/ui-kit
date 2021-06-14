// @ts-ignore
import { createMuiTheme } from "@material-ui/core/styles";
import COLORS from "./colors";
import createShadows from "./shadows";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    background: {
      default: COLORS.background,
    },
  },
  // @ts-ignore
  shadows: createShadows(COLORS.grey),
  props: {
    MuiButton: {
      disableElevation: true,
      variant: "contained",
      color: "primary",
      size: "small",
    },
    MuiTextField: {
      variant: "outlined",
      margin: "dense",
      size: "small",
    },
    MuiFormControl: {
      variant: "outlined",
      margin: "dense",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "initial",
        fontWeight: 400,
      },
      containedPrimary: {
        color: "white",
      },
    },
    MuiTypography: {
      h1: {
        fontSize: "1.25rem !important",
        fontWeight: 500,
        fontFamily: "Raleway",
        color: COLORS.grey,
      },
    },
  },
});

export default theme;
