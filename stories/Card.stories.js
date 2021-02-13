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
exports.Classic = void 0;
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
exports.default = {
    title: 'Example/Card',
    component: core_1.Card,
};
var Template = function (args) { return react_1.default.createElement(core_1.Card, __assign({}, args),
    react_1.default.createElement(core_1.CardContent, null, "Content of the card")); };
exports.Classic = Template.bind({});
