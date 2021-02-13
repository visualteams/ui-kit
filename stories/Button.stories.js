"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outlined = exports.Secondary = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
exports.default = {
    title: 'Example/Button',
    component: Button_1.default,
    argTypes: {
        fullWidth: true,
        disabled: true
    },
};
var Template = function (args) { return react_1.default.createElement(Button_1.default, __assign({}, args), "Button"); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    fullWidth: false,
    disabled: false,
    variant: 'contained',
    color: 'primary'
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    fullWidth: false,
    disabled: false,
    variant: 'contained',
    color: 'secondary'
};
exports.Outlined = Template.bind({});
exports.Outlined.args = {
    variant: 'outlined',
    disabled: false,
    color: 'primary'
};
