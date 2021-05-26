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
exports.Textarea = void 0;
var react_1 = __importStar(require("react"));
var bind_1 = __importDefault(require("classnames/bind"));
var Textarea__scss_1 = __importDefault(require("./Textarea..scss"));
var cn = bind_1.default.bind(Textarea__scss_1.default);
var CLASS_NAME = 'Textarea';
exports.Textarea = react_1.memo(function (_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.error, error = _d === void 0 ? '' : _d, _e = _a.id, id = _e === void 0 ? '' : _e, _f = _a.isReadOnly, isReadOnly = _f === void 0 ? false : _f, label = _a.label, onChange = _a.onChange, _g = _a.value, value = _g === void 0 ? '' : _g;
    var _h = react_1.useState(false), isFocused = _h[0], setIsFocused = _h[1];
    var textareaRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (id) {
            var textAreaElement_1 = document.getElementById(id);
            if (textAreaElement_1) {
                textAreaElement_1.addEventListener('keydown', handleKeyDown);
                return function () { return textAreaElement_1.removeEventListener('keydown', handleKeyDown); };
            }
        }
    }, [id]);
    var handleChange = react_1.useCallback(function (event) {
        if (!isReadOnly && onChange) {
            onChange({ event: event, id: id, value: event.target.value });
        }
    }, [isReadOnly, id, onChange]);
    var handleKeyDown = react_1.useCallback(function (_a) {
        var target = _a.target;
        setTimeout(function () {
            target.style.height = 'auto';
            console.log('ewf');
            target.style.height = target.scrollHeight + 'px';
        }, 0);
    }, []);
    var handleClickOnLabel = react_1.useCallback(function () {
        textareaRef.current.focus();
    }, []);
    var handleFocus = react_1.useCallback(function () { return setIsFocused(true); }, []);
    var handleBlur = react_1.useCallback(function () { return setIsFocused(false); }, []);
    var isVisibleLabel = react_1.useMemo(function () {
        return Boolean(label && (isFocused || value));
    }, [label, isFocused, value]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: cn(CLASS_NAME + "__wrapper", className) },
            react_1.default.createElement("span", { className: cn(CLASS_NAME + "__label", (_b = {},
                    _b[CLASS_NAME + "__label--isVisibleLabel"] = isVisibleLabel,
                    _b)), onClick: handleClickOnLabel }, label),
            react_1.default.createElement("textarea", { ref: textareaRef, className: cn(CLASS_NAME), id: id, value: value, rows: 1, disabled: isReadOnly, onChange: handleChange, 
                // onKeyDown={handleKeyDown}
                onFocus: handleFocus, onBlur: handleBlur })),
        Boolean(error) && react_1.default.createElement("span", { className: cn(CLASS_NAME + "__error") }, error)));
});
exports.Textarea.displayName = 'Textarea';
//# sourceMappingURL=Textarea.js.map