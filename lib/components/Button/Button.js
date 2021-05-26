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
var bind_1 = __importDefault(require("classNames/bind"));
var react_1 = __importStar(require("react"));
var Button__scss_1 = __importDefault(require("./Button..scss"));
var cn = bind_1.default.bind(Button__scss_1.default);
var CLASS_NAME = 'Button';
var Button = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, id = _a.id, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.isFullWidth, isFullWidth = _d === void 0 ? false : _d, LeftIcon = _a.leftIcon, onClick = _a.onClick, RightIcon = _a.rightIcon, _e = _a.text, text = _e === void 0 ? '' : _e, _f = _a.type, type = _f === void 0 ? 'button' : _f, _g = _a.variant, variant = _g === void 0 ? 'primary' : _g;
    var handleClick = react_1.useCallback(function (event) {
        if (onClick && !isDisabled) {
            onClick({ event: event, id: id });
        }
    }, [id, isDisabled, onClick]);
    return (react_1.default.createElement("button", { id: id, className: cn(CLASS_NAME, (_b = {},
            _b[CLASS_NAME + "--isSecondary"] = variant === 'secondary',
            _b[CLASS_NAME + "--isDisabled"] = isDisabled,
            _b[CLASS_NAME + "--isFullWidth"] = isFullWidth,
            _b), className), type: type, onClick: handleClick, disabled: isDisabled }, children ||
        react_1.default.createElement(react_1.default.Fragment, null,
            LeftIcon && react_1.default.createElement("span", { className: cn(CLASS_NAME + "__icon--left") },
                react_1.default.createElement(LeftIcon, null)),
            text && react_1.default.createElement("span", { className: cn(CLASS_NAME + "__text") }, text),
            RightIcon && react_1.default.createElement("span", { className: cn(CLASS_NAME + "__icon--right") },
                react_1.default.createElement(RightIcon, null)))));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map