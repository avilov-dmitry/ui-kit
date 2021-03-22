'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cn$6 = require('classnames');
var classNames = require('classnames/bind');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var cn__default = /*#__PURE__*/_interopDefaultLegacy(cn$6);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$i = ".Button {\n  border-radius: 8px; }\n  .Button--black {\n    background: #05051D; }\n";
styleInject(css_248z$i);

var CLASS_NAME$g = 'Button';
var Button = function (_a) {
  var // name,
  text = _a.text,
      // icon,
  // buttonClassName,
  _b = _a.type,
      // icon,
  // buttonClassName,
  type = _b === void 0 ? 'button' : _b,
      onClick = _a.onClick;
  var handleClick = React.useCallback(function () {
    return onClick();
  }, [onClick]);
  return React__default['default'].createElement("button", {
    className: cn__default['default'](CLASS_NAME$g),
    onClick: handleClick,
    type: type
  }, text);
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var css_248z$h = ".Drop {\n  position: relative; }\n  .Drop__control-wrapper {\n    background: none;\n    outline: none;\n    border: none;\n    padding: 0; }\n  .Drop__dropdown-wrapper {\n    position: absolute;\n    width: auto;\n    background-color: transparent;\n    z-index: 10000; }\n";
styleInject(css_248z$h);

var CLASS_NAME$f = 'Drop';

var Drop =
/** @class */
function (_super) {
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
        var openToTop = bottomSpace <= _this.dropdownRef.current.scrollHeight && bottomSpace < topSpace;
        var openToLeft = rightSpace <= _this.dropdownRef.current.scrollWidth && rightSpace < leftSpace;
        return {
          isVisible: !isVisible,
          openToTop: openToTop,
          openToLeft: openToLeft
        };
      }, function () {
        var onClickControl = _this.props.onClickControl;

        if (onClickControl) {
          onClickControl();
        }

        document.addEventListener('mousedown', _this.handleClickOutside);
      });
    };

    _this.wrapperRef = React__namespace.createRef();
    _this.controlRef = React__namespace.createRef();
    _this.dropdownRef = React__namespace.createRef();
    _this.state = {
      isVisible: false,
      openToTop: false,
      openToLeft: false,
      controlHeight: '',
      dropdownHeight: '',
      controlWidth: '',
      dropdownWidth: ''
    };
    return _this;
  }

  Drop.prototype.componentDidMount = function () {
    var _this = this;

    var isOpened = this.props.isOpened;

    if (isOpened) {
      this.setState({
        isVisible: isOpened
      }, function () {
        _this.controlRef.current.click();
      });
    }

    if (this.controlRef.current && this.dropdownRef.current) {
      this.setState({
        controlHeight: this.controlRef.current.scrollHeight,
        dropdownHeight: this.dropdownRef.current.scrollHeight,
        controlWidth: this.controlRef.current.scrollWidth,
        dropdownWidth: this.dropdownRef.current.scrollWidth
      });
    }
  };

  Drop.prototype.componentDidUpdate = function (prevProps) {
    var _a = this.props,
        isOpened = _a.isOpened,
        dropdown = _a.dropdown;

    if (prevProps.isOpened !== isOpened && isOpened !== undefined) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        isVisible: isOpened
      }); // Check whether isOpened is false

      if (!isOpened) {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    } // If dropdown will be changed after it was mounted we must re-calculate controlHeight / controlWidth


    if (prevProps.dropdown !== dropdown) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        controlHeight: this.controlRef.current.scrollHeight,
        dropdownHeight: this.dropdownRef.current.scrollHeight,
        controlWidth: this.controlRef.current.scrollWidth,
        dropdownWidth: this.dropdownRef.current.scrollWidth
      });
    }
  };

  Drop.prototype.render = function () {
    var _a = this.props,
        control = _a.control,
        dropdown = _a.dropdown;
    var _b = this.state,
        isVisible = _b.isVisible,
        openToTop = _b.openToTop,
        openToLeft = _b.openToLeft,
        controlHeight = _b.controlHeight,
        dropdownHeight = _b.dropdownHeight,
        controlWidth = _b.controlWidth,
        dropdownWidth = _b.dropdownWidth;
    var wrapperStyles = {
      visibility: !isVisible ? 'hidden' : 'visible',
      top: openToTop ? "-" + dropdownHeight + "px" : controlHeight + "px",
      left: openToLeft ? Number(controlWidth) - Number(dropdownWidth) + "px" : '0'
    };
    return React__namespace.createElement("div", {
      className: CLASS_NAME$f,
      ref: this.wrapperRef
    }, React__namespace.createElement("button", {
      className: CLASS_NAME$f + "__control-wrapper",
      onClick: this.handleOnControl,
      ref: this.controlRef,
      type: "button"
    }, control), React__namespace.createElement("div", {
      className: CLASS_NAME$f + "__dropdown-wrapper",
      ref: this.dropdownRef,
      style: wrapperStyles
    }, dropdown));
  };

  return Drop;
}(React__namespace.PureComponent);

var css_248z$g = ".Input {\n  background: #05051D;\n  border-radius: 4px;\n  border: 1px solid #05051D;\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 12px;\n  line-height: 14px;\n  outline: none !important;\n  padding: 10px 6px 10px 6px;\n  width: 100%;\n  margin: 0; }\n  .Input--withLeftIcon {\n    padding-left: 30px; }\n  .Input--withRightIcon {\n    padding-right: 30px; }\n  .Input:focus {\n    box-shadow: 0 0 6px 0px #ff80e8 !important;\n    border: 1px solid #ff80e8 !important; }\n  .Input__wrapper {\n    position: relative;\n    width: 100%; }\n  .Input__icon {\n    position: absolute;\n    top: 50%;\n    transform: translate(0, -50%); }\n    .Input__icon--withLeftIcon {\n      left: 12px; }\n    .Input__icon--withRightIcon {\n      right: 12px; }\n";
styleInject(css_248z$g);

var CLASS_NAME$e = 'Input';
var Input = function (_a) {
  var _b, _c, _d;

  var id = _a.id,
      // label,
  fieldName = _a.fieldName,
      _e = _a.className,
      className = _e === void 0 ? '' : _e,
      _f = _a.value,
      value = _f === void 0 ? '' : _f,
      _g = _a.isReadOnly,
      isReadOnly = _g === void 0 ? false : _g,
      LeftIcon = _a.leftIcon,
      RightIcon = _a.rightIcon,
      onChange = _a.onChange;
  var handleChange = React.useCallback(function (event) {
    if (!isReadOnly && onChange) {
      onChange({
        fieldName: fieldName,
        value: event.target.value
      });
    }
  }, [isReadOnly, fieldName, onChange]);
  return React__default['default'].createElement("div", {
    className: cn__default['default'](CLASS_NAME$e + "__wrapper", className)
  }, LeftIcon && React__default['default'].createElement(LeftIcon, {
    className: cn__default['default'](CLASS_NAME$e + "__icon", (_b = {}, _b[CLASS_NAME$e + "__icon--withLeftIcon"] = LeftIcon, _b))
  }), React__default['default'].createElement("input", {
    className: cn__default['default']("" + CLASS_NAME$e, (_c = {}, _c[CLASS_NAME$e + "--withLeftIcon"] = LeftIcon, _c[CLASS_NAME$e + "--withRightIcon"] = RightIcon, _c)),
    id: id,
    onChange: handleChange,
    type: "text",
    value: value
  }), RightIcon && React__default['default'].createElement(RightIcon, {
    className: cn__default['default'](CLASS_NAME$e + "__icon", (_d = {}, _d[CLASS_NAME$e + "__icon--withRightIcon"] = RightIcon, _d))
  }));
};

