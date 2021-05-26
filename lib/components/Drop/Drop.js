"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drop = void 0;
var React = __importStar(require("react"));
require("./Drop");
var CLASS_NAME = 'Drop';
var Drop = /** @class */ (function (_super) {
    __extends(Drop, _super);
    function Drop(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickOutside = function (e) {
            if (_this.wrapperRef.current && !_this.wrapperRef.current.contains(e.target)) {
                _this.setState({
                    isVisible: false
                }, function () {
                    var onClickOutside = _this.props.onClickOutside;
                    if (onClickOutside) {
                        onClickOutside();
                    }
                    document.removeEventListener('mousedown', _this.handleClickOutside);
                });
            }
        };
        _this.handleOnControl = function (e) {
            var coordinates = e.target.getBoundingClientRect();
            var bottomSpace = document.documentElement.clientHeight - coordinates.bottom;
            var rightSpace = document.documentElement.clientWidth - coordinates.right;
            var topSpace = coordinates.top;
            var leftSpace = coordinates.left;
            _this.setState(function (_a) {
                var isVisible = _a.isVisible;
                var openToTop = bottomSpace <= _this.dropdownRef.current.getBoundingClientRect().height &&
                    bottomSpace < topSpace;
                var openToLeft = rightSpace <= _this.dropdownRef.current.getBoundingClientRect().width &&
                    rightSpace < leftSpace;
                return { isVisible: !isVisible, openToTop: openToTop, openToLeft: openToLeft };
            }, function () {
                var onClickControl = _this.props.onClickControl;
                if (onClickControl) {
                    onClickControl();
                }
                document.addEventListener('mousedown', _this.handleClickOutside);
            });
        };
        _this.wrapperRef = React.createRef();
        _this.controlRef = React.createRef();
        _this.dropdownRef = React.createRef();
        _this.state = {
            controlHeight: '',
            controlWidth: '',
            dropdownHeight: '',
            dropdownWidth: '',
            isVisible: false,
            openToLeft: false,
            openToTop: false
        };
        return _this;
    }
    Drop.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, _b = _a.isOpened, isOpened = _b === void 0 ? false : _b, isSubDrop = _a.isSubDrop;
        if (isOpened) {
            this.setState({ isVisible: isOpened }, function () {
                _this.controlRef.current.click();
            });
        }
        if (this.controlRef.current && this.dropdownRef.current) {
            this.setState({
                controlHeight: this.controlRef.current.scrollHeight,
                controlWidth: this.controlRef.current.scrollWidth,
                dropdownHeight: isSubDrop
                    ? this.dropdownRef.current.scrollHeight
                    : this.dropdownRef.current.clientHeight,
                dropdownWidth: isSubDrop
                    ? this.dropdownRef.current.scrollWidth
                    : this.dropdownRef.current.clientWidth
            });
        }
    };
    Drop.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, isOpened = _a.isOpened, dropdown = _a.dropdown;
        if (prevProps.isOpened !== isOpened && isOpened !== undefined) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ isVisible: isOpened });
            // Check whether isOpened is false
            if (!isOpened) {
                document.removeEventListener('mousedown', this.handleClickOutside);
            }
        }
        // If dropdown will be changed after it was mounted we must re-calculate controlHeight / controlWidth
        if (prevProps.dropdown !== dropdown) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                controlHeight: this.controlRef.current.scrollHeight,
                controlWidth: this.controlRef.current.scrollWidth,
                dropdownHeight: this.dropdownRef.current.scrollHeight,
                dropdownWidth: this.dropdownRef.current.scrollWidth
            });
        }
    };
    Drop.prototype.render = function () {
        var _a = this.props, control = _a.control, dropdown = _a.dropdown;
        var _b = this.state, isVisible = _b.isVisible, openToTop = _b.openToTop, openToLeft = _b.openToLeft, controlHeight = _b.controlHeight, dropdownHeight = _b.dropdownHeight, controlWidth = _b.controlWidth, dropdownWidth = _b.dropdownWidth;
        var wrapperStyles = {
            visibility: !isVisible ? 'hidden' : 'visible',
            top: openToTop ? "-" + dropdownHeight + "px" : controlHeight + "px",
            left: openToLeft ? Number(controlWidth) - Number(dropdownWidth) + "px" : '0'
        };
        return (React.createElement("div", { className: CLASS_NAME, ref: this.wrapperRef },
            React.createElement("button", { className: CLASS_NAME + "__control-wrapper", ref: this.controlRef, type: "button", onClick: this.handleOnControl }, control),
            React.createElement("div", { className: CLASS_NAME + "__dropdown-wrapper", ref: this.dropdownRef, style: wrapperStyles }, dropdown)));
    };
    return Drop;
}(React.PureComponent));
exports.Drop = Drop;
//# sourceMappingURL=Drop.js.map