"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
var react_1 = __importDefault(require("react"));
var bind_1 = __importDefault(require("classnames/bind"));
require("./Overlay.scss");
var CLASS_NAME = 'Overlay';
var Overlay = function (_a) {
    var _b;
    var children = _a.children, isAbsolute = _a.isAbsolute, isTransparent = _a.isTransparent, _c = _a.onClick, onClick = _c === void 0 ? function () { return false; } : _c;
    return (react_1.default.createElement("div", { className: bind_1.default(CLASS_NAME, (_b = {},
            _b[CLASS_NAME + "-isTransparent"] = isTransparent,
            _b[CLASS_NAME + "-isAbsolute"] = isAbsolute,
            _b)), onClick: onClick, role: "presentation" }, children));
};
exports.Overlay = Overlay;
//# sourceMappingURL=Overlay.js.map