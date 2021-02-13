// @ts-ignore
import { createMuiTheme } from '@material-ui/core/styles';
import COLORS from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
  },
})

export default theme
