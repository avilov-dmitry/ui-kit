"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
var react_1 = __importStar(require("react"));
var bind_1 = __importDefault(require("classnames/bind"));
var Overlay_scss_1 = __importDefault(require("./Overlay.scss"));
var cn = bind_1.default.bind(Overlay_scss_1.default);
var CLASS_NAME = 'Overlay';
exports.Overlay = react_1.memo(function (_a) {
    var _b;
    var children = _a.children, isAbsolute = _a.isAbsolute, isTransparent = _a.isTransparent, _c = _a.onClick, onClick = _c === void 0 ? function () { return false; } : _c;
    return (react_1.default.createElement("div", { className: cn(CLASS_NAME, (_b = {},
            _b[CLASS_NAME + "--isTransparent"] = isTransparent,
            _b[CLASS_NAME + "--isAbsolute"] = isAbsolute,
            _b)), onClick: onClick, role: "presentation" }, children));
});
exports.Overlay.displayName = 'Overlay';
//# sourceMappingURL=Overlay.js.map