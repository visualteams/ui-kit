"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var styles_1 = require("@material-ui/core/styles");
var colors_1 = __importDefault(require("./colors"));
var theme = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: colors_1.default.primary,
        },
        secondary: {
            main: colors_1.default.secondary,
        },
    },
});
exports.default = theme;
