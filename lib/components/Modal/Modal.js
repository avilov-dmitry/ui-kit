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
exports.Modal = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var icons_1 = require("../icons");
var Portal_1 = require("../Portal");
var Overlay_1 = require("../Overlay");
require("./Modal");
var CLASS_NAME = 'Modal';
var Modal = function (_a) {
    var isOpened = _a.isOpened, children = _a.children, _b = _a.modalClassName, modalClassName = _b === void 0 ? '' : _b, _c = _a.closeIconClassName, closeIconClassName = _c === void 0 ? '' : _c, _d = _a.withCloseIcon, withCloseIcon = _d === void 0 ? false : _d, onClose = _a.onClose;
    react_1.useEffect(function () {
        document.addEventListener('keydown', handleDocumentKeyDown);
        return function () {
            document.removeEventListener('keydown', handleDocumentKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var handleDocumentKeyDown = react_1.useCallback(function (_a) {
        var keyCode = _a.keyCode;
        if (keyCode === keyCode.ESCAPE) {
            onClose();
        }
    }, [onClose]);
    return (react_1.default.createElement(Portal_1.Portal, { isOpened: isOpened },
        react_1.default.createElement(Overlay_1.Overlay, null,
            react_1.default.createElement("div", { className: classnames_1.default(CLASS_NAME, modalClassName) },
                withCloseIcon && react_1.default.createElement(icons_1.CloseIcon, { className: classnames_1.default(CLASS_NAME + "__icon", closeIconClassName), onClick: onClose }),
                children))));
};
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map