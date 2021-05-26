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
exports.Input = void 0;
var react_1 = __importStar(require("react"));
var bind_1 = __importDefault(require("classnames/bind"));
var Input__scss_1 = __importDefault(require("./Input..scss"));
var cn = bind_1.default.bind(Input__scss_1.default);
var CLASS_NAME = 'Input';
var Input = function (_a) {
    var _b, _c;
    var _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.error, error = _e === void 0 ? '' : _e, id = _a.id, _f = _a.isFullWidth, isFullWidth = _f === void 0 ? false : _f, _g = _a.isReadOnly, isReadOnly = _g === void 0 ? false : _g, label = _a.label, onChange = _a.onChange, _h = _a.value, value = _h === void 0 ? '' : _h;
    var _j = react_1.useState(false), isFocused = _j[0], setIsFocused = _j[1];
    var inputRer = react_1.useRef(null);
    var handleChange = react_1.useCallback(function (event) {
        if (!isReadOnly && onChange) {
            onChange({ event: event, id: id, value: event.target.value });
        }
    }, [isReadOnly, id, onChange]);
    var handleClickOnLabel = react_1.useCallback(function () {
        inputRer.current.focus();
    }, []);
    var handleFocus = react_1.useCallback(function () { return setIsFocused(true); }, []);
    var handleBlur = react_1.useCallback(function () { return setIsFocused(false); }, []);
    var isVisibleLabel = react_1.useMemo(function () {
        return Boolean(label && (isFocused || value));
    }, [label, isFocused, value]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: cn(CLASS_NAME + "__wrapper", (_b = {}, _b[CLASS_NAME + "__wrapper--isFullWidth"] = isFullWidth, _b), className) },
            react_1.default.createElement("span", { className: cn(CLASS_NAME + "__label", (_c = {},
                    _c[CLASS_NAME + "__label--isVisibleLabel"] = isVisibleLabel,
                    _c)), onClick: handleClickOnLabel }, label),
            react_1.default.createElement("input", { ref: inputRer, className: cn(CLASS_NAME), id: id, type: "text", value: value, disabled: isReadOnly, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur })),
        Boolean(error) && react_1.default.createElement("span", { className: cn(CLASS_NAME + "__error") }, error)));
};
exports.Input = Input;
//# sourceMappingURL=Input.js.map