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
    props: {
        MuiButton: {
            disableElevation: true,
            variant: 'contained',
            color: 'primary',
            size: 'small'
        },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'initial'
            },
            containedPrimary: {
                color: 'white',
            }
        }
    }
})

export default theme
