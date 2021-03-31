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
exports.Button = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
require("./Button.scss");
var CLASS_NAME = 'Button';
var Button = function (_a) {
    var _b;
    var children = _a.children, сlassName = _a.сlassName, id = _a.id, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, LeftIcon = _a.leftIcon, onClick = _a.onClick, RightIcon = _a.rightIcon, _d = _a.text, text = _d === void 0 ? '' : _d, _e = _a.type, type = _e === void 0 ? 'button' : _e, _f = _a.variant, variant = _f === void 0 ? 'primary' : _f;
    var handleClick = react_1.useCallback(function (event) {
        if (onClick && !isDisabled) {
            onClick({ event: event, id: id });
        }
    }, [id, isDisabled, onClick]);
    return (react_1.default.createElement("button", { id: id, className: classnames_1.default(CLASS_NAME, (_b = {}, _b[CLASS_NAME + "--isSecondary"] = variant === 'secondary', _b[CLASS_NAME + "--isDisabled"] = isDisabled, _b), сlassName), type: type, onClick: handleClick, disabled: isDisabled }, children ||
        react_1.default.createElement(react_1.default.Fragment, null,
            LeftIcon && react_1.default.createElement("span", { className: classnames_1.default(CLASS_NAME + "__icon", CLASS_NAME + "__icon--left") },
                react_1.default.createElement(LeftIcon, null)),
            text && react_1.default.createElement("span", { className: classnames_1.default(CLASS_NAME + "__text") }, text),
            RightIcon && react_1.default.createElement("span", { className: classnames_1.default(CLASS_NAME + "__icon", CLASS_NAME + "__icon--right") },
                react_1.default.createElement(RightIcon, null)))));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map