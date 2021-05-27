"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
exports.Portal = react_1.memo(function (_a) {
    var isOpened = _a.isOpened, children = _a.children;
    if (!isOpened) {
        return null;
    }
    return (react_dom_1.default.createPortal(children, document.body));
});
exports.Portal.displayName = 'Portal';
//# sourceMappingURL=Portal.js.map