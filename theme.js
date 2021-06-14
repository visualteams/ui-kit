"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var styles_1 = require("@material-ui/core/styles");
var colors_1 = __importDefault(require("./colors"));
var shadows_1 = __importDefault(require("./shadows"));
var theme = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: colors_1.default.primary,
        },
        secondary: {
            main: colors_1.default.secondary,
        },
        background: {
            default: colors_1.default.background
        },
    },
    // @ts-ignore
    shadows: shadows_1.default(colors_1.default.grey),
    props: {
        MuiButton: {
            disableElevation: true,
            variant: 'contained',
            color: 'primary',
            size: 'small'
        },
        MuiTextField: {
            variant: 'outlined',
            margin: 'dense',
            size: 'small'
        }
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'initial',
                fontWeight: 400
            },
            containedPrimary: {
                color: 'white',
            }
        },
        MuiTypography: {
            h1: {
                fontSize: '1.25rem !important',
                fontWeight: 500,
                fontFamily: 'Raleway',
                color: colors_1.default.grey,
            }
        }
    }
});
exports.default = theme;
