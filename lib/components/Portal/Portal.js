"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
var react_dom_1 = __importDefault(require("react-dom"));
var Portal = function (_a) {
    var isOpened = _a.isOpened, children = _a.children;
    if (!isOpened) {
        return null;
    }
    return (react_dom_1.default.createPortal(children, document.body));
};
exports.Portal = Portal;
//# sourceMappingURL=Portal.js.map