var css_248z$f = ".SelectButton {\n  align-items: center;\n  background: #05051D;\n  border-radius: 8px;\n  border: none;\n  color: #fff;\n  display: flex;\n  padding: 10px 12px;\n  position: relative;\n  width: 100%;\n  justify-content: space-between;\n  font-size: 12px;\n  line-height: 14px; }\n  .SelectButton__text {\n    display: flex;\n    width: calc(100% - 32px); }\n  .SelectButton__arrow {\n    align-items: center;\n    display: flex;\n    height: 100%;\n    justify-content: flex-end;\n    width: 20px; }\n    .SelectButton__arrow--isOpen {\n      transform: rotate(180deg); }\n";
styleInject(css_248z$f);

var SelectArrowIcon = React.memo(function () {
  return React__default['default'].createElement("svg", {
    fill: "none",
    height: "4",
    viewBox: "0 0 8 4",
    width: "8",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default['default'].createElement("path", {
    d: "M8 1L7 0L4 1L1 0L0 1L4 4L8 1Z",
    fill: "white"
  }));
});

var CLASS_NAME$d = 'SelectButton';
var SelectButton = function (_a) {
  var _b = _a.text,
      text = _b === void 0 ? '' : _b,
      _c = _a.placeholder,
      placeholder = _c === void 0 ? '' : _c,
      _d = _a.className,
      className = _d === void 0 ? '' : _d,
      withArrow = _a.withArrow,
      Icon = _a.icon;
  return React__default['default'].createElement("button", {
    className: cn__default['default'](CLASS_NAME$d, className),
    type: "button"
  }, Icon && React__default['default'].createElement(Icon, null), React__default['default'].createElement("span", {
    className: cn__default['default'](CLASS_NAME$d + "__text")
  }, text || placeholder), withArrow && React__default['default'].createElement("span", {
    className: cn__default['default'](CLASS_NAME$d + "__arrow")
  }, React__default['default'].createElement(SelectArrowIcon, null)));
};

var css_248z$e = ".SelectDropdownItem {\n  align-items: center;\n  background: #18182E;\n  border: none;\n  box-sizing: border-box;\n  color: #fff;\n  display: flex;\n  width: 100%;\n  padding: 12px; }\n  .SelectDropdownItem--active {\n    background-color: #FF00D0; }\n";
styleInject(css_248z$e);

var CLASS_NAME$c = 'SelectDropdownItem';
var SelectDropdownItem = function (_a) {
  var _b;

  var _c = _a.selectedId,
      selectedId = _c === void 0 ? '' : _c,
      fieldName = _a.fieldName,
      option = _a.option,
      onChange = _a.onChange;
  var handleChange = React.useCallback(function (event) {
    onChange({
      event: event,
      value: option,
      fieldName: fieldName
    });
  }, [fieldName, option, onChange]);
  var isSelected = React.useMemo(function () {
    return typeof option === 'string' ? selectedId === option : selectedId === option.id;
  }, [option, selectedId]);
  var text = React.useMemo(function () {
    return typeof option === 'string' ? selectedId === option : selectedId === option.label;
  }, [option, selectedId]);
  return React__default['default'].createElement("button", {
    className: cn__default['default']("" + CLASS_NAME$c, (_b = {}, _b[CLASS_NAME$c + "--active"] = isSelected, _b)),
    onClick: handleChange,
    type: "button"
  }, text);
};

var css_248z$d = ".SelectDropdown {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 200px;\n  height: 200px;\n  background: #18182E;\n  border: 1px solid #05051D;\n  box-sizing: border-box;\n  overflow-y: auto;\n  border-radius: 8px; }\n";
styleInject(css_248z$d);

var CLASS_NAME$b = 'SelectDropdown';
var SelectDropdown = function (_a) {
  var _b = _a.className,
      className = _b === void 0 ? '' : _b,
      fieldName = _a.fieldName,
      _c = _a.selectedId,
      selectedId = _c === void 0 ? '' : _c,
      options = _a.options,
      onChange = _a.onChange;
  return React__default['default'].createElement("div", {
    className: cn__default['default'](CLASS_NAME$b, className)
  }, options.map(function (option) {
    return React__default['default'].createElement(SelectDropdownItem, {
      fieldName: fieldName,
      key: typeof option === 'string' ? option : option.id,
      onChange: onChange,
      option: option,
      selectedId: selectedId
    });
  }));
};

var css_248z$c = "";
styleInject(css_248z$c);

var Select = function (_a) {
  var _b = _a.selected,
      selected = _b === void 0 ? {
    id: '',
    label: ''
  } : _b,
      fieldName = _a.fieldName,
      placeholder = _a.placeholder,
      options = _a.options,
      icon = _a.icon,
      _c = _a.withArrow,
      withArrow = _c === void 0 ? false : _c,
      _d = _a.buttonClassName,
      buttonClassName = _d === void 0 ? '' : _d,
      _e = _a.dropdownClassName,
      dropdownClassName = _e === void 0 ? '' : _e,
      onChange = _a.onChange;
  var control = React.useMemo(function () {
    return React__default['default'].createElement(SelectButton, {
      className: buttonClassName,
      icon: icon,
      placeholder: placeholder,
      text: typeof selected === 'string' ? selected : selected.label,
      withArrow: withArrow
    });
  }, [icon, withArrow, selected, placeholder, buttonClassName]);
  var dropdown = React.useMemo(function () {
    return React__default['default'].createElement(SelectDropdown, {
      className: dropdownClassName,
      fieldName: fieldName,
      onChange: onChange,
      options: options,
      selectedId: typeof selected === 'string' ? selected : selected.id
    });
  }, [selected, fieldName, options, onChange, dropdownClassName]);
  return (// <div className={cn(CLASS_NAME)}>
    React__default['default'].createElement(Drop, {
      control: control,
      dropdown: dropdown
    }) // </div>

  );
};

var css_248z$b = "";
styleInject(css_248z$b);

var SliderInput = React.memo(function (_a) {
  var className = _a.className,
      max = _a.max,
      min = _a.min,
      onChange = _a.onChange,
      onMouseUp = _a.onMouseUp,
      onMouseUpOrTouchEnd = _a.onMouseUpOrTouchEnd,
      onTouchEnd = _a.onTouchEnd,
      step = _a.step,
      value = _a.value;
      _a.customThumb;
      var rest = __rest(_a, ["className", "max", "min", "onChange", "onMouseUp", "onMouseUpOrTouchEnd", "onTouchEnd", "step", "value", "customThumb"]);

  var handleOnChange = React.useCallback(function (event) {
    return onChange({
      event: event,
      value: event.target.valueAsNumber
    });
  }, [onChange]);
  var handleOnMouseUp = React.useCallback(function (event) {
    onMouseUpOrTouchEnd({
      event: event
    });

    if (onMouseUp) {
      onMouseUp({
        event: event
      });
    }
  }, [onMouseUp, onMouseUpOrTouchEnd]);
  var handleOnTouchEnd = React.useCallback(function (event) {
    onMouseUpOrTouchEnd({
      event: event
    });

    if (onTouchEnd) {
      onTouchEnd({
        event: event
      });
    }
  }, [onTouchEnd, onMouseUpOrTouchEnd]);
  return React__default['default'].createElement(React__default['default'].Fragment, null, React__default['default'].createElement("input", __assign({
    className: className,
    max: max,
    min: min,
    onChange: handleOnChange,
    onMouseUp: handleOnMouseUp,
    onTouchEnd: handleOnTouchEnd,
    step: step,
    type: "range",
    value: value
  }, rest)));
});

var css_248z$a = ".Slider {\n  -webkit-appearance: none;\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0;\n  line-height: 1.5;\n  font: 1rem/1 arial, sans-serif;\n  color: #ced4da;\n  background-clip: padding-box;\n  background: transparent;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  position: relative; }\n  .Slider::-moz-focus-outer {\n    outline: none;\n    border: none; }\n  .Slider::-moz-focusring {\n    outline: none; }\n  .Slider--isDisabled::-webkit-slider-thumb {\n    background: #e9e9e9;\n    cursor: not-allowed; }\n  .Slider--isDisabled::-moz-range-thumb {\n    background: #e9e9e9;\n    cursor: not-allowed; }\n  .Slider--isDisabled::-ms-thumb {\n    background: #e9e9e9;\n    cursor: not-allowed; }\n  .Slider--s {\n    height: calc(1.5em + 0.5rem + 2px);\n    padding: 0.25rem 0;\n    font-size: 0.875rem; }\n    .Slider--s::-webkit-slider-thumb {\n      height: 16px;\n      width: 16px;\n      background: #343a40;\n      margin-top: -6px; }\n    .Slider--s::-moz-range-thumb {\n      height: 16px;\n      width: 16px;\n      background: #343a40; }\n    .Slider--s::-ms-thumb {\n      height: 16px;\n      width: 16px;\n      background: #343a40;\n      margin-top: 0; }\n  .Slider--l {\n    height: calc(1.5em + 1rem + 2px);\n    padding: 0.5rem 0;\n    font-size: 1.25rem; }\n    .Slider--l::-webkit-slider-thumb {\n      height: 24px;\n      width: 24px;\n      margin-top: -9px; }\n    .Slider--l::-moz-range-thumb {\n      height: 24px;\n      width: 24px; }\n    .Slider--l::-ms-thumb {\n      height: 24px;\n      width: 24px;\n      margin-top: 0; }\n    .Slider--l::-webkit-slider-runnable-track {\n      height: 6px;\n      border-radius: 3px; }\n    .Slider--l::-moz-range-track {\n      height: 6px;\n      border-radius: 3px; }\n    .Slider--l::-ms-track {\n      height: 6px;\n      border-radius: 3px; }\n    .Slider--l::-ms-fill-lower {\n      height: 6px;\n      border-radius: 3px; }\n  .Slider::-webkit-slider-runnable-track {\n    box-sizing: border-box;\n    border: none;\n    height: 4px;\n    background: #ced4da;\n    border-radius: 2px; }\n  .Slider::-moz-range-track {\n    box-sizing: border-box;\n    border: none;\n    height: 4px;\n    background: #ced4da;\n    border-radius: 2px; }\n  .Slider::-ms-track {\n    box-sizing: border-box;\n    border: none;\n    height: 4px;\n    background: #ced4da;\n    border-radius: 2px; }\n  .Slider::-ms-fill-lower {\n    box-sizing: border-box;\n    border: none;\n    height: 4px;\n    background: #ced4da;\n    border-radius: 2px; }\n  .Slider.Slider--primary::-webkit-slider-thumb {\n    background: #007bff; }\n  .Slider.Slider--primary::-moz-range-thumb {\n    background: #007bff; }\n  .Slider.Slider--primary::-ms-thumb {\n    background: #007bff; }\n  .Slider.Slider--primary:not(.disabled):focus::-webkit-slider-thumb, .Slider.Slider--primary:not(.disabled):active::-webkit-slider-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .Slider.Slider--primary:not(.disabled):focus::-moz-range-thumb, .Slider.Slider--primary:not(.disabled):active::-moz-range-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .Slider.Slider--primary:not(.disabled):focus::-ms-thumb, .Slider.Slider--primary:not(.disabled):active::-ms-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .Slider.Slider--secondary::-webkit-slider-thumb {\n    background: #6c757d; }\n  .Slider.Slider--secondary::-moz-range-thumb {\n    background: #6c757d; }\n  .Slider.Slider--secondary::-ms-thumb {\n    background: #6c757d; }\n  .Slider.Slider--secondary:not(.disabled):focus::-webkit-slider-thumb, .Slider.Slider--secondary:not(.disabled):active::-webkit-slider-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.25); }\n  .Slider.Slider--secondary:not(.disabled):focus::-moz-range-thumb, .Slider.Slider--secondary:not(.disabled):active::-moz-range-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.25); }\n  .Slider.Slider--secondary:not(.disabled):focus::-ms-thumb, .Slider.Slider--secondary:not(.disabled):active::-ms-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.25); }\n  .Slider.Slider--success::-webkit-slider-thumb {\n    background: #28a745; }\n  .Slider.Slider--success::-moz-range-thumb {\n    background: #28a745; }\n  .Slider.Slider--success::-ms-thumb {\n    background: #28a745; }\n  .Slider.Slider--success:not(.disabled):focus::-webkit-slider-thumb, .Slider.Slider--success:not(.disabled):active::-webkit-slider-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n  .Slider.Slider--success:not(.disabled):focus::-moz-range-thumb, .Slider.Slider--success:not(.disabled):active::-moz-range-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n  .Slider.Slider--success:not(.disabled):focus::-ms-thumb, .Slider.Slider--success:not(.disabled):active::-ms-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n  .Slider.Slider--danger::-webkit-slider-thumb {\n    background: #dc3545; }\n  .Slider.Slider--danger::-moz-range-thumb {\n    background: #dc3545; }\n  .Slider.Slider--danger::-ms-thumb {\n    background: #dc3545; }\n  .Slider.Slider--danger:not(.disabled):focus::-webkit-slider-thumb, .Slider.Slider--danger:not(.disabled):active::-webkit-slider-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n  .Slider.Slider--danger:not(.disabled):focus::-moz-range-thumb, .Slider.Slider--danger:not(.disabled):active::-moz-range-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n  .Slider.Slider--danger:not(.disabled):focus::-ms-thumb, .Slider.Slider--danger:not(.disabled):active::-ms-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n  .Slider.Slider--warning::-webkit-slider-thumb {\n    background: #ffc107; }\n  .Slider.Slider--warning::-moz-range-thumb {\n    background: #ffc107; }\n  .Slider.Slider--warning::-ms-thumb {\n    background: #ffc107; }\n  .Slider.Slider--warning:not(.disabled):focus::-webkit-slider-thumb, .Slider.Slider--warning:not(.disabled):active::-webkit-slider-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25); }\n  .Slider.Slider--warning:not(.disabled):focus::-moz-range-thumb, .Slider.Slider--warning:not(.disabled):active::-moz-range-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25); }\n  .Slider.Slider--warning:not(.disabled):focus::-ms-thumb, .Slider.Slider--warning:not(.disabled):active::-ms-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25); }\n  .Slider.Slider--info::-webkit-slider-thumb {\n    background: #17a2b8; }\n  .Slider.Slider--info::-moz-range-thumb {\n    background: #17a2b8; }\n  .Slider.Slider--info::-ms-thumb {\n    background: #17a2b8; }\n  .Slider.Slider--info:not(.disabled):focus::-webkit-slider-thumb, .Slider.Slider--info:not(.disabled):active::-webkit-slider-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.25); }\n  .Slider.Slider--info:not(.disabled):focus::-moz-range-thumb, .Slider.Slider--info:not(.disabled):active::-moz-range-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.25); }\n  .Slider.Slider--info:not(.disabled):focus::-ms-thumb, .Slider.Slider--info:not(.disabled):active::-ms-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.25); }\n  .Slider.Slider--light::-webkit-slider-thumb {\n    background: #f8f9fa; }\n  .Slider.Slider--light::-moz-range-thumb {\n    background: #f8f9fa; }\n  .Slider.Slider--light::-ms-thumb {\n    background: #f8f9fa; }\n  .Slider.Slider--light:not(.disabled):focus::-webkit-slider-thumb, .Slider.Slider--light:not(.disabled):active::-webkit-slider-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.25); }\n  .Slider.Slider--light:not(.disabled):focus::-moz-range-thumb, .Slider.Slider--light:not(.disabled):active::-moz-range-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.25); }\n  .Slider.Slider--light:not(.disabled):focus::-ms-thumb, .Slider.Slider--light:not(.disabled):active::-ms-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.25); }\n  .Slider.Slider--dark::-webkit-slider-thumb {\n    background: #343a40; }\n  .Slider.Slider--dark::-moz-range-thumb {\n    background: #343a40; }\n  .Slider.Slider--dark::-ms-thumb {\n    background: #343a40; }\n  .Slider.Slider--dark:not(.disabled):focus::-webkit-slider-thumb, .Slider.Slider--dark:not(.disabled):active::-webkit-slider-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.25); }\n  .Slider.Slider--dark:not(.disabled):focus::-moz-range-thumb, .Slider.Slider--dark:not(.disabled):active::-moz-range-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.25); }\n  .Slider.Slider--dark:not(.disabled):focus::-ms-thumb, .Slider.Slider--dark:not(.disabled):active::-ms-thumb {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.25); }\n  .Slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    box-sizing: border-box;\n    border: none;\n    border-radius: 50%;\n    background: #007bff;\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n    transition: box-shadow 0.5s ease;\n    margin-top: -8px; }\n  .Slider::-moz-range-thumb {\n    -webkit-appearance: none;\n    box-sizing: border-box;\n    border: none;\n    border-radius: 50%;\n    background: #007bff;\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n    transition: box-shadow 0.5s ease; }\n  .Slider::-ms-thumb {\n    -webkit-appearance: none;\n    box-sizing: border-box;\n    border: none;\n    border-radius: 50%;\n    background: #007bff;\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n    transition: box-shadow 0.5s ease;\n    margin-top: 0; }\n";
styleInject(css_248z$a);

var CLASS_NAME$a = 'Slider';
var Slider = React.forwardRef(function (_a, ref) {
  var _b, _c;

  var _d = _a.size,
      size = _d === void 0 ? 'l' : _d,
      _e = _a.isDisabled,
      isDisabled = _e === void 0 ? false : _e,
      value = _a.value,
      _f = _a.onChange,
      onChange = _f === void 0 ? function () {} : _f,
      _g = _a.onAfterChange,
      onAfterChange = _g === void 0 ? function () {} : _g,
      _h = _a.min,
      min = _h === void 0 ? 0 : _h,
      _j = _a.max,
      max = _j === void 0 ? 100 : _j,
      _k = _a.step,
      step = _k === void 0 ? 1 : _k,
      _l = _a.variant,
      variant = _l === void 0 ? 'primary' : _l,
      className = _a.className,
      _m = _a.customThumb,
      customThumb = _m === void 0 ? null : _m;
  var onMouseUpOrTouchEnd = React.useCallback(function (_a) {
    var event = _a.event;

    if (value !== event.target.value) {
      onAfterChange({
        event: event,
        value: event.target.valueAsNumber
      });
    }

    onChange({
      event: event,
      value: event.target.value
    });
  }, [value, onAfterChange, onChange]);
  return React__default['default'].createElement("div", {
    className: cn__default['default'](CLASS_NAME$a + "__wrap", (_b = {}, _b[CLASS_NAME$a + "__wrap--" + size] = size, _b))
  }, React__default['default'].createElement(SliderInput, {
    className: cn__default['default'](CLASS_NAME$a, (_c = {}, _c[CLASS_NAME$a + "--" + size] = size, _c[CLASS_NAME$a + "--isDisabled"] = isDisabled, _c[CLASS_NAME$a + "--" + variant] = variant, _c), className),
    customThumb: customThumb,
    isDisabled: isDisabled,
    max: max,
    min: min,
    onChange: onChange,
    onMouseUpOrTouchEnd: onMouseUpOrTouchEnd,
    ref: ref,
    step: step,
    value: value
  }));
});

var css_248z$9 = ".Tab {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  width: 160px;\n  height: 40px;\n  background-color: #ff00d0;\n  border-radius: 8px 8px 0px 0px;\n  border: none;\n  opacity: 0.5;\n  color: #fff; }\n  .Tab--active {\n    opacity: 1; }\n";
styleInject(css_248z$9);

var CLASS_NAME$9 = 'Tab';
var Tab = function (_a) {
  var _b;

  var id = _a.id,
      text = _a.text,
      activeTab = _a.activeTab,
      onChangeTab = _a.onChangeTab;
  var handleChange = React.useCallback(function () {
    onChangeTab({
      id: id
    });
  }, [id, onChangeTab]);
  return React__default['default'].createElement("button", {
    className: cn__default['default'](CLASS_NAME$9, (_b = {}, _b[CLASS_NAME$9 + "--active"] = activeTab === id, _b)),
    onClick: handleChange,
    type: "button"
  }, text);
};

var css_248z$8 = ".Tabs {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  width: 160px;\n  height: 40px; }\n";
styleInject(css_248z$8);

var CLASS_NAME$8 = 'Tabs';
var Tabs = function (_a) {
  var tabs = _a.tabs,
      activeTab = _a.activeTab,
      onChange = _a.onChange;
  return React__default['default'].createElement("div", {
    className: cn__default['default'](CLASS_NAME$8)
  }, tabs.map(function (_a) {
    var id = _a.id,
        text = _a.text;
    return React__default['default'].createElement(Tab, {
      activeTab: activeTab,
      id: id,
      key: id,
      onChangeTab: onChange,
      text: text
    });
  }));
};

var RANGE_MIN_VALUE = '0';
var RANGE_MAX_VALUE = '14';
var RANGE_GAP = 6;
var SLIDER_VALUES = [{
  hour: 8,
  hourText: '8:00',
  isVisible: true
}, {
  hour: 9,
  hourText: '9:00',
  isVisible: false
}, {
  hour: 10,
  hourText: '10:00',
  isVisible: true
}, {
  hour: 11,
  hourText: '11:00',
  isVisible: false
}, {
  hour: 12,
  hourText: '12:00',
  isVisible: true
}, {
  hour: 13,
  hourText: '13:00',
  isVisible: false
}, {
  hour: 14,
  hourText: '14:00',
  isVisible: true
}, {
  hour: 15,
  hourText: '15:00',
  isVisible: false
}, {
  hour: 16,
  hourText: '16:00',
  isVisible: true
}, {
  hour: 17,
  hourText: '17:00',
  isVisible: false
}, {
  hour: 18,
  hourText: '18:00',
  isVisible: true
}, {
  hour: 19,
  hourText: '19:00',
  isVisible: false
}, {
  hour: 20,
  hourText: '20:00',
  isVisible: true
}, {
  hour: 21,
  hourText: '21:00',
  isVisible: false
}, {
  hour: 22,
  hourText: '22:00',
  isVisible: true
}];
var RANGE_REVERSE_VALUES = ['14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
var RANGE_WIDTH_IN_PERCENT = 96;

var sumRange = function (_a) {
  var firstVal = _a.firstVal,
      secondVal = _a.secondVal,
      isFirst = _a.isFirst;
  var firstValNum = Number(firstVal);
  var secondValNum = Number(secondVal);
  var firstRange = secondValNum - RANGE_GAP;
  var secondRange = firstValNum + RANGE_GAP;

  if (isFirst && firstValNum >= firstRange) {
    return {
      firstRange: String(firstRange),
      secondRange: secondVal
    };
  }

  if (!isFirst && secondValNum <= secondRange) {
    return {
      firstRange: firstVal,
      secondRange: String(secondRange)
    };
  }

  return {
    firstRange: firstVal,
    secondRange: secondVal
  };
};

var css_248z$7 = ".SliderThumb {\n  background-color: #18182e;\n  border-radius: 50%;\n  height: 16px;\n  transform: translate(6px, -6px);\n  width: 16px;\n  z-index: 2; }\n  .SliderThumb--isMobile {\n    background: transparent; }\n  .SliderThumb:last-child {\n    transform: translate(-10px, -6px); }\n  .SliderThumb__tooltip {\n    align-items: center;\n    background: #18182e;\n    border-radius: 4px;\n    display: flex;\n    justify-content: center;\n    min-height: 32px;\n    min-width: 60px;\n    position: relative;\n    transform: translate(-22px, -52px); }\n    .SliderThumb__tooltip--isMobile {\n      display: none; }\n    .SliderThumb__tooltip::before {\n      background: #18182e;\n      bottom: -6px;\n      content: '';\n      height: 12px;\n      left: 50%;\n      position: absolute;\n      transform: translateX(-6px) rotate(45deg);\n      width: 12px; }\n\n@media (max-width: 1024px) {\n  .SliderThumb:last-child {\n    transform: translate(-8px, -6px); }\n  .SliderThumb__tooltip {\n    display: none; }\n    .SliderThumb__tooltip--isMobile {\n      display: flex;\n      min-width: 115px;\n      transform: translate(-60px, -52px); } }\n";
styleInject(css_248z$7);

var CLASS_NAME$7 = 'SliderThumb';
var SliderThumb = React.memo(function (_a) {
  var _b, _c;

  var tooltipText = _a.tooltipText,
      isMobile = _a.isMobile;
  return React__default['default'].createElement("div", {
    className: cn__default['default'](CLASS_NAME$7, (_b = {}, _b[CLASS_NAME$7 + "--isMobile"] = isMobile, _b))
  }, React__default['default'].createElement("div", {
    className: cn__default['default'](CLASS_NAME$7 + "__tooltip", (_c = {}, _c[CLASS_NAME$7 + "__tooltip--isMobile"] = isMobile, _c))
  }, tooltipText));
});

var css_248z$6 = ".TimeIntervelView {\n  padding: 24px 0;\n  position: relative; }\n  .TimeIntervelView__range-input {\n    appearance: none;\n    background: transparent;\n    height: 4px;\n    left: 1.7%;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    width: 96%;\n    z-index: 3; }\n    .TimeIntervelView__range-input::-webkit-slider-thumb {\n      appearance: none;\n      height: 30px;\n      pointer-events: all;\n      width: 30px; }\n    .TimeIntervelView__range-input::-moz-range-thumb {\n      appearance: none;\n      height: 30px;\n      pointer-events: all;\n      width: 30px; }\n  .TimeIntervelView__slider {\n    background: #d5d5d5;\n    border-radius: 4px;\n    height: 4px;\n    width: 100%; }\n  .TimeIntervelView__track {\n    background: #18182e;\n    display: flex;\n    height: 4px;\n    justify-content: space-between;\n    position: absolute;\n    z-index: 2; }\n    .TimeIntervelView__track::before, .TimeIntervelView__track::after {\n      background: #d5d5d5;\n      content: '';\n      height: 4px;\n      position: absolute;\n      width: 16px; }\n    .TimeIntervelView__track::after {\n      right: 0;\n      width: 22px; }\n  .TimeIntervelView__time {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n    width: 100%; }\n  .TimeIntervelView__hour-line {\n    position: relative; }\n    .TimeIntervelView__hour-line::before {\n      background: #d5d5d5;\n      content: '';\n      height: 8px;\n      left: 50%;\n      position: absolute;\n      top: -12px;\n      transform: translateX(-1px);\n      width: 2px;\n      z-index: 1; }\n\n@media (max-width: 1024px) {\n  .TimeIntervelView__time {\n    justify-content: space-around; }\n  .TimeIntervelView__hour-text {\n    display: none; } }\n";
styleInject(css_248z$6);

var CLASS_NAME$6 = 'TimeIntervelView';
var TimeIntervelView = React.memo(function (_a) {
  var firstVal = _a.firstVal,
      secondVal = _a.secondVal,
      trackRef = _a.trackRef,
      firstTooltipText = _a.firstTooltipText,
      secondTooltipText = _a.secondTooltipText,
      mobileTooltipText = _a.mobileTooltipText,
      onChangeFirst = _a.onChangeFirst,
      onChangeSecond = _a.onChangeSecond;
  return React__default['default'].createElement("div", {
    className: cn__default['default'](CLASS_NAME$6)
  }, React__default['default'].createElement("input", {
    className: cn__default['default'](CLASS_NAME$6 + "__range-input"),
    max: RANGE_MAX_VALUE,
    min: RANGE_MIN_VALUE,
    onChange: onChangeFirst,
    type: "range",
    value: firstVal
  }), React__default['default'].createElement("input", {
    className: cn__default['default'](CLASS_NAME$6 + "__range-input"),
    max: RANGE_MAX_VALUE,
    min: RANGE_MIN_VALUE,
    onChange: onChangeSecond,
    type: "range",
    value: secondVal
  }), React__default['default'].createElement("div", {
    className: cn__default['default'](CLASS_NAME$6 + "__slider")
  }, React__default['default'].createElement("div", {
    className: cn__default['default'](CLASS_NAME$6 + "__track"),
    ref: trackRef
  }, React__default['default'].createElement(SliderThumb, {
    tooltipText: firstTooltipText
  }), React__default['default'].createElement(SliderThumb, {
    isMobile: true,
    tooltipText: mobileTooltipText
  }), React__default['default'].createElement(SliderThumb, {
    tooltipText: secondTooltipText
  }))), React__default['default'].createElement("div", {
    className: cn__default['default'](CLASS_NAME$6 + "__time")
  }, SLIDER_VALUES.map(function (_a) {
    var hourText = _a.hourText,
        isVisible = _a.isVisible;
    return React__default['default'].createElement("div", {
      className: cn__default['default'](CLASS_NAME$6 + "__hour-line"),
      key: hourText
    }, isVisible && React__default['default'].createElement("div", {
      className: cn__default['default'](CLASS_NAME$6 + "__hour-text")
    }, hourText));
  })));
});

var sumPercent = function (_a) {
  var value = _a.value,
      maxValue = _a.maxValue,
      rangeWidth = _a.rangeWidth;
  return Math.abs(Number(value) / Number(maxValue) * rangeWidth);
};

var sumRangeWidth = function (_a) {
  var isFirst = _a.isFirst,
      firstRange = _a.firstRange,
      secondRange = _a.secondRange,
      isInit = _a.isInit;
  var value = isFirst ? firstRange : secondRange;
  var left = '';
  var right = '';

  if (isFirst) {
    var leftPercent = sumPercent({
      value: value,
      maxValue: RANGE_MAX_VALUE,
      rangeWidth: RANGE_WIDTH_IN_PERCENT
    });
    left = leftPercent + "%";
  } else {
    var rightPercent = sumPercent({
      value: RANGE_REVERSE_VALUES[Number(value)],
      maxValue: RANGE_MAX_VALUE,
      rangeWidth: RANGE_WIDTH_IN_PERCENT
    });
    right = rightPercent + "%";
  }

  if (isInit) {
    var leftPercent = sumPercent({
      value: firstRange,
      maxValue: RANGE_MAX_VALUE,
      rangeWidth: RANGE_WIDTH_IN_PERCENT
    });
    var rightPercent = sumPercent({
      value: RANGE_REVERSE_VALUES[Number(secondRange)],
      maxValue: RANGE_MAX_VALUE,
      rangeWidth: RANGE_WIDTH_IN_PERCENT
    });
    left = leftPercent + "%";
    right = rightPercent + "%";
  }

  return {
    left: left,
    right: right
  };
};

var TimeIntervel = React.memo(function (_a) {
  _a.id;
      var onChange = _a.onChange;

  var _c = React.useState('4'),
      firstVal = _c[0],
      setFirstVal = _c[1]; // 12 часов


  var _d = React.useState('10'),
      secondVal = _d[0],
      setSecondVal = _d[1]; // 18 часов


  var trackRef = React.useRef(null);
  React.useEffect(function () {
    if (trackRef && trackRef.current) {
      var _a = sumRangeWidth({
        firstRange: firstVal,
        secondRange: secondVal,
        trackRef: trackRef,
        isInit: true
      }),
          left = _a.left,
          right = _a.right;

      trackRef.current.style.left = left;
      trackRef.current.style.right = right;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  var changeRange = React.useCallback(function (_a) {
    var firstRange = _a.firstRange,
        secondRange = _a.secondRange;
    setFirstVal(firstRange);
    setSecondVal(secondRange);
    onChange({
      hourFrom: SLIDER_VALUES[firstRange].hour,
      hourTo: SLIDER_VALUES[secondRange].hour
    });
  }, [onChange]);
  var handleChangeFirst = React.useCallback(function (_a) {
    var value = _a.target.value;

    var _b = sumRange({
      firstVal: value,
      secondVal: secondVal,
      isFirst: true
    }),
        firstRange = _b.firstRange,
        secondRange = _b.secondRange;

    var _c = sumRangeWidth({
      trackRef: trackRef,
      isFirst: true,
      firstRange: firstRange,
      secondRange: secondRange
    }),
        left = _c.left,
        right = _c.right;

    if (trackRef.current) {
      trackRef.current.style.left = left;
      trackRef.current.style.right = right;
    }

    changeRange({
      firstRange: firstRange,
      secondRange: secondRange
    });
  }, [changeRange, secondVal]);
  var handleChangeSecond = React.useCallback(function (_a) {
    var value = _a.target.value;

    var _b = sumRange({
      firstVal: firstVal,
      secondVal: value,
      isFirst: false
    }),
        firstRange = _b.firstRange,
        secondRange = _b.secondRange;

    var _c = sumRangeWidth({
      trackRef: trackRef,
      firstRange: firstRange,
      secondRange: secondRange
    }),
        left = _c.left,
        right = _c.right;

    if (trackRef.current) {
      trackRef.current.style.left = left;
      trackRef.current.style.right = right;
    }

    changeRange({
      firstRange: firstRange,
      secondRange: secondRange
    });
  }, [changeRange, firstVal]);
  var firstTooltipText = React.useMemo(function () {
    return firstVal ? "\u0441 " + SLIDER_VALUES[firstVal].hourText : '';
  }, [firstVal]);
  var secondTooltipText = React.useMemo(function () {
    return secondVal ? "\u0434\u043E " + SLIDER_VALUES[secondVal].hourText : '';
  }, [secondVal]);
  var mobileTooltipText = React.useMemo(function () {
    return firstTooltipText + " " + secondTooltipText;
  }, [firstTooltipText, secondTooltipText]);
  return React__default['default'].createElement(TimeIntervelView, {
    firstTooltipText: firstTooltipText,
    firstVal: firstVal,
    mobileTooltipText: mobileTooltipText,
    onChangeFirst: handleChangeFirst,
    onChangeSecond: handleChangeSecond,
    secondTooltipText: secondTooltipText,
    secondVal: secondVal,
    trackRef: trackRef
  });
});

var getAllDaysInMonth = function (getDate) {
  var getMonth = getDate.getMonth();
  var year = getDate.getFullYear();
  var date = new Date(year, getMonth, 1);
  var allDaysInMonth = [];

  while (date.getMonth() === getMonth) {
    allDaysInMonth.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return allDaysInMonth;
};

var getDaysOfNextMonth = function (firstDayNextMonth) {
  var countDays;

  if (firstDayNextMonth.getDay() === 0) {
    countDays = 1;
  } else if (firstDayNextMonth.getDay() === 1) {
    countDays = 0;
  } else {
    countDays = 8 - firstDayNextMonth.getDay();
  }

  return Array.from(Array(countDays).keys());
};

var getLocale = function (inDate) {
  var dt = new Date(inDate);
  dt.setDate(dt.getDate() + 1);
  var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC'
  };
  return dt.toLocaleDateString('en', options);
};

var getMonthName = function (lang, monthIndex) {
  var days = {
    ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };
  return days[lang][monthIndex];
};

var getTimeOptions = function (size) {
  return new Array(size).fill(0).map(function (item, index) {
    return {
      id: index,
      label: index < 10 ? "0" + index : "" + index
    };
  });
};

var getWeekDays = function (lang) {
  var days = {
    ru: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  };
  return days[lang];
};

var PATH_LEFT = 'M4.41412 10.0001L10.707 16.293L9.2928 17.7072L0.585693 9.00008L9.2928 0.292969L10.707 1.70718L4.41412 8.00008H18.9999V10.0001H4.41412Z';
var PATH_RIGHT = 'M14.5858 10.0001H0V8.00008H14.5858L8.29289 1.70718L9.70711 0.292969L18.4142 9.00008L9.70711 17.7072L8.29289 16.293L14.5858 10.0001Z';
var IconArrow = React.memo(function (_a) {
  var _b = _a.className,
      className = _b === void 0 ? '' : _b,
      _c = _a.color,
      color = _c === void 0 ? '#d1cfd7' : _c,
      _d = _a.isRight,
      isRight = _d === void 0 ? false : _d;
  return React__default['default'].createElement("svg", {
    className: className,
    height: 24,
    viewBox: "-2 -2 24 24",
    width: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default['default'].createElement("path", {
    clipRule: "evenodd",
    d: isRight ? PATH_RIGHT : PATH_LEFT,
    fill: color,
    fillRule: "evenodd",
    key: isRight ? PATH_RIGHT : PATH_LEFT
  }));
});

var css_248z$5 = ".CalendarHeader {\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  padding: 0 0 10px; }\n  .CalendarHeader__icon {\n    align-items: center;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    height: 100%;\n    justify-content: center;\n    outline: none;\n    padding: 0; }\n    .CalendarHeader__icon:hover {\n      opacity: 0.7; }\n  .CalendarHeader__month-name {\n    line-height: 20px;\n    padding: 0 8px;\n    text-align: center;\n    width: 200px; }\n";
styleInject(css_248z$5);

var CLASS_NAME$5 = 'CalendarHeader';
var cn$5 = classNames__default['default'];
var CalendarHeader = React.memo(function (_a) {
  var month = _a.month,
      onPrevMonth = _a.onPrevMonth,
      onNextMonth = _a.onNextMonth;
  return React__default['default'].createElement("div", {
    className: cn$5("" + CLASS_NAME$5)
  }, React__default['default'].createElement("button", {
    className: cn$5(CLASS_NAME$5 + "__icon"),
    onClick: onPrevMonth,
    type: "button"
  }, React__default['default'].createElement(IconArrow, null)), React__default['default'].createElement("span", {
    className: cn$5(CLASS_NAME$5 + "__month-name")
  }, month), React__default['default'].createElement("button", {
    className: cn$5(CLASS_NAME$5 + "__icon"),
    onClick: onNextMonth,
    type: "button"
  }, React__default['default'].createElement(IconArrow, {
    isRight: true
  })));
});

var css_248z$4 = ".CalendarTime {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  font-weight: 700; }\n  .CalendarTime__selected-time {\n    display: flex;\n    width: 100%;\n    align-self: center;\n    justify-content: center;\n    padding-bottom: 10px; }\n  .CalendarTime__selects {\n    display: flex;\n    overflow: hidden; }\n";
styleInject(css_248z$4);

var css_248z$3 = ".CalendarTimeSelect {\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  height: 100%;\n  width: 50%;\n  box-sizing: border-box; }\n  .CalendarTimeSelect::-webkit-scrollbar {\n    width: 0; }\n  .CalendarTimeSelect__item {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #18182e;\n    color: #d1cfd7;\n    border: none;\n    cursor: pointer; }\n    .CalendarTimeSelect__item--selected {\n      border-radius: 5px;\n      border: 1px solid #fff731; }\n";
styleInject(css_248z$3);

var css_248z$2 = ".CalendarTimeSelectOption {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #18182e;\n  color: #d1cfd7;\n  border: none;\n  cursor: pointer;\n  border: 1px solid transparent; }\n  .CalendarTimeSelectOption--selected {\n    border-radius: 5px;\n    border: 1px solid #fff731; }\n";
styleInject(css_248z$2);

var CLASS_NAME$4 = 'CalendarTimeSelectOption';
var cn$4 = classNames__default['default'];
var CalendarTimeSelectOption = React.memo(function (_a) {
  var _b;

  var refLink = _a.refLink,
      id = _a.id,
      label = _a.label,
      isSelected = _a.isSelected,
      index = _a.index,
      onClick = _a.onClick;
  var refOption = React.useRef(null);
  React.useEffect(function () {
    if (isSelected && refLink.current !== null && refOption.current !== null) {
      var height = refOption.current.getBoundingClientRect().height;
      refLink.current.scrollTo({
        top: index * height
      });
    }
  }, [refLink, index, isSelected]);
  var handleClick = React.useCallback(function () {
    return onClick(Number(id));
  }, [id, onClick]);
  return React__default['default'].createElement("button", {
    className: cn$4("" + CLASS_NAME$4, (_b = {}, _b[CLASS_NAME$4 + "--selected"] = isSelected, _b)),
    key: id,
    onClick: handleClick,
    ref: refOption,
    type: "button"
  }, label);
});

var CLASS_NAME$3 = 'CalendarTimeSelect';
var cn$3 = classNames__default['default'];
var CalendarTimeSelect = function (_a) {
  var options = _a.options,
      value = _a.value,
      onClick = _a.onClick;
  var refLink = React.useRef(null);
  return React__default['default'].createElement("div", {
    className: cn$3("" + CLASS_NAME$3)
  }, options.map(function (_a, index) {
    var id = _a.id,
        label = _a.label;
    return React__default['default'].createElement(CalendarTimeSelectOption, {
      id: id,
      index: index,
      isSelected: Boolean(value === id),
      key: id,
      label: label,
      onClick: onClick,
      refLink: refLink
    });
  }));
};

var CLASS_NAME$2 = 'CalendarTime';
var cn$2 = classNames__default['default'];
var CalendarTime = React.memo(function (_a) {
  var minutes = _a.minutes,
      hours = _a.hours,
      onChange = _a.onChange;
  var hoursOptions = React.useMemo(function () {
    return getTimeOptions(24);
  }, []);
  var minutesOptions = React.useMemo(function () {
    return getTimeOptions(60);
  }, []);
  var handleChangeHours = React.useCallback(function (selected) {
    onChange({
      minutes: minutes,
      hours: selected
    });
  }, [minutes, onChange]);
  var handleChangeMinutes = React.useCallback(function (selected) {
    onChange({
      hours: hours,
      minutes: selected
    });
  }, [hours, onChange]);
  var time = React.useMemo(function () {
    var visibleHours = "" + (hours < 10 ? "0" + hours : hours);
    var visibleMinutes = "" + (minutes < 10 ? "0" + minutes : minutes);
    return visibleHours + " : " + visibleMinutes;
  }, [hours, minutes]);
  return React__default['default'].createElement("div", {
    className: cn$2("" + CLASS_NAME$2)
  }, React__default['default'].createElement("div", {
    className: cn$2(CLASS_NAME$2 + "__selected-time")
  }, time), React__default['default'].createElement("div", {
    className: cn$2(CLASS_NAME$2 + "__selects")
  }, React__default['default'].createElement(CalendarTimeSelect, {
    onClick: handleChangeHours,
    options: hoursOptions,
    value: hours
  }), React__default['default'].createElement(CalendarTimeSelect, {
    onClick: handleChangeMinutes,
    options: minutesOptions,
    value: minutes
  })));
});

var css_248z$1 = ".CalendarDayView {\n  align-items: center;\n  background-color: transparent;\n  font-size: 16px;\n  height: 38px;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  position: relative;\n  width: 38px;\n  border: 1px solid rgba(209, 207, 215, 0.4);\n  color: #d1cfd7; }\n  .CalendarDayView:hover {\n    border: 1px solid #d1cfd7;\n    border-radius: 4px;\n    box-sizing: border-box;\n    cursor: pointer; }\n  .CalendarDayView--lastup {\n    border-top-right-radius: 4px; }\n  .CalendarDayView--firstup {\n    border-top-left-radius: 4px; }\n  .CalendarDayView--lastdown {\n    border-bottom-right-radius: 4px; }\n  .CalendarDayView--firstdown {\n    border-bottom-left-radius: 4px; }\n  .CalendarDayView-now::after {\n    border: 5px solid transparent;\n    border-left: 5px solid #fff731;\n    border-top: 5px solid #fff731;\n    content: '';\n    left: 0;\n    position: absolute;\n    top: 0; }\n  .CalendarDayView-select {\n    font-weight: 700;\n    background-color: rgba(255, 247, 49, 0.2);\n    border: 1px solid #fff731;\n    border-radius: 4px; }\n";
styleInject(css_248z$1);

var cn$1 = classNames__default['default'];
var CLASS_NAME$1 = 'CalendarDayView';
var CalendarDayView = React.memo(function (_a) {
  var _b;

  var day = _a.day,
      disabled = _a.disabled,
      onClick = _a.onClick,
      index = _a.index,
      length = _a.length,
      value = _a.value;
  var isNow = React.useMemo(function () {
    return day.getTime() === new Date().getTime();
  }, [day]);
  var handleSelect = React.useCallback(function (event) {
    onClick({
      event: event,
      value: day
    });
  }, [day, onClick]);
  return React__default['default'].createElement("button", {
    className: cn$1("" + CLASS_NAME$1, (_b = {}, _b[CLASS_NAME$1 + "--now"] = isNow, _b[CLASS_NAME$1 + "-select"] = getLocale(value) === getLocale(day), _b[CLASS_NAME$1 + "--firstup"] = index === 0 || day.getDate() >= 2 && day.getDate() < 8 && day.getDay() === 1, _b[CLASS_NAME$1 + "--lastup"] = day.getDay() === 0 && index < 7, _b[CLASS_NAME$1 + "--lastdown"] = day.getDate() === length || day.getDate() > 24 && day.getDay() === 0, _b[CLASS_NAME$1 + "--firstdown"] = day.getDate() === length && day.getDay() === 1 || day.getDate() > 24 && day.getDay() === 1, _b)),
    disabled: disabled,
    onClick: handleSelect,
    type: "button",
    value: "" + day
  }, day.getDate());
});

var css_248z = ".Calendar {\n  border-radius: 4px;\n  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.04);\n  font-size: 16px;\n  list-style-type: none;\n  margin: 0;\n  padding: 15px 15px 19px 15px;\n  background-color: #18182e;\n  border: 1px solid #4e4e53;\n  color: #d1cfd7;\n  width: 300px;\n  box-sizing: border-box;\n  height: 320px; }\n  .Calendar--withTime {\n    display: flex;\n    justify-content: space-between;\n    width: 380px; }\n  .Calendar__month {\n    box-sizing: border-box; }\n    .Calendar__month--withTime {\n      width: 270px; }\n  .Calendar__week {\n    display: table; }\n    .Calendar__week-name {\n      display: table-cell;\n      height: 38px;\n      text-align: center;\n      vertical-align: middle;\n      width: 38px; }\n      .Calendar__week-name-end {\n        color: rgba(209, 207, 215, 0.4); }\n  .Calendar__day-empty {\n    background: transparent;\n    border: none;\n    color: #d1cfd7;\n    font-size: 16px;\n    width: 38px; }\n  .Calendar__time {\n    width: calc(100% - 280px); }\n";
styleInject(css_248z);

var CLASS_NAME = 'Calendar';
var cn = classNames__default['default'];
var Calendar = React.memo(function (_a) {
  var _b, _c;

  var _d = _a.disabled,
      disabled = _d === void 0 ? false : _d,
      id = _a.id,
      _e = _a.lang,
      lang = _e === void 0 ? 'en' : _e,
      onChange = _a.onChange,
      value = _a.value,
      _f = _a.withTime,
      withTime = _f === void 0 ? false : _f;

  var _g = React.useState(new Date()),
      getDate = _g[0],
      setDate = _g[1];

  var now = new Date();
  now.setHours(0, 0, 0, 0);
  var month = React.useMemo(function () {
    return getMonthName(lang, getDate.getMonth()) + " " + getDate.getFullYear();
  }, [lang, getDate]);
  var weekDays = React.useMemo(function () {
    return getWeekDays(lang);
  }, [lang]);
  var allDaysInMonth = React.useMemo(function () {
    return getAllDaysInMonth(getDate);
  }, [getDate]);
  var prevfirstDayOnWeek = new Array(allDaysInMonth[0] && allDaysInMonth[0].getDay() === 0 ? 6 : allDaysInMonth[0].getDay() - 1).fill(1).map(function (item, index) {
    return item + index;
  });
  var prevlastDayPrevMonth = new Date(allDaysInMonth[0].getFullYear(), allDaysInMonth[0].getMonth(), 0);
  var firstWeelOfnextMonth = React.useMemo(function () {
    return getDaysOfNextMonth(new Date(allDaysInMonth[0].getFullYear(), allDaysInMonth[0].getMonth() + 1, 1));
  }, [allDaysInMonth]);
  var handlePrevMonth = React.useCallback(function () {
    var prevMont = getDate.setMonth(getDate.getMonth() - 1);
    setDate(new Date(prevMont));
  }, [getDate]);
  var handleNextMonth = React.useCallback(function () {
    var nextMont = getDate.setMonth(getDate.getMonth() + 1);
    setDate(new Date(nextMont));
  }, [getDate]);
  var handleChangeTime = React.useCallback(function (_a) {
    var minutes = _a.minutes,
        hours = _a.hours;
    var newDate = new Date(value);
    newDate.setMinutes(minutes);
    newDate.setHours(hours);
    setDate(newDate);
    onChange({
      value: newDate
    });
  }, [value, onChange]);
  return React__default['default'].createElement("div", {
    className: cn(CLASS_NAME, (_b = {}, _b[CLASS_NAME + "--withTime"] = withTime, _b)),
    id: id
  }, React__default['default'].createElement("div", {
    className: cn(CLASS_NAME + "__month", (_c = {}, _c[CLASS_NAME + "__month--withTime"] = withTime, _c))
  }, React__default['default'].createElement(CalendarHeader, {
    month: month,
    onNextMonth: handleNextMonth,
    onPrevMonth: handlePrevMonth
  }), React__default['default'].createElement("div", {
    className: cn(CLASS_NAME + "__week")
  }, weekDays.map(function (dayName, key) {
    var _a;

    return React__default['default'].createElement("span", {
      className: cn(CLASS_NAME + "__week-name", (_a = {}, _a[CLASS_NAME + "__week-name-end"] = key >= 5, _a)),
      key: "w" + dayName
    }, dayName);
  })), React__default['default'].createElement("div", {
    className: cn(CLASS_NAME + "__days")
  }, prevfirstDayOnWeek.map(function (el, index) {
    return React__default['default'].createElement("button", {
      className: cn(CLASS_NAME + "__day-empty"),
      key: el,
      type: "button"
    }, prevlastDayPrevMonth.getDate() - (prevfirstDayOnWeek.length - index - 1));
  }), allDaysInMonth.map(function (day, index) {
    return React__default['default'].createElement(CalendarDayView, {
      day: day,
      disabled: disabled,
      index: index,
      key: String(day),
      length: allDaysInMonth.length,
      onClick: onChange,
      value: value
    });
  }), firstWeelOfnextMonth.map(function (el, index) {
    return React__default['default'].createElement("button", {
      className: cn(CLASS_NAME + "__day-empty"),
      key: el,
      type: "button"
    }, index + 1);
  }))), withTime && React__default['default'].createElement("div", {
    className: cn(CLASS_NAME + "__time")
  }, React__default['default'].createElement(CalendarTime, {
    hours: getDate.getHours(),
    minutes: getDate.getMinutes(),
    onChange: handleChangeTime
  })));
});

exports.Button = Button;
exports.Calendar = Calendar;
exports.Drop = Drop;
exports.Input = Input;
exports.Select = Select;
exports.Slider = Slider;
exports.Tabs = Tabs;
exports.TimeIntervel = TimeIntervel;
