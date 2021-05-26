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
exports.Toggle = void 0;
var bind_1 = __importDefault(require("classnames/bind"));
var react_1 = __importStar(require("react"));
var Toggle_scss_1 = __importDefault(require("./Toggle.scss"));
var cn = bind_1.default.bind(Toggle_scss_1.default);
var CLASS_NAME = 'Toggle';
var Toggle = function (_a) {
    var _b, _c;
    var className = _a.className, id = _a.id, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.leftText, leftText = _e === void 0 ? '' : _e, leftTextClassName = _a.leftTextClassName, onClick = _a.onClick, _f = _a.rightText, rightText = _f === void 0 ? '' : _f, rightTextClassName = _a.rightTextClassName, thumbClassName = _a.thumbClassName, value = _a.value;
    var handleClick = react_1.useCallback(function (event) {
        if (onClick && !isDisabled) {
            onClick({ event: event, id: id, value: !value });
        }
    }, [id, isDisabled, value, onClick]);
    return (react_1.default.createElement("div", { className: cn(CLASS_NAME + "__wrapper") },
        Boolean(leftText) && react_1.default.createElement("span", { className: cn(CLASS_NAME + "__leftText", leftTextClassName) }, leftText),
        react_1.default.createElement("button", { id: id, className: cn(CLASS_NAME, (_b = {},
                _b[CLASS_NAME + "--isDisabled"] = isDisabled,
                _b[CLASS_NAME + "--isActive"] = value,
                _b), className), onClick: handleClick, disabled: isDisabled },
            react_1.default.createElement("span", { className: cn(CLASS_NAME + "__thumb", (_c = {},
                    _c[CLASS_NAME + "__thumb--isActive"] = value,
                    _c), thumbClassName) })),
        Boolean(rightText) && react_1.default.createElement("span", { className: cn(CLASS_NAME + "__rightText", rightTextClassName) }, rightText)));
};
exports.Toggle = Toggle;
//# sourceMappingURL=Toggle.js.map