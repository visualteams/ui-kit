"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var core_1 = require("@material-ui/core");
var colors_1 = __importDefault(require("./colors"));
var theme = core_1.createMuiTheme({
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
