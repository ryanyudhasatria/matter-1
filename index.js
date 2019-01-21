'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var emotion = require('emotion');
var reactRouterDom = require('react-router-dom');
var d3 = require('d3');
var moment_ = require('moment');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var COLORS = {
  RED: {
    DARKER: '#E55856',
    NORMAL: '#FF6260',
    LIGHT: '#FF8180',
    LIGHTER: '#FFA1A0',
    LIGHTEST: '#FFC0BF',
  },
  PURPLE: {
    DARKER: '#5A51E5',
    NORMAL: '#645AFF',
    LIGHT: '#837BFF',
    LIGHTER: '#A29CFF',
    LIGHTEST: '#C1BDFF',
  },
  GREEN: {
    DARKER: '#18B7BC',
    NORMAL: '#1BCBD1',
  },
  BLUE: {
    NORMAL: '#2FC8FF',
  },
  YELLOW: {
    NORMAL: '#FFBA0B',
  },
  BLACK: {
    DARKER: '#1C2229',
    NORMAL: '#394654',
    LIGHT: '#8393A3',
    LIGHTEST: '#D7DEE5',
  },
  GREY: {
    DARKER: '#B8C2CC',
    NORMAL: '#D7DEE5',
    LIGHT: '#E8EDF2',
    LIGHTER: '#F5F7FA',
  },
  WHITE: {
    NORMAL: '#FFFFFF',
  },
  MONOKAI: {
    PURPLE: '#DF2572',
    GREEN: '#98EB33',
    YELLOW: '#FDFF8A',
  },
};

var animatedLinkText = emotion.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: auto;\n  text-decoration: none;\n  padding-bottom: 0;\n  vertical-align: bottom;\n  color: ", ";\n  position: relative;\n  display: inline-block;\n  &:after {\n    display: block;\n    content: '';\n    border-bottom: solid 1px ", ";  \n    transform: scaleX(0);  \n    transition: transform 250ms ease-in-out;\n    transform-origin:100% 50%;\n  }\n  &:hover:after { \n    transform: scaleX(1);\n    transform-origin:0 50%;\n  }\n"], ["\n  width: auto;\n  text-decoration: none;\n  padding-bottom: 0;\n  vertical-align: bottom;\n  color: ", ";\n  position: relative;\n  display: inline-block;\n  &:after {\n    display: block;\n    content: '';\n    border-bottom: solid 1px ", ";  \n    transform: scaleX(0);  \n    transition: transform 250ms ease-in-out;\n    transform-origin:100% 50%;\n  }\n  &:hover:after { \n    transform: scaleX(1);\n    transform-origin:0 50%;\n  }\n"])), COLORS.PURPLE.NORMAL, COLORS.PURPLE.NORMAL);
var linkText = emotion.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-decoration: none;\n  color: inherit;\n"], ["\n  text-decoration: none;\n  color: inherit;\n"])));
var AnchorTextAtom = function (_a) {
    var to = _a.to, animated = _a.animated, className = _a.className, props = __rest(_a, ["to", "animated", "className"]);
    return (React.createElement("a", __assign({ href: to }, props, { "data-test": props['data-test'], className: emotion.cx(animated ? animatedLinkText : linkText, className) })));
};
AnchorTextAtom.displayName = 'AnchorTextAtom';
var templateObject_1, templateObject_2;

var SIZES = {
    XXS: '0.6rem',
    XS: '0.8rem',
    S: '0.88rem',
    M: '1rem',
    L: '1.2rem',
    XL: '1.5rem',
    XXL: '2rem',
    XXXL: '2.3rem',
    UNDEFINED: 'inherit',
};
var SMALL_SIZES = {
    XS: '0.6rem',
    S: '0.7rem',
    M: '0.8rem',
    L: '1rem',
    XL: '1.2rem',
    XXL: '1.5rem',
    XXXL: '2rem',
    UNDEFINED: 'inherit',
};
var textStyle = function (props) { return emotion.css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  font-size: ", ";\n  @media only screen and (max-width: 640px) {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  @media only screen and (max-width: 640px) {\n    font-size: ", ";\n  }\n"])), SIZES[props.size], SMALL_SIZES[props.size]); };
var TextAtom = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'M' : _b, props = __rest(_a, ["size"]);
    return (React.createElement("span", __assign({}, props, { className: emotion.cx(textStyle({ size: size }), props.className) }), props.children));
};
React.memo(TextAtom);
var templateObject_1$1;

var avatarCircle = 'border-radius: 100%;';
var avatarRounded = 'border-radius: .25rem;';
var generateInitial = function (name) {
    if (name === void 0) { name = 'User'; }
    var names = name.trim().split(' ');
    if (names.length === 1) {
        return name[0];
    }
    else {
        return names[0][0] + (names[1][0] ? names[1][0] : '');
    }
};
var TYPES_LIST = {
    SMALL_CIRCLE: emotion.css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n      ", "\n        background: ", ";\n        width: 36px;\n        height: 36px;                \n    "], ["\n      ", "\n        background: ", ";\n        width: 36px;\n        height: 36px;                \n    "])), avatarCircle, COLORS.RED.NORMAL),
    REGULAR_CIRCLE: emotion.css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n      ", "\n        background: ", ";\n        width: 48px;\n        height: 48px;\n    "], ["\n      ", "\n        background: ", ";\n        width: 48px;\n        height: 48px;\n    "])), avatarCircle, COLORS.RED.NORMAL),
    LARGE_CIRCLE: emotion.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      ", "\n        background: ", ";\n        width: 64px;\n        height: 64px;\n    "], ["\n      ", "\n        background: ", ";\n        width: 64px;\n        height: 64px;\n    "])), avatarCircle, COLORS.RED.NORMAL),
    SMALL_ROUNDED: emotion.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      ", "\n        background: ", ";\n        width: 36px;\n        height: 36px;\n    "], ["\n      ", "\n        background: ", ";\n        width: 36px;\n        height: 36px;\n    "])), avatarRounded, COLORS.RED.NORMAL),
    REGULAR_ROUNDED: emotion.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      ", "\n        background: ", ";\n        width: 48px;\n        height: 48px;\n    "], ["\n      ", "\n        background: ", ";\n        width: 48px;\n        height: 48px;\n    "])), avatarRounded, COLORS.RED.NORMAL),
    LARGE_ROUNDED: emotion.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      ", "\n        background: ", ";\n        width: 64px;\n        height: 64px;\n    "], ["\n      ", "\n        background: ", ";\n        width: 64px;\n        height: 64px;\n    "])), avatarRounded, COLORS.RED.NORMAL),
};
var AvatarAtom = /** @class */ (function (_super) {
    __extends(AvatarAtom, _super);
    function AvatarAtom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    AvatarAtom.prototype.render = function () {
        var _a = this.props, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, alt = _a.alt, src = _a.src, _d = _a.name, name = _d === void 0 ? 'User' : _d;
        if (src) {
            return (React.createElement("img", { src: src, alt: alt, "data-test": this.props['data-test'], className: emotion.cx((TYPES_LIST[type]), className) }));
        }
        else {
            return (React.createElement("div", { "data-test": this.props['data-test'], className: emotion.cx((TYPES_LIST[type]), emotion.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                -moz-user-select: none;\n                -webkit-user-select: none;\n                -ms-user-select:none;\n                user-select:none;\n                -o-user-select:none;\n                "], ["\n                -moz-user-select: none;\n                -webkit-user-select: none;\n                -ms-user-select:none;\n                user-select:none;\n                -o-user-select:none;\n                "]))), 'flex flex-column items-center justify-center', className), unselectable: "on", onselectstart: "return false;", 
                // @ts-ignore
                onMouseDown: "return false;" },
                React.createElement(TextAtom, { size: "L", className: emotion.cx('fw7', emotion.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.WHITE.NORMAL)) }, generateInitial(name))));
        }
    };
    return AvatarAtom;
}(React.PureComponent));
var templateObject_1$2, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

var smallBase = emotion.css(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  border: 0;\n  cursor: pointer;\n  border-radius: 48px;\n  line-height: 20px;\n  font-size: 14px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 16px 8px 16px;\n  @media screen and (max-width: 30em) {\n    font-size: 12px;\n    line-height: 16px;\n  }\n"], ["\n  border: 0;\n  cursor: pointer;\n  border-radius: 48px;\n  line-height: 20px;\n  font-size: 14px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 16px 8px 16px;\n  @media screen and (max-width: 30em) {\n    font-size: 12px;\n    line-height: 16px;\n  }\n"])));
var defaultBase = emotion.css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  border: 0;\n  cursor: pointer;\n  border-radius: 48px;\n  line-height: 24px;\n  font-size: 16px;\n  text-align: center;\n  padding: 25px;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  line-height: 27px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media screen and (max-width: 30em) {\n    font-size: 14px;\n    line-height: 18px;\n  }\n"], ["\n  border: 0;\n  cursor: pointer;\n  border-radius: 48px;\n  line-height: 24px;\n  font-size: 16px;\n  text-align: center;\n  padding: 25px;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  line-height: 27px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media screen and (max-width: 30em) {\n    font-size: 14px;\n    line-height: 18px;\n  }\n"])));
var withIconBase = emotion.css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 48px;\n  line-height: 24px;\n  font-size: 16px;\n  text-align: center;\n  padding-top: 13px;\n  line-height: 27px;\n  @media screen and (max-width: 30em) {\n    font-size: 14px;\n    line-height: 18px;\n  }\n"], ["\n  border-radius: 48px;\n  line-height: 24px;\n  font-size: 16px;\n  text-align: center;\n  padding-top: 13px;\n  line-height: 27px;\n  @media screen and (max-width: 30em) {\n    font-size: 14px;\n    line-height: 18px;\n  }\n"])));
var TYPES = {
    SMALL_PRIMARY: emotion.css(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: #F5F7FA;\n    :hover {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: #F5F7FA;\n    :hover {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "])), smallBase, COLORS.PURPLE.NORMAL, COLORS.PURPLE.LIGHT, COLORS.PURPLE.DARKER),
    SMALL_RED: emotion.css(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "])), smallBase, COLORS.RED.NORMAL, COLORS.GREY.LIGHT, COLORS.RED.DARKER, COLORS.RED.LIGHT),
    SMALL_GREY: emotion.css(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "])), smallBase, COLORS.GREY.NORMAL, COLORS.BLACK.LIGHT, COLORS.GREY.LIGHT),
    SMALL_GREEN: emotion.css(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "])), smallBase, COLORS.GREEN.NORMAL, COLORS.WHITE.NORMAL, COLORS.GREEN.DARKER),
    SMALL_WHITE: emotion.css(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "])), smallBase, COLORS.WHITE.NORMAL, COLORS.PURPLE.NORMAL, COLORS.WHITE.NORMAL),
    SMALL_TRANSPARENT: emotion.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    ", "\n    background: transparent;\n    color: ", ";\n    :hover {\n      background: transparent;\n    }\n  "], ["\n    ", "\n    background: transparent;\n    color: ", ";\n    :hover {\n      background: transparent;\n    }\n  "])), smallBase, COLORS.PURPLE.NORMAL),
    DEFAULT_CTA: emotion.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n    :focus {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n    :focus {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "])), defaultBase, COLORS.RED.NORMAL, COLORS.WHITE.NORMAL, COLORS.RED.LIGHT, COLORS.RED.LIGHT, COLORS.RED.DARKER),
    DEFAULT_PRIMARY: emotion.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "])), defaultBase, COLORS.PURPLE.NORMAL, COLORS.WHITE.NORMAL, COLORS.PURPLE.LIGHT, COLORS.PURPLE.DARKER),
    DEFAULT_GREY: emotion.css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    ", "\n    background: #EDF0F2;\n    color: #394654;\n    :hover {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: #EDF0F2;\n    color: #394654;\n    :hover {\n      background: ", ";\n    }\n  "])), defaultBase, COLORS.GREY.LIGHT),
    DEFAULT_WHITE: emotion.css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "])), defaultBase, COLORS.WHITE.NORMAL, COLORS.PURPLE.NORMAL, COLORS.WHITE.NORMAL),
    WITH_ICON_CTA: emotion.css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "])), withIconBase, COLORS.RED.NORMAL, COLORS.WHITE.NORMAL, COLORS.RED.LIGHT, COLORS.RED.DARKER),
    WITH_ICON_PRIMARY: emotion.css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n    :active {\n      background: ", ";\n    }\n  "])), withIconBase, COLORS.PURPLE.NORMAL, COLORS.WHITE.NORMAL, COLORS.PURPLE.LIGHT, COLORS.PURPLE.DARKER),
    WITH_ICON_GREY: emotion.css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "])), withIconBase, COLORS.GREY.NORMAL, COLORS.BLACK.NORMAL, COLORS.GREY.LIGHT),
    WITH_ICON_WHITE: emotion.css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "], ["\n    ", "\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n    }\n  "])), withIconBase, COLORS.WHITE.NORMAL, COLORS.PURPLE.NORMAL, COLORS.WHITE.NORMAL),
    DISABLED: emotion.css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    background: ", ";\n    color: ", ";\n    opacity: 0.8;\n    cursor: not-allowed !important;\n    :hover {\n      background: ", ";\n    }\n  "], ["\n    background: ", ";\n    color: ", ";\n    opacity: 0.8;\n    cursor: not-allowed !important;\n    :hover {\n      background: ", ";\n    }\n  "])), COLORS.GREY.NORMAL, COLORS.WHITE.NORMAL, COLORS.GREY.NORMAL),
};
// const disabledClass = cx('fw6 f6 pv2 ph3 pointer bw0', css`
//   ${smallBase}
// `);
var classNames = function (type, disabled) {
    return type.split('_')[0] === 'SMALL'
        ? emotion.cx('fw6 f6 pv2 ph3 pointer bw0', TYPES[type], (disabled ? TYPES.DISABLED : ''))
        : (type.split('_')[0] === 'DEFAULT'
            ? emotion.cx('fw6 f5 pv3 ph4 pointer bw0', TYPES[type], (disabled ? TYPES.DISABLED : ''))
            : emotion.cx('fw6 f1 pv3 ph2 pointer bw0', TYPES[type], (disabled ? TYPES.DISABLED : '')));
};
var ButtonAtom = /** @class */ (function (_super) {
    __extends(ButtonAtom, _super);
    function ButtonAtom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    ButtonAtom.prototype.render = function () {
        var _a = this.props, _b = _a.isFormInput, isFormInput = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.type, type = _d === void 0 ? 'SMALL_PRIMARY' : _d, _e = _a.onClick, onClick = _e === void 0 ? function () { } : _e, _f = _a.className, className = _f === void 0 ? '' : _f, children = _a.children;
        return (React.createElement("button", { "data-test": this.props['data-test'], type: isFormInput ? 'submit' : 'button', disabled: disabled, onClick: disabled ? function () { } : onClick, className: emotion.cx('outline-0', classNames(type, disabled), className) }, children));
    };
    return ButtonAtom;
}(React.PureComponent));
var templateObject_1$3, templateObject_2$2, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7$1, templateObject_8$1, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;

var CARD_TYPES = {
    DEFAULT: emotion.css(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n    display: inline-flex;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.15);\n    border-radius: 8px;\n  "], ["\n    display: inline-flex;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.15);\n    border-radius: 8px;\n  "]))),
    BORDER: emotion.css(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n    display: inline-flex;\n    background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,.1);\n    border-radius: 4px;\n  "], ["\n    display: inline-flex;\n    background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,.1);\n    border-radius: 4px;\n  "]))),
    GREY: emotion.css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n    display: inline-flex;\n    background: #F5F7FA;\n    border-radius: 8px;\n  "], ["\n    display: inline-flex;\n    background: #F5F7FA;\n    border-radius: 8px;\n  "]))),
};
var CardAtom = function (props) {
    var _a = props.type, type = _a === void 0 ? 'DEFAULT' : _a, _b = props.className, className = _b === void 0 ? '' : _b, _c = props.children, children = _c === void 0 ? null : _c;
    return (React.createElement("div", __assign({}, props, { className: emotion.cx(CARD_TYPES[type], className) }), children));
};
CardAtom.displayName = 'CardAtom';
var templateObject_1$4, templateObject_2$3, templateObject_3$2;

var ClassroomHeaderAtom = function (props) { return (React.createElement("header", { className: emotion.cx('fl w-100 flex justify-between align-center', emotion.css(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n    background: #1C2229;\n    color: white;\n    padding: 15px 22px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 995;\n    height: 68px;\n    @media only screen and (max-width: 640px) {\n      height: 48px;\n    }\n  "], ["\n    background: #1C2229;\n    color: white;\n    padding: 15px 22px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 995;\n    height: 68px;\n    @media only screen and (max-width: 640px) {\n      height: 48px;\n    }\n  "])))) }, props.children)); };
ClassroomHeaderAtom.displayName = 'ClassroomHeaderAtom';
var templateObject_1$5;

var h1 = emotion.css(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  font-weight: 700;\n  line-height: 60px;\n  font-size: 48px;\n  letter-spacing: -0.1px;\n  @media only screen and (max-width: 640px) {\n    font-size: 36px;\n    line-height: 40px;\n  }\n"], ["\n  font-weight: 700;\n  line-height: 60px;\n  font-size: 48px;\n  letter-spacing: -0.1px;\n  @media only screen and (max-width: 640px) {\n    font-size: 36px;\n    line-height: 40px;\n  }\n"])));
var H1Atom = function (props) { return (React.createElement("h1", __assign({}, props, { className: emotion.cx(h1, props.className) }), props.children)); };
H1Atom.displayName = 'H1';
var templateObject_1$6;

var h2 = emotion.css(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  font-weight: 600;\n  line-height: 40px;\n  font-size: 36px;\n  letter-spacing: -0.1px;\n  @media only screen and (max-width: 30em) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n"], ["\n  font-weight: 600;\n  line-height: 40px;\n  font-size: 36px;\n  letter-spacing: -0.1px;\n  @media only screen and (max-width: 30em) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n"])));
var H2Atom = function (props) { return (React.createElement("h2", __assign({}, props, { className: emotion.cx(h2, props.className) }), props.children)); };
H2Atom.displayName = 'H2Atom';
var templateObject_1$7;

var h3 = emotion.css(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  font-weight: 600;\n  line-height: 60px;\n  font-size: 24px;\n  letter-spacing: -0.1px;\n  @media only screen and (max-width: 640px) {\n    font-size: 16px;\n  }\n"], ["\n  font-weight: 600;\n  line-height: 60px;\n  font-size: 24px;\n  letter-spacing: -0.1px;\n  @media only screen and (max-width: 640px) {\n    font-size: 16px;\n  }\n"])));
var H3Atom = function (props) { return (React.createElement("h3", __assign({}, props, { className: emotion.cx(h3, props.className) }), props.children)); };
H3Atom.displayName = 'H3Atom';
var templateObject_1$8;

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

var css = ".fa,\n.fas,\n.far,\n.fal,\n.fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  left: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\nreaders do not read off random characters that represent icons */\n.fa-500px:before {\n  content: \"\\f26e\"; }\n\n.fa-accessible-icon:before {\n  content: \"\\f368\"; }\n\n.fa-accusoft:before {\n  content: \"\\f369\"; }\n\n.fa-acquisitions-incorporated:before {\n  content: \"\\f6af\"; }\n\n.fa-ad:before {\n  content: \"\\f641\"; }\n\n.fa-address-book:before {\n  content: \"\\f2b9\"; }\n\n.fa-address-card:before {\n  content: \"\\f2bb\"; }\n\n.fa-adjust:before {\n  content: \"\\f042\"; }\n\n.fa-adn:before {\n  content: \"\\f170\"; }\n\n.fa-adobe:before {\n  content: \"\\f778\"; }\n\n.fa-adversal:before {\n  content: \"\\f36a\"; }\n\n.fa-affiliatetheme:before {\n  content: \"\\f36b\"; }\n\n.fa-air-freshener:before {\n  content: \"\\f5d0\"; }\n\n.fa-algolia:before {\n  content: \"\\f36c\"; }\n\n.fa-align-center:before {\n  content: \"\\f037\"; }\n\n.fa-align-justify:before {\n  content: \"\\f039\"; }\n\n.fa-align-left:before {\n  content: \"\\f036\"; }\n\n.fa-align-right:before {\n  content: \"\\f038\"; }\n\n.fa-alipay:before {\n  content: \"\\f642\"; }\n\n.fa-allergies:before {\n  content: \"\\f461\"; }\n\n.fa-amazon:before {\n  content: \"\\f270\"; }\n\n.fa-amazon-pay:before {\n  content: \"\\f42c\"; }\n\n.fa-ambulance:before {\n  content: \"\\f0f9\"; }\n\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\"; }\n\n.fa-amilia:before {\n  content: \"\\f36d\"; }\n\n.fa-anchor:before {\n  content: \"\\f13d\"; }\n\n.fa-android:before {\n  content: \"\\f17b\"; }\n\n.fa-angellist:before {\n  content: \"\\f209\"; }\n\n.fa-angle-double-down:before {\n  content: \"\\f103\"; }\n\n.fa-angle-double-left:before {\n  content: \"\\f100\"; }\n\n.fa-angle-double-right:before {\n  content: \"\\f101\"; }\n\n.fa-angle-double-up:before {\n  content: \"\\f102\"; }\n\n.fa-angle-down:before {\n  content: \"\\f107\"; }\n\n.fa-angle-left:before {\n  content: \"\\f104\"; }\n\n.fa-angle-right:before {\n  content: \"\\f105\"; }\n\n.fa-angle-up:before {\n  content: \"\\f106\"; }\n\n.fa-angry:before {\n  content: \"\\f556\"; }\n\n.fa-angrycreative:before {\n  content: \"\\f36e\"; }\n\n.fa-angular:before {\n  content: \"\\f420\"; }\n\n.fa-ankh:before {\n  content: \"\\f644\"; }\n\n.fa-app-store:before {\n  content: \"\\f36f\"; }\n\n.fa-app-store-ios:before {\n  content: \"\\f370\"; }\n\n.fa-apper:before {\n  content: \"\\f371\"; }\n\n.fa-apple:before {\n  content: \"\\f179\"; }\n\n.fa-apple-alt:before {\n  content: \"\\f5d1\"; }\n\n.fa-apple-pay:before {\n  content: \"\\f415\"; }\n\n.fa-archive:before {\n  content: \"\\f187\"; }\n\n.fa-archway:before {\n  content: \"\\f557\"; }\n\n.fa-arrow-alt-circle-down:before {\n  content: \"\\f358\"; }\n\n.fa-arrow-alt-circle-left:before {\n  content: \"\\f359\"; }\n\n.fa-arrow-alt-circle-right:before {\n  content: \"\\f35a\"; }\n\n.fa-arrow-alt-circle-up:before {\n  content: \"\\f35b\"; }\n\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\"; }\n\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\"; }\n\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\"; }\n\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\"; }\n\n.fa-arrow-down:before {\n  content: \"\\f063\"; }\n\n.fa-arrow-left:before {\n  content: \"\\f060\"; }\n\n.fa-arrow-right:before {\n  content: \"\\f061\"; }\n\n.fa-arrow-up:before {\n  content: \"\\f062\"; }\n\n.fa-arrows-alt:before {\n  content: \"\\f0b2\"; }\n\n.fa-arrows-alt-h:before {\n  content: \"\\f337\"; }\n\n.fa-arrows-alt-v:before {\n  content: \"\\f338\"; }\n\n.fa-artstation:before {\n  content: \"\\f77a\"; }\n\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\"; }\n\n.fa-asterisk:before {\n  content: \"\\f069\"; }\n\n.fa-asymmetrik:before {\n  content: \"\\f372\"; }\n\n.fa-at:before {\n  content: \"\\f1fa\"; }\n\n.fa-atlas:before {\n  content: \"\\f558\"; }\n\n.fa-atlassian:before {\n  content: \"\\f77b\"; }\n\n.fa-atom:before {\n  content: \"\\f5d2\"; }\n\n.fa-audible:before {\n  content: \"\\f373\"; }\n\n.fa-audio-description:before {\n  content: \"\\f29e\"; }\n\n.fa-autoprefixer:before {\n  content: \"\\f41c\"; }\n\n.fa-avianex:before {\n  content: \"\\f374\"; }\n\n.fa-aviato:before {\n  content: \"\\f421\"; }\n\n.fa-award:before {\n  content: \"\\f559\"; }\n\n.fa-aws:before {\n  content: \"\\f375\"; }\n\n.fa-baby:before {\n  content: \"\\f77c\"; }\n\n.fa-baby-carriage:before {\n  content: \"\\f77d\"; }\n\n.fa-backspace:before {\n  content: \"\\f55a\"; }\n\n.fa-backward:before {\n  content: \"\\f04a\"; }\n\n.fa-balance-scale:before {\n  content: \"\\f24e\"; }\n\n.fa-ban:before {\n  content: \"\\f05e\"; }\n\n.fa-band-aid:before {\n  content: \"\\f462\"; }\n\n.fa-bandcamp:before {\n  content: \"\\f2d5\"; }\n\n.fa-barcode:before {\n  content: \"\\f02a\"; }\n\n.fa-bars:before {\n  content: \"\\f0c9\"; }\n\n.fa-baseball-ball:before {\n  content: \"\\f433\"; }\n\n.fa-basketball-ball:before {\n  content: \"\\f434\"; }\n\n.fa-bath:before {\n  content: \"\\f2cd\"; }\n\n.fa-battery-empty:before {\n  content: \"\\f244\"; }\n\n.fa-battery-full:before {\n  content: \"\\f240\"; }\n\n.fa-battery-half:before {\n  content: \"\\f242\"; }\n\n.fa-battery-quarter:before {\n  content: \"\\f243\"; }\n\n.fa-battery-three-quarters:before {\n  content: \"\\f241\"; }\n\n.fa-bed:before {\n  content: \"\\f236\"; }\n\n.fa-beer:before {\n  content: \"\\f0fc\"; }\n\n.fa-behance:before {\n  content: \"\\f1b4\"; }\n\n.fa-behance-square:before {\n  content: \"\\f1b5\"; }\n\n.fa-bell:before {\n  content: \"\\f0f3\"; }\n\n.fa-bell-slash:before {\n  content: \"\\f1f6\"; }\n\n.fa-bezier-curve:before {\n  content: \"\\f55b\"; }\n\n.fa-bible:before {\n  content: \"\\f647\"; }\n\n.fa-bicycle:before {\n  content: \"\\f206\"; }\n\n.fa-bimobject:before {\n  content: \"\\f378\"; }\n\n.fa-binoculars:before {\n  content: \"\\f1e5\"; }\n\n.fa-biohazard:before {\n  content: \"\\f780\"; }\n\n.fa-birthday-cake:before {\n  content: \"\\f1fd\"; }\n\n.fa-bitbucket:before {\n  content: \"\\f171\"; }\n\n.fa-bitcoin:before {\n  content: \"\\f379\"; }\n\n.fa-bity:before {\n  content: \"\\f37a\"; }\n\n.fa-black-tie:before {\n  content: \"\\f27e\"; }\n\n.fa-blackberry:before {\n  content: \"\\f37b\"; }\n\n.fa-blender:before {\n  content: \"\\f517\"; }\n\n.fa-blender-phone:before {\n  content: \"\\f6b6\"; }\n\n.fa-blind:before {\n  content: \"\\f29d\"; }\n\n.fa-blog:before {\n  content: \"\\f781\"; }\n\n.fa-blogger:before {\n  content: \"\\f37c\"; }\n\n.fa-blogger-b:before {\n  content: \"\\f37d\"; }\n\n.fa-bluetooth:before {\n  content: \"\\f293\"; }\n\n.fa-bluetooth-b:before {\n  content: \"\\f294\"; }\n\n.fa-bold:before {\n  content: \"\\f032\"; }\n\n.fa-bolt:before {\n  content: \"\\f0e7\"; }\n\n.fa-bomb:before {\n  content: \"\\f1e2\"; }\n\n.fa-bone:before {\n  content: \"\\f5d7\"; }\n\n.fa-bong:before {\n  content: \"\\f55c\"; }\n\n.fa-book:before {\n  content: \"\\f02d\"; }\n\n.fa-book-dead:before {\n  content: \"\\f6b7\"; }\n\n.fa-book-open:before {\n  content: \"\\f518\"; }\n\n.fa-book-reader:before {\n  content: \"\\f5da\"; }\n\n.fa-bookmark:before {\n  content: \"\\f02e\"; }\n\n.fa-bowling-ball:before {\n  content: \"\\f436\"; }\n\n.fa-box:before {\n  content: \"\\f466\"; }\n\n.fa-box-open:before {\n  content: \"\\f49e\"; }\n\n.fa-boxes:before {\n  content: \"\\f468\"; }\n\n.fa-braille:before {\n  content: \"\\f2a1\"; }\n\n.fa-brain:before {\n  content: \"\\f5dc\"; }\n\n.fa-briefcase:before {\n  content: \"\\f0b1\"; }\n\n.fa-briefcase-medical:before {\n  content: \"\\f469\"; }\n\n.fa-broadcast-tower:before {\n  content: \"\\f519\"; }\n\n.fa-broom:before {\n  content: \"\\f51a\"; }\n\n.fa-brush:before {\n  content: \"\\f55d\"; }\n\n.fa-btc:before {\n  content: \"\\f15a\"; }\n\n.fa-bug:before {\n  content: \"\\f188\"; }\n\n.fa-building:before {\n  content: \"\\f1ad\"; }\n\n.fa-bullhorn:before {\n  content: \"\\f0a1\"; }\n\n.fa-bullseye:before {\n  content: \"\\f140\"; }\n\n.fa-burn:before {\n  content: \"\\f46a\"; }\n\n.fa-buromobelexperte:before {\n  content: \"\\f37f\"; }\n\n.fa-bus:before {\n  content: \"\\f207\"; }\n\n.fa-bus-alt:before {\n  content: \"\\f55e\"; }\n\n.fa-business-time:before {\n  content: \"\\f64a\"; }\n\n.fa-buysellads:before {\n  content: \"\\f20d\"; }\n\n.fa-calculator:before {\n  content: \"\\f1ec\"; }\n\n.fa-calendar:before {\n  content: \"\\f133\"; }\n\n.fa-calendar-alt:before {\n  content: \"\\f073\"; }\n\n.fa-calendar-check:before {\n  content: \"\\f274\"; }\n\n.fa-calendar-day:before {\n  content: \"\\f783\"; }\n\n.fa-calendar-minus:before {\n  content: \"\\f272\"; }\n\n.fa-calendar-plus:before {\n  content: \"\\f271\"; }\n\n.fa-calendar-times:before {\n  content: \"\\f273\"; }\n\n.fa-calendar-week:before {\n  content: \"\\f784\"; }\n\n.fa-camera:before {\n  content: \"\\f030\"; }\n\n.fa-camera-retro:before {\n  content: \"\\f083\"; }\n\n.fa-campground:before {\n  content: \"\\f6bb\"; }\n\n.fa-canadian-maple-leaf:before {\n  content: \"\\f785\"; }\n\n.fa-candy-cane:before {\n  content: \"\\f786\"; }\n\n.fa-cannabis:before {\n  content: \"\\f55f\"; }\n\n.fa-capsules:before {\n  content: \"\\f46b\"; }\n\n.fa-car:before {\n  content: \"\\f1b9\"; }\n\n.fa-car-alt:before {\n  content: \"\\f5de\"; }\n\n.fa-car-battery:before {\n  content: \"\\f5df\"; }\n\n.fa-car-crash:before {\n  content: \"\\f5e1\"; }\n\n.fa-car-side:before {\n  content: \"\\f5e4\"; }\n\n.fa-caret-down:before {\n  content: \"\\f0d7\"; }\n\n.fa-caret-left:before {\n  content: \"\\f0d9\"; }\n\n.fa-caret-right:before {\n  content: \"\\f0da\"; }\n\n.fa-caret-square-down:before {\n  content: \"\\f150\"; }\n\n.fa-caret-square-left:before {\n  content: \"\\f191\"; }\n\n.fa-caret-square-right:before {\n  content: \"\\f152\"; }\n\n.fa-caret-square-up:before {\n  content: \"\\f151\"; }\n\n.fa-caret-up:before {\n  content: \"\\f0d8\"; }\n\n.fa-carrot:before {\n  content: \"\\f787\"; }\n\n.fa-cart-arrow-down:before {\n  content: \"\\f218\"; }\n\n.fa-cart-plus:before {\n  content: \"\\f217\"; }\n\n.fa-cash-register:before {\n  content: \"\\f788\"; }\n\n.fa-cat:before {\n  content: \"\\f6be\"; }\n\n.fa-cc-amazon-pay:before {\n  content: \"\\f42d\"; }\n\n.fa-cc-amex:before {\n  content: \"\\f1f3\"; }\n\n.fa-cc-apple-pay:before {\n  content: \"\\f416\"; }\n\n.fa-cc-diners-club:before {\n  content: \"\\f24c\"; }\n\n.fa-cc-discover:before {\n  content: \"\\f1f2\"; }\n\n.fa-cc-jcb:before {\n  content: \"\\f24b\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\"; }\n\n.fa-cc-paypal:before {\n  content: \"\\f1f4\"; }\n\n.fa-cc-stripe:before {\n  content: \"\\f1f5\"; }\n\n.fa-cc-visa:before {\n  content: \"\\f1f0\"; }\n\n.fa-centercode:before {\n  content: \"\\f380\"; }\n\n.fa-centos:before {\n  content: \"\\f789\"; }\n\n.fa-certificate:before {\n  content: \"\\f0a3\"; }\n\n.fa-chair:before {\n  content: \"\\f6c0\"; }\n\n.fa-chalkboard:before {\n  content: \"\\f51b\"; }\n\n.fa-chalkboard-teacher:before {\n  content: \"\\f51c\"; }\n\n.fa-charging-station:before {\n  content: \"\\f5e7\"; }\n\n.fa-chart-area:before {\n  content: \"\\f1fe\"; }\n\n.fa-chart-bar:before {\n  content: \"\\f080\"; }\n\n.fa-chart-line:before {\n  content: \"\\f201\"; }\n\n.fa-chart-pie:before {\n  content: \"\\f200\"; }\n\n.fa-check:before {\n  content: \"\\f00c\"; }\n\n.fa-check-circle:before {\n  content: \"\\f058\"; }\n\n.fa-check-double:before {\n  content: \"\\f560\"; }\n\n.fa-check-square:before {\n  content: \"\\f14a\"; }\n\n.fa-chess:before {\n  content: \"\\f439\"; }\n\n.fa-chess-bishop:before {\n  content: \"\\f43a\"; }\n\n.fa-chess-board:before {\n  content: \"\\f43c\"; }\n\n.fa-chess-king:before {\n  content: \"\\f43f\"; }\n\n.fa-chess-knight:before {\n  content: \"\\f441\"; }\n\n.fa-chess-pawn:before {\n  content: \"\\f443\"; }\n\n.fa-chess-queen:before {\n  content: \"\\f445\"; }\n\n.fa-chess-rook:before {\n  content: \"\\f447\"; }\n\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\"; }\n\n.fa-chevron-circle-left:before {\n  content: \"\\f137\"; }\n\n.fa-chevron-circle-right:before {\n  content: \"\\f138\"; }\n\n.fa-chevron-circle-up:before {\n  content: \"\\f139\"; }\n\n.fa-chevron-down:before {\n  content: \"\\f078\"; }\n\n.fa-chevron-left:before {\n  content: \"\\f053\"; }\n\n.fa-chevron-right:before {\n  content: \"\\f054\"; }\n\n.fa-chevron-up:before {\n  content: \"\\f077\"; }\n\n.fa-child:before {\n  content: \"\\f1ae\"; }\n\n.fa-chrome:before {\n  content: \"\\f268\"; }\n\n.fa-church:before {\n  content: \"\\f51d\"; }\n\n.fa-circle:before {\n  content: \"\\f111\"; }\n\n.fa-circle-notch:before {\n  content: \"\\f1ce\"; }\n\n.fa-city:before {\n  content: \"\\f64f\"; }\n\n.fa-clipboard:before {\n  content: \"\\f328\"; }\n\n.fa-clipboard-check:before {\n  content: \"\\f46c\"; }\n\n.fa-clipboard-list:before {\n  content: \"\\f46d\"; }\n\n.fa-clock:before {\n  content: \"\\f017\"; }\n\n.fa-clone:before {\n  content: \"\\f24d\"; }\n\n.fa-closed-captioning:before {\n  content: \"\\f20a\"; }\n\n.fa-cloud:before {\n  content: \"\\f0c2\"; }\n\n.fa-cloud-download-alt:before {\n  content: \"\\f381\"; }\n\n.fa-cloud-meatball:before {\n  content: \"\\f73b\"; }\n\n.fa-cloud-moon:before {\n  content: \"\\f6c3\"; }\n\n.fa-cloud-moon-rain:before {\n  content: \"\\f73c\"; }\n\n.fa-cloud-rain:before {\n  content: \"\\f73d\"; }\n\n.fa-cloud-showers-heavy:before {\n  content: \"\\f740\"; }\n\n.fa-cloud-sun:before {\n  content: \"\\f6c4\"; }\n\n.fa-cloud-sun-rain:before {\n  content: \"\\f743\"; }\n\n.fa-cloud-upload-alt:before {\n  content: \"\\f382\"; }\n\n.fa-cloudscale:before {\n  content: \"\\f383\"; }\n\n.fa-cloudsmith:before {\n  content: \"\\f384\"; }\n\n.fa-cloudversify:before {\n  content: \"\\f385\"; }\n\n.fa-cocktail:before {\n  content: \"\\f561\"; }\n\n.fa-code:before {\n  content: \"\\f121\"; }\n\n.fa-code-branch:before {\n  content: \"\\f126\"; }\n\n.fa-codepen:before {\n  content: \"\\f1cb\"; }\n\n.fa-codiepie:before {\n  content: \"\\f284\"; }\n\n.fa-coffee:before {\n  content: \"\\f0f4\"; }\n\n.fa-cog:before {\n  content: \"\\f013\"; }\n\n.fa-cogs:before {\n  content: \"\\f085\"; }\n\n.fa-coins:before {\n  content: \"\\f51e\"; }\n\n.fa-columns:before {\n  content: \"\\f0db\"; }\n\n.fa-comment:before {\n  content: \"\\f075\"; }\n\n.fa-comment-alt:before {\n  content: \"\\f27a\"; }\n\n.fa-comment-dollar:before {\n  content: \"\\f651\"; }\n\n.fa-comment-dots:before {\n  content: \"\\f4ad\"; }\n\n.fa-comment-slash:before {\n  content: \"\\f4b3\"; }\n\n.fa-comments:before {\n  content: \"\\f086\"; }\n\n.fa-comments-dollar:before {\n  content: \"\\f653\"; }\n\n.fa-compact-disc:before {\n  content: \"\\f51f\"; }\n\n.fa-compass:before {\n  content: \"\\f14e\"; }\n\n.fa-compress:before {\n  content: \"\\f066\"; }\n\n.fa-compress-arrows-alt:before {\n  content: \"\\f78c\"; }\n\n.fa-concierge-bell:before {\n  content: \"\\f562\"; }\n\n.fa-confluence:before {\n  content: \"\\f78d\"; }\n\n.fa-connectdevelop:before {\n  content: \"\\f20e\"; }\n\n.fa-contao:before {\n  content: \"\\f26d\"; }\n\n.fa-cookie:before {\n  content: \"\\f563\"; }\n\n.fa-cookie-bite:before {\n  content: \"\\f564\"; }\n\n.fa-copy:before {\n  content: \"\\f0c5\"; }\n\n.fa-copyright:before {\n  content: \"\\f1f9\"; }\n\n.fa-couch:before {\n  content: \"\\f4b8\"; }\n\n.fa-cpanel:before {\n  content: \"\\f388\"; }\n\n.fa-creative-commons:before {\n  content: \"\\f25e\"; }\n\n.fa-creative-commons-by:before {\n  content: \"\\f4e7\"; }\n\n.fa-creative-commons-nc:before {\n  content: \"\\f4e8\"; }\n\n.fa-creative-commons-nc-eu:before {\n  content: \"\\f4e9\"; }\n\n.fa-creative-commons-nc-jp:before {\n  content: \"\\f4ea\"; }\n\n.fa-creative-commons-nd:before {\n  content: \"\\f4eb\"; }\n\n.fa-creative-commons-pd:before {\n  content: \"\\f4ec\"; }\n\n.fa-creative-commons-pd-alt:before {\n  content: \"\\f4ed\"; }\n\n.fa-creative-commons-remix:before {\n  content: \"\\f4ee\"; }\n\n.fa-creative-commons-sa:before {\n  content: \"\\f4ef\"; }\n\n.fa-creative-commons-sampling:before {\n  content: \"\\f4f0\"; }\n\n.fa-creative-commons-sampling-plus:before {\n  content: \"\\f4f1\"; }\n\n.fa-creative-commons-share:before {\n  content: \"\\f4f2\"; }\n\n.fa-creative-commons-zero:before {\n  content: \"\\f4f3\"; }\n\n.fa-credit-card:before {\n  content: \"\\f09d\"; }\n\n.fa-critical-role:before {\n  content: \"\\f6c9\"; }\n\n.fa-crop:before {\n  content: \"\\f125\"; }\n\n.fa-crop-alt:before {\n  content: \"\\f565\"; }\n\n.fa-cross:before {\n  content: \"\\f654\"; }\n\n.fa-crosshairs:before {\n  content: \"\\f05b\"; }\n\n.fa-crow:before {\n  content: \"\\f520\"; }\n\n.fa-crown:before {\n  content: \"\\f521\"; }\n\n.fa-css3:before {\n  content: \"\\f13c\"; }\n\n.fa-css3-alt:before {\n  content: \"\\f38b\"; }\n\n.fa-cube:before {\n  content: \"\\f1b2\"; }\n\n.fa-cubes:before {\n  content: \"\\f1b3\"; }\n\n.fa-cut:before {\n  content: \"\\f0c4\"; }\n\n.fa-cuttlefish:before {\n  content: \"\\f38c\"; }\n\n.fa-d-and-d:before {\n  content: \"\\f38d\"; }\n\n.fa-d-and-d-beyond:before {\n  content: \"\\f6ca\"; }\n\n.fa-dashcube:before {\n  content: \"\\f210\"; }\n\n.fa-database:before {\n  content: \"\\f1c0\"; }\n\n.fa-deaf:before {\n  content: \"\\f2a4\"; }\n\n.fa-delicious:before {\n  content: \"\\f1a5\"; }\n\n.fa-democrat:before {\n  content: \"\\f747\"; }\n\n.fa-deploydog:before {\n  content: \"\\f38e\"; }\n\n.fa-deskpro:before {\n  content: \"\\f38f\"; }\n\n.fa-desktop:before {\n  content: \"\\f108\"; }\n\n.fa-dev:before {\n  content: \"\\f6cc\"; }\n\n.fa-deviantart:before {\n  content: \"\\f1bd\"; }\n\n.fa-dharmachakra:before {\n  content: \"\\f655\"; }\n\n.fa-dhl:before {\n  content: \"\\f790\"; }\n\n.fa-diagnoses:before {\n  content: \"\\f470\"; }\n\n.fa-diaspora:before {\n  content: \"\\f791\"; }\n\n.fa-dice:before {\n  content: \"\\f522\"; }\n\n.fa-dice-d20:before {\n  content: \"\\f6cf\"; }\n\n.fa-dice-d6:before {\n  content: \"\\f6d1\"; }\n\n.fa-dice-five:before {\n  content: \"\\f523\"; }\n\n.fa-dice-four:before {\n  content: \"\\f524\"; }\n\n.fa-dice-one:before {\n  content: \"\\f525\"; }\n\n.fa-dice-six:before {\n  content: \"\\f526\"; }\n\n.fa-dice-three:before {\n  content: \"\\f527\"; }\n\n.fa-dice-two:before {\n  content: \"\\f528\"; }\n\n.fa-digg:before {\n  content: \"\\f1a6\"; }\n\n.fa-digital-ocean:before {\n  content: \"\\f391\"; }\n\n.fa-digital-tachograph:before {\n  content: \"\\f566\"; }\n\n.fa-directions:before {\n  content: \"\\f5eb\"; }\n\n.fa-discord:before {\n  content: \"\\f392\"; }\n\n.fa-discourse:before {\n  content: \"\\f393\"; }\n\n.fa-divide:before {\n  content: \"\\f529\"; }\n\n.fa-dizzy:before {\n  content: \"\\f567\"; }\n\n.fa-dna:before {\n  content: \"\\f471\"; }\n\n.fa-dochub:before {\n  content: \"\\f394\"; }\n\n.fa-docker:before {\n  content: \"\\f395\"; }\n\n.fa-dog:before {\n  content: \"\\f6d3\"; }\n\n.fa-dollar-sign:before {\n  content: \"\\f155\"; }\n\n.fa-dolly:before {\n  content: \"\\f472\"; }\n\n.fa-dolly-flatbed:before {\n  content: \"\\f474\"; }\n\n.fa-donate:before {\n  content: \"\\f4b9\"; }\n\n.fa-door-closed:before {\n  content: \"\\f52a\"; }\n\n.fa-door-open:before {\n  content: \"\\f52b\"; }\n\n.fa-dot-circle:before {\n  content: \"\\f192\"; }\n\n.fa-dove:before {\n  content: \"\\f4ba\"; }\n\n.fa-download:before {\n  content: \"\\f019\"; }\n\n.fa-draft2digital:before {\n  content: \"\\f396\"; }\n\n.fa-drafting-compass:before {\n  content: \"\\f568\"; }\n\n.fa-dragon:before {\n  content: \"\\f6d5\"; }\n\n.fa-draw-polygon:before {\n  content: \"\\f5ee\"; }\n\n.fa-dribbble:before {\n  content: \"\\f17d\"; }\n\n.fa-dribbble-square:before {\n  content: \"\\f397\"; }\n\n.fa-dropbox:before {\n  content: \"\\f16b\"; }\n\n.fa-drum:before {\n  content: \"\\f569\"; }\n\n.fa-drum-steelpan:before {\n  content: \"\\f56a\"; }\n\n.fa-drumstick-bite:before {\n  content: \"\\f6d7\"; }\n\n.fa-drupal:before {\n  content: \"\\f1a9\"; }\n\n.fa-dumbbell:before {\n  content: \"\\f44b\"; }\n\n.fa-dumpster:before {\n  content: \"\\f793\"; }\n\n.fa-dumpster-fire:before {\n  content: \"\\f794\"; }\n\n.fa-dungeon:before {\n  content: \"\\f6d9\"; }\n\n.fa-dyalog:before {\n  content: \"\\f399\"; }\n\n.fa-earlybirds:before {\n  content: \"\\f39a\"; }\n\n.fa-ebay:before {\n  content: \"\\f4f4\"; }\n\n.fa-edge:before {\n  content: \"\\f282\"; }\n\n.fa-edit:before {\n  content: \"\\f044\"; }\n\n.fa-eject:before {\n  content: \"\\f052\"; }\n\n.fa-elementor:before {\n  content: \"\\f430\"; }\n\n.fa-ellipsis-h:before {\n  content: \"\\f141\"; }\n\n.fa-ellipsis-v:before {\n  content: \"\\f142\"; }\n\n.fa-ello:before {\n  content: \"\\f5f1\"; }\n\n.fa-ember:before {\n  content: \"\\f423\"; }\n\n.fa-empire:before {\n  content: \"\\f1d1\"; }\n\n.fa-envelope:before {\n  content: \"\\f0e0\"; }\n\n.fa-envelope-open:before {\n  content: \"\\f2b6\"; }\n\n.fa-envelope-open-text:before {\n  content: \"\\f658\"; }\n\n.fa-envelope-square:before {\n  content: \"\\f199\"; }\n\n.fa-envira:before {\n  content: \"\\f299\"; }\n\n.fa-equals:before {\n  content: \"\\f52c\"; }\n\n.fa-eraser:before {\n  content: \"\\f12d\"; }\n\n.fa-erlang:before {\n  content: \"\\f39d\"; }\n\n.fa-ethereum:before {\n  content: \"\\f42e\"; }\n\n.fa-ethernet:before {\n  content: \"\\f796\"; }\n\n.fa-etsy:before {\n  content: \"\\f2d7\"; }\n\n.fa-euro-sign:before {\n  content: \"\\f153\"; }\n\n.fa-exchange-alt:before {\n  content: \"\\f362\"; }\n\n.fa-exclamation:before {\n  content: \"\\f12a\"; }\n\n.fa-exclamation-circle:before {\n  content: \"\\f06a\"; }\n\n.fa-exclamation-triangle:before {\n  content: \"\\f071\"; }\n\n.fa-expand:before {\n  content: \"\\f065\"; }\n\n.fa-expand-arrows-alt:before {\n  content: \"\\f31e\"; }\n\n.fa-expeditedssl:before {\n  content: \"\\f23e\"; }\n\n.fa-external-link-alt:before {\n  content: \"\\f35d\"; }\n\n.fa-external-link-square-alt:before {\n  content: \"\\f360\"; }\n\n.fa-eye:before {\n  content: \"\\f06e\"; }\n\n.fa-eye-dropper:before {\n  content: \"\\f1fb\"; }\n\n.fa-eye-slash:before {\n  content: \"\\f070\"; }\n\n.fa-facebook:before {\n  content: \"\\f09a\"; }\n\n.fa-facebook-f:before {\n  content: \"\\f39e\"; }\n\n.fa-facebook-messenger:before {\n  content: \"\\f39f\"; }\n\n.fa-facebook-square:before {\n  content: \"\\f082\"; }\n\n.fa-fantasy-flight-games:before {\n  content: \"\\f6dc\"; }\n\n.fa-fast-backward:before {\n  content: \"\\f049\"; }\n\n.fa-fast-forward:before {\n  content: \"\\f050\"; }\n\n.fa-fax:before {\n  content: \"\\f1ac\"; }\n\n.fa-feather:before {\n  content: \"\\f52d\"; }\n\n.fa-feather-alt:before {\n  content: \"\\f56b\"; }\n\n.fa-fedex:before {\n  content: \"\\f797\"; }\n\n.fa-fedora:before {\n  content: \"\\f798\"; }\n\n.fa-female:before {\n  content: \"\\f182\"; }\n\n.fa-fighter-jet:before {\n  content: \"\\f0fb\"; }\n\n.fa-figma:before {\n  content: \"\\f799\"; }\n\n.fa-file:before {\n  content: \"\\f15b\"; }\n\n.fa-file-alt:before {\n  content: \"\\f15c\"; }\n\n.fa-file-archive:before {\n  content: \"\\f1c6\"; }\n\n.fa-file-audio:before {\n  content: \"\\f1c7\"; }\n\n.fa-file-code:before {\n  content: \"\\f1c9\"; }\n\n.fa-file-contract:before {\n  content: \"\\f56c\"; }\n\n.fa-file-csv:before {\n  content: \"\\f6dd\"; }\n\n.fa-file-download:before {\n  content: \"\\f56d\"; }\n\n.fa-file-excel:before {\n  content: \"\\f1c3\"; }\n\n.fa-file-export:before {\n  content: \"\\f56e\"; }\n\n.fa-file-image:before {\n  content: \"\\f1c5\"; }\n\n.fa-file-import:before {\n  content: \"\\f56f\"; }\n\n.fa-file-invoice:before {\n  content: \"\\f570\"; }\n\n.fa-file-invoice-dollar:before {\n  content: \"\\f571\"; }\n\n.fa-file-medical:before {\n  content: \"\\f477\"; }\n\n.fa-file-medical-alt:before {\n  content: \"\\f478\"; }\n\n.fa-file-pdf:before {\n  content: \"\\f1c1\"; }\n\n.fa-file-powerpoint:before {\n  content: \"\\f1c4\"; }\n\n.fa-file-prescription:before {\n  content: \"\\f572\"; }\n\n.fa-file-signature:before {\n  content: \"\\f573\"; }\n\n.fa-file-upload:before {\n  content: \"\\f574\"; }\n\n.fa-file-video:before {\n  content: \"\\f1c8\"; }\n\n.fa-file-word:before {\n  content: \"\\f1c2\"; }\n\n.fa-fill:before {\n  content: \"\\f575\"; }\n\n.fa-fill-drip:before {\n  content: \"\\f576\"; }\n\n.fa-film:before {\n  content: \"\\f008\"; }\n\n.fa-filter:before {\n  content: \"\\f0b0\"; }\n\n.fa-fingerprint:before {\n  content: \"\\f577\"; }\n\n.fa-fire:before {\n  content: \"\\f06d\"; }\n\n.fa-fire-alt:before {\n  content: \"\\f7e4\"; }\n\n.fa-fire-extinguisher:before {\n  content: \"\\f134\"; }\n\n.fa-firefox:before {\n  content: \"\\f269\"; }\n\n.fa-first-aid:before {\n  content: \"\\f479\"; }\n\n.fa-first-order:before {\n  content: \"\\f2b0\"; }\n\n.fa-first-order-alt:before {\n  content: \"\\f50a\"; }\n\n.fa-firstdraft:before {\n  content: \"\\f3a1\"; }\n\n.fa-fish:before {\n  content: \"\\f578\"; }\n\n.fa-fist-raised:before {\n  content: \"\\f6de\"; }\n\n.fa-flag:before {\n  content: \"\\f024\"; }\n\n.fa-flag-checkered:before {\n  content: \"\\f11e\"; }\n\n.fa-flag-usa:before {\n  content: \"\\f74d\"; }\n\n.fa-flask:before {\n  content: \"\\f0c3\"; }\n\n.fa-flickr:before {\n  content: \"\\f16e\"; }\n\n.fa-flipboard:before {\n  content: \"\\f44d\"; }\n\n.fa-flushed:before {\n  content: \"\\f579\"; }\n\n.fa-fly:before {\n  content: \"\\f417\"; }\n\n.fa-folder:before {\n  content: \"\\f07b\"; }\n\n.fa-folder-minus:before {\n  content: \"\\f65d\"; }\n\n.fa-folder-open:before {\n  content: \"\\f07c\"; }\n\n.fa-folder-plus:before {\n  content: \"\\f65e\"; }\n\n.fa-font:before {\n  content: \"\\f031\"; }\n\n.fa-font-awesome:before {\n  content: \"\\f2b4\"; }\n\n.fa-font-awesome-alt:before {\n  content: \"\\f35c\"; }\n\n.fa-font-awesome-flag:before {\n  content: \"\\f425\"; }\n\n.fa-font-awesome-logo-full:before {\n  content: \"\\f4e6\"; }\n\n.fa-fonticons:before {\n  content: \"\\f280\"; }\n\n.fa-fonticons-fi:before {\n  content: \"\\f3a2\"; }\n\n.fa-football-ball:before {\n  content: \"\\f44e\"; }\n\n.fa-fort-awesome:before {\n  content: \"\\f286\"; }\n\n.fa-fort-awesome-alt:before {\n  content: \"\\f3a3\"; }\n\n.fa-forumbee:before {\n  content: \"\\f211\"; }\n\n.fa-forward:before {\n  content: \"\\f04e\"; }\n\n.fa-foursquare:before {\n  content: \"\\f180\"; }\n\n.fa-free-code-camp:before {\n  content: \"\\f2c5\"; }\n\n.fa-freebsd:before {\n  content: \"\\f3a4\"; }\n\n.fa-frog:before {\n  content: \"\\f52e\"; }\n\n.fa-frown:before {\n  content: \"\\f119\"; }\n\n.fa-frown-open:before {\n  content: \"\\f57a\"; }\n\n.fa-fulcrum:before {\n  content: \"\\f50b\"; }\n\n.fa-funnel-dollar:before {\n  content: \"\\f662\"; }\n\n.fa-futbol:before {\n  content: \"\\f1e3\"; }\n\n.fa-galactic-republic:before {\n  content: \"\\f50c\"; }\n\n.fa-galactic-senate:before {\n  content: \"\\f50d\"; }\n\n.fa-gamepad:before {\n  content: \"\\f11b\"; }\n\n.fa-gas-pump:before {\n  content: \"\\f52f\"; }\n\n.fa-gavel:before {\n  content: \"\\f0e3\"; }\n\n.fa-gem:before {\n  content: \"\\f3a5\"; }\n\n.fa-genderless:before {\n  content: \"\\f22d\"; }\n\n.fa-get-pocket:before {\n  content: \"\\f265\"; }\n\n.fa-gg:before {\n  content: \"\\f260\"; }\n\n.fa-gg-circle:before {\n  content: \"\\f261\"; }\n\n.fa-ghost:before {\n  content: \"\\f6e2\"; }\n\n.fa-gift:before {\n  content: \"\\f06b\"; }\n\n.fa-gifts:before {\n  content: \"\\f79c\"; }\n\n.fa-git:before {\n  content: \"\\f1d3\"; }\n\n.fa-git-square:before {\n  content: \"\\f1d2\"; }\n\n.fa-github:before {\n  content: \"\\f09b\"; }\n\n.fa-github-alt:before {\n  content: \"\\f113\"; }\n\n.fa-github-square:before {\n  content: \"\\f092\"; }\n\n.fa-gitkraken:before {\n  content: \"\\f3a6\"; }\n\n.fa-gitlab:before {\n  content: \"\\f296\"; }\n\n.fa-gitter:before {\n  content: \"\\f426\"; }\n\n.fa-glass-cheers:before {\n  content: \"\\f79f\"; }\n\n.fa-glass-martini:before {\n  content: \"\\f000\"; }\n\n.fa-glass-martini-alt:before {\n  content: \"\\f57b\"; }\n\n.fa-glass-whiskey:before {\n  content: \"\\f7a0\"; }\n\n.fa-glasses:before {\n  content: \"\\f530\"; }\n\n.fa-glide:before {\n  content: \"\\f2a5\"; }\n\n.fa-glide-g:before {\n  content: \"\\f2a6\"; }\n\n.fa-globe:before {\n  content: \"\\f0ac\"; }\n\n.fa-globe-africa:before {\n  content: \"\\f57c\"; }\n\n.fa-globe-americas:before {\n  content: \"\\f57d\"; }\n\n.fa-globe-asia:before {\n  content: \"\\f57e\"; }\n\n.fa-globe-europe:before {\n  content: \"\\f7a2\"; }\n\n.fa-gofore:before {\n  content: \"\\f3a7\"; }\n\n.fa-golf-ball:before {\n  content: \"\\f450\"; }\n\n.fa-goodreads:before {\n  content: \"\\f3a8\"; }\n\n.fa-goodreads-g:before {\n  content: \"\\f3a9\"; }\n\n.fa-google:before {\n  content: \"\\f1a0\"; }\n\n.fa-google-drive:before {\n  content: \"\\f3aa\"; }\n\n.fa-google-play:before {\n  content: \"\\f3ab\"; }\n\n.fa-google-plus:before {\n  content: \"\\f2b3\"; }\n\n.fa-google-plus-g:before {\n  content: \"\\f0d5\"; }\n\n.fa-google-plus-square:before {\n  content: \"\\f0d4\"; }\n\n.fa-google-wallet:before {\n  content: \"\\f1ee\"; }\n\n.fa-gopuram:before {\n  content: \"\\f664\"; }\n\n.fa-graduation-cap:before {\n  content: \"\\f19d\"; }\n\n.fa-gratipay:before {\n  content: \"\\f184\"; }\n\n.fa-grav:before {\n  content: \"\\f2d6\"; }\n\n.fa-greater-than:before {\n  content: \"\\f531\"; }\n\n.fa-greater-than-equal:before {\n  content: \"\\f532\"; }\n\n.fa-grimace:before {\n  content: \"\\f57f\"; }\n\n.fa-grin:before {\n  content: \"\\f580\"; }\n\n.fa-grin-alt:before {\n  content: \"\\f581\"; }\n\n.fa-grin-beam:before {\n  content: \"\\f582\"; }\n\n.fa-grin-beam-sweat:before {\n  content: \"\\f583\"; }\n\n.fa-grin-hearts:before {\n  content: \"\\f584\"; }\n\n.fa-grin-squint:before {\n  content: \"\\f585\"; }\n\n.fa-grin-squint-tears:before {\n  content: \"\\f586\"; }\n\n.fa-grin-stars:before {\n  content: \"\\f587\"; }\n\n.fa-grin-tears:before {\n  content: \"\\f588\"; }\n\n.fa-grin-tongue:before {\n  content: \"\\f589\"; }\n\n.fa-grin-tongue-squint:before {\n  content: \"\\f58a\"; }\n\n.fa-grin-tongue-wink:before {\n  content: \"\\f58b\"; }\n\n.fa-grin-wink:before {\n  content: \"\\f58c\"; }\n\n.fa-grip-horizontal:before {\n  content: \"\\f58d\"; }\n\n.fa-grip-lines:before {\n  content: \"\\f7a4\"; }\n\n.fa-grip-lines-vertical:before {\n  content: \"\\f7a5\"; }\n\n.fa-grip-vertical:before {\n  content: \"\\f58e\"; }\n\n.fa-gripfire:before {\n  content: \"\\f3ac\"; }\n\n.fa-grunt:before {\n  content: \"\\f3ad\"; }\n\n.fa-guitar:before {\n  content: \"\\f7a6\"; }\n\n.fa-gulp:before {\n  content: \"\\f3ae\"; }\n\n.fa-h-square:before {\n  content: \"\\f0fd\"; }\n\n.fa-hacker-news:before {\n  content: \"\\f1d4\"; }\n\n.fa-hacker-news-square:before {\n  content: \"\\f3af\"; }\n\n.fa-hackerrank:before {\n  content: \"\\f5f7\"; }\n\n.fa-hammer:before {\n  content: \"\\f6e3\"; }\n\n.fa-hamsa:before {\n  content: \"\\f665\"; }\n\n.fa-hand-holding:before {\n  content: \"\\f4bd\"; }\n\n.fa-hand-holding-heart:before {\n  content: \"\\f4be\"; }\n\n.fa-hand-holding-usd:before {\n  content: \"\\f4c0\"; }\n\n.fa-hand-lizard:before {\n  content: \"\\f258\"; }\n\n.fa-hand-paper:before {\n  content: \"\\f256\"; }\n\n.fa-hand-peace:before {\n  content: \"\\f25b\"; }\n\n.fa-hand-point-down:before {\n  content: \"\\f0a7\"; }\n\n.fa-hand-point-left:before {\n  content: \"\\f0a5\"; }\n\n.fa-hand-point-right:before {\n  content: \"\\f0a4\"; }\n\n.fa-hand-point-up:before {\n  content: \"\\f0a6\"; }\n\n.fa-hand-pointer:before {\n  content: \"\\f25a\"; }\n\n.fa-hand-rock:before {\n  content: \"\\f255\"; }\n\n.fa-hand-scissors:before {\n  content: \"\\f257\"; }\n\n.fa-hand-spock:before {\n  content: \"\\f259\"; }\n\n.fa-hands:before {\n  content: \"\\f4c2\"; }\n\n.fa-hands-helping:before {\n  content: \"\\f4c4\"; }\n\n.fa-handshake:before {\n  content: \"\\f2b5\"; }\n\n.fa-hanukiah:before {\n  content: \"\\f6e6\"; }\n\n.fa-hashtag:before {\n  content: \"\\f292\"; }\n\n.fa-hat-wizard:before {\n  content: \"\\f6e8\"; }\n\n.fa-haykal:before {\n  content: \"\\f666\"; }\n\n.fa-hdd:before {\n  content: \"\\f0a0\"; }\n\n.fa-heading:before {\n  content: \"\\f1dc\"; }\n\n.fa-headphones:before {\n  content: \"\\f025\"; }\n\n.fa-headphones-alt:before {\n  content: \"\\f58f\"; }\n\n.fa-headset:before {\n  content: \"\\f590\"; }\n\n.fa-heart:before {\n  content: \"\\f004\"; }\n\n.fa-heart-broken:before {\n  content: \"\\f7a9\"; }\n\n.fa-heartbeat:before {\n  content: \"\\f21e\"; }\n\n.fa-helicopter:before {\n  content: \"\\f533\"; }\n\n.fa-highlighter:before {\n  content: \"\\f591\"; }\n\n.fa-hiking:before {\n  content: \"\\f6ec\"; }\n\n.fa-hippo:before {\n  content: \"\\f6ed\"; }\n\n.fa-hips:before {\n  content: \"\\f452\"; }\n\n.fa-hire-a-helper:before {\n  content: \"\\f3b0\"; }\n\n.fa-history:before {\n  content: \"\\f1da\"; }\n\n.fa-hockey-puck:before {\n  content: \"\\f453\"; }\n\n.fa-holly-berry:before {\n  content: \"\\f7aa\"; }\n\n.fa-home:before {\n  content: \"\\f015\"; }\n\n.fa-hooli:before {\n  content: \"\\f427\"; }\n\n.fa-hornbill:before {\n  content: \"\\f592\"; }\n\n.fa-horse:before {\n  content: \"\\f6f0\"; }\n\n.fa-horse-head:before {\n  content: \"\\f7ab\"; }\n\n.fa-hospital:before {\n  content: \"\\f0f8\"; }\n\n.fa-hospital-alt:before {\n  content: \"\\f47d\"; }\n\n.fa-hospital-symbol:before {\n  content: \"\\f47e\"; }\n\n.fa-hot-tub:before {\n  content: \"\\f593\"; }\n\n.fa-hotel:before {\n  content: \"\\f594\"; }\n\n.fa-hotjar:before {\n  content: \"\\f3b1\"; }\n\n.fa-hourglass:before {\n  content: \"\\f254\"; }\n\n.fa-hourglass-end:before {\n  content: \"\\f253\"; }\n\n.fa-hourglass-half:before {\n  content: \"\\f252\"; }\n\n.fa-hourglass-start:before {\n  content: \"\\f251\"; }\n\n.fa-house-damage:before {\n  content: \"\\f6f1\"; }\n\n.fa-houzz:before {\n  content: \"\\f27c\"; }\n\n.fa-hryvnia:before {\n  content: \"\\f6f2\"; }\n\n.fa-html5:before {\n  content: \"\\f13b\"; }\n\n.fa-hubspot:before {\n  content: \"\\f3b2\"; }\n\n.fa-i-cursor:before {\n  content: \"\\f246\"; }\n\n.fa-icicles:before {\n  content: \"\\f7ad\"; }\n\n.fa-id-badge:before {\n  content: \"\\f2c1\"; }\n\n.fa-id-card:before {\n  content: \"\\f2c2\"; }\n\n.fa-id-card-alt:before {\n  content: \"\\f47f\"; }\n\n.fa-igloo:before {\n  content: \"\\f7ae\"; }\n\n.fa-image:before {\n  content: \"\\f03e\"; }\n\n.fa-images:before {\n  content: \"\\f302\"; }\n\n.fa-imdb:before {\n  content: \"\\f2d8\"; }\n\n.fa-inbox:before {\n  content: \"\\f01c\"; }\n\n.fa-indent:before {\n  content: \"\\f03c\"; }\n\n.fa-industry:before {\n  content: \"\\f275\"; }\n\n.fa-infinity:before {\n  content: \"\\f534\"; }\n\n.fa-info:before {\n  content: \"\\f129\"; }\n\n.fa-info-circle:before {\n  content: \"\\f05a\"; }\n\n.fa-instagram:before {\n  content: \"\\f16d\"; }\n\n.fa-intercom:before {\n  content: \"\\f7af\"; }\n\n.fa-internet-explorer:before {\n  content: \"\\f26b\"; }\n\n.fa-invision:before {\n  content: \"\\f7b0\"; }\n\n.fa-ioxhost:before {\n  content: \"\\f208\"; }\n\n.fa-italic:before {\n  content: \"\\f033\"; }\n\n.fa-itunes:before {\n  content: \"\\f3b4\"; }\n\n.fa-itunes-note:before {\n  content: \"\\f3b5\"; }\n\n.fa-java:before {\n  content: \"\\f4e4\"; }\n\n.fa-jedi:before {\n  content: \"\\f669\"; }\n\n.fa-jedi-order:before {\n  content: \"\\f50e\"; }\n\n.fa-jenkins:before {\n  content: \"\\f3b6\"; }\n\n.fa-jira:before {\n  content: \"\\f7b1\"; }\n\n.fa-joget:before {\n  content: \"\\f3b7\"; }\n\n.fa-joint:before {\n  content: \"\\f595\"; }\n\n.fa-joomla:before {\n  content: \"\\f1aa\"; }\n\n.fa-journal-whills:before {\n  content: \"\\f66a\"; }\n\n.fa-js:before {\n  content: \"\\f3b8\"; }\n\n.fa-js-square:before {\n  content: \"\\f3b9\"; }\n\n.fa-jsfiddle:before {\n  content: \"\\f1cc\"; }\n\n.fa-kaaba:before {\n  content: \"\\f66b\"; }\n\n.fa-kaggle:before {\n  content: \"\\f5fa\"; }\n\n.fa-key:before {\n  content: \"\\f084\"; }\n\n.fa-keybase:before {\n  content: \"\\f4f5\"; }\n\n.fa-keyboard:before {\n  content: \"\\f11c\"; }\n\n.fa-keycdn:before {\n  content: \"\\f3ba\"; }\n\n.fa-khanda:before {\n  content: \"\\f66d\"; }\n\n.fa-kickstarter:before {\n  content: \"\\f3bb\"; }\n\n.fa-kickstarter-k:before {\n  content: \"\\f3bc\"; }\n\n.fa-kiss:before {\n  content: \"\\f596\"; }\n\n.fa-kiss-beam:before {\n  content: \"\\f597\"; }\n\n.fa-kiss-wink-heart:before {\n  content: \"\\f598\"; }\n\n.fa-kiwi-bird:before {\n  content: \"\\f535\"; }\n\n.fa-korvue:before {\n  content: \"\\f42f\"; }\n\n.fa-landmark:before {\n  content: \"\\f66f\"; }\n\n.fa-language:before {\n  content: \"\\f1ab\"; }\n\n.fa-laptop:before {\n  content: \"\\f109\"; }\n\n.fa-laptop-code:before {\n  content: \"\\f5fc\"; }\n\n.fa-laravel:before {\n  content: \"\\f3bd\"; }\n\n.fa-lastfm:before {\n  content: \"\\f202\"; }\n\n.fa-lastfm-square:before {\n  content: \"\\f203\"; }\n\n.fa-laugh:before {\n  content: \"\\f599\"; }\n\n.fa-laugh-beam:before {\n  content: \"\\f59a\"; }\n\n.fa-laugh-squint:before {\n  content: \"\\f59b\"; }\n\n.fa-laugh-wink:before {\n  content: \"\\f59c\"; }\n\n.fa-layer-group:before {\n  content: \"\\f5fd\"; }\n\n.fa-leaf:before {\n  content: \"\\f06c\"; }\n\n.fa-leanpub:before {\n  content: \"\\f212\"; }\n\n.fa-lemon:before {\n  content: \"\\f094\"; }\n\n.fa-less:before {\n  content: \"\\f41d\"; }\n\n.fa-less-than:before {\n  content: \"\\f536\"; }\n\n.fa-less-than-equal:before {\n  content: \"\\f537\"; }\n\n.fa-level-down-alt:before {\n  content: \"\\f3be\"; }\n\n.fa-level-up-alt:before {\n  content: \"\\f3bf\"; }\n\n.fa-life-ring:before {\n  content: \"\\f1cd\"; }\n\n.fa-lightbulb:before {\n  content: \"\\f0eb\"; }\n\n.fa-line:before {\n  content: \"\\f3c0\"; }\n\n.fa-link:before {\n  content: \"\\f0c1\"; }\n\n.fa-linkedin:before {\n  content: \"\\f08c\"; }\n\n.fa-linkedin-in:before {\n  content: \"\\f0e1\"; }\n\n.fa-linode:before {\n  content: \"\\f2b8\"; }\n\n.fa-linux:before {\n  content: \"\\f17c\"; }\n\n.fa-lira-sign:before {\n  content: \"\\f195\"; }\n\n.fa-list:before {\n  content: \"\\f03a\"; }\n\n.fa-list-alt:before {\n  content: \"\\f022\"; }\n\n.fa-list-ol:before {\n  content: \"\\f0cb\"; }\n\n.fa-list-ul:before {\n  content: \"\\f0ca\"; }\n\n.fa-location-arrow:before {\n  content: \"\\f124\"; }\n\n.fa-lock:before {\n  content: \"\\f023\"; }\n\n.fa-lock-open:before {\n  content: \"\\f3c1\"; }\n\n.fa-long-arrow-alt-down:before {\n  content: \"\\f309\"; }\n\n.fa-long-arrow-alt-left:before {\n  content: \"\\f30a\"; }\n\n.fa-long-arrow-alt-right:before {\n  content: \"\\f30b\"; }\n\n.fa-long-arrow-alt-up:before {\n  content: \"\\f30c\"; }\n\n.fa-low-vision:before {\n  content: \"\\f2a8\"; }\n\n.fa-luggage-cart:before {\n  content: \"\\f59d\"; }\n\n.fa-lyft:before {\n  content: \"\\f3c3\"; }\n\n.fa-magento:before {\n  content: \"\\f3c4\"; }\n\n.fa-magic:before {\n  content: \"\\f0d0\"; }\n\n.fa-magnet:before {\n  content: \"\\f076\"; }\n\n.fa-mail-bulk:before {\n  content: \"\\f674\"; }\n\n.fa-mailchimp:before {\n  content: \"\\f59e\"; }\n\n.fa-male:before {\n  content: \"\\f183\"; }\n\n.fa-mandalorian:before {\n  content: \"\\f50f\"; }\n\n.fa-map:before {\n  content: \"\\f279\"; }\n\n.fa-map-marked:before {\n  content: \"\\f59f\"; }\n\n.fa-map-marked-alt:before {\n  content: \"\\f5a0\"; }\n\n.fa-map-marker:before {\n  content: \"\\f041\"; }\n\n.fa-map-marker-alt:before {\n  content: \"\\f3c5\"; }\n\n.fa-map-pin:before {\n  content: \"\\f276\"; }\n\n.fa-map-signs:before {\n  content: \"\\f277\"; }\n\n.fa-markdown:before {\n  content: \"\\f60f\"; }\n\n.fa-marker:before {\n  content: \"\\f5a1\"; }\n\n.fa-mars:before {\n  content: \"\\f222\"; }\n\n.fa-mars-double:before {\n  content: \"\\f227\"; }\n\n.fa-mars-stroke:before {\n  content: \"\\f229\"; }\n\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\"; }\n\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\"; }\n\n.fa-mask:before {\n  content: \"\\f6fa\"; }\n\n.fa-mastodon:before {\n  content: \"\\f4f6\"; }\n\n.fa-maxcdn:before {\n  content: \"\\f136\"; }\n\n.fa-medal:before {\n  content: \"\\f5a2\"; }\n\n.fa-medapps:before {\n  content: \"\\f3c6\"; }\n\n.fa-medium:before {\n  content: \"\\f23a\"; }\n\n.fa-medium-m:before {\n  content: \"\\f3c7\"; }\n\n.fa-medkit:before {\n  content: \"\\f0fa\"; }\n\n.fa-medrt:before {\n  content: \"\\f3c8\"; }\n\n.fa-meetup:before {\n  content: \"\\f2e0\"; }\n\n.fa-megaport:before {\n  content: \"\\f5a3\"; }\n\n.fa-meh:before {\n  content: \"\\f11a\"; }\n\n.fa-meh-blank:before {\n  content: \"\\f5a4\"; }\n\n.fa-meh-rolling-eyes:before {\n  content: \"\\f5a5\"; }\n\n.fa-memory:before {\n  content: \"\\f538\"; }\n\n.fa-mendeley:before {\n  content: \"\\f7b3\"; }\n\n.fa-menorah:before {\n  content: \"\\f676\"; }\n\n.fa-mercury:before {\n  content: \"\\f223\"; }\n\n.fa-meteor:before {\n  content: \"\\f753\"; }\n\n.fa-microchip:before {\n  content: \"\\f2db\"; }\n\n.fa-microphone:before {\n  content: \"\\f130\"; }\n\n.fa-microphone-alt:before {\n  content: \"\\f3c9\"; }\n\n.fa-microphone-alt-slash:before {\n  content: \"\\f539\"; }\n\n.fa-microphone-slash:before {\n  content: \"\\f131\"; }\n\n.fa-microscope:before {\n  content: \"\\f610\"; }\n\n.fa-microsoft:before {\n  content: \"\\f3ca\"; }\n\n.fa-minus:before {\n  content: \"\\f068\"; }\n\n.fa-minus-circle:before {\n  content: \"\\f056\"; }\n\n.fa-minus-square:before {\n  content: \"\\f146\"; }\n\n.fa-mitten:before {\n  content: \"\\f7b5\"; }\n\n.fa-mix:before {\n  content: \"\\f3cb\"; }\n\n.fa-mixcloud:before {\n  content: \"\\f289\"; }\n\n.fa-mizuni:before {\n  content: \"\\f3cc\"; }\n\n.fa-mobile:before {\n  content: \"\\f10b\"; }\n\n.fa-mobile-alt:before {\n  content: \"\\f3cd\"; }\n\n.fa-modx:before {\n  content: \"\\f285\"; }\n\n.fa-monero:before {\n  content: \"\\f3d0\"; }\n\n.fa-money-bill:before {\n  content: \"\\f0d6\"; }\n\n.fa-money-bill-alt:before {\n  content: \"\\f3d1\"; }\n\n.fa-money-bill-wave:before {\n  content: \"\\f53a\"; }\n\n.fa-money-bill-wave-alt:before {\n  content: \"\\f53b\"; }\n\n.fa-money-check:before {\n  content: \"\\f53c\"; }\n\n.fa-money-check-alt:before {\n  content: \"\\f53d\"; }\n\n.fa-monument:before {\n  content: \"\\f5a6\"; }\n\n.fa-moon:before {\n  content: \"\\f186\"; }\n\n.fa-mortar-pestle:before {\n  content: \"\\f5a7\"; }\n\n.fa-mosque:before {\n  content: \"\\f678\"; }\n\n.fa-motorcycle:before {\n  content: \"\\f21c\"; }\n\n.fa-mountain:before {\n  content: \"\\f6fc\"; }\n\n.fa-mouse-pointer:before {\n  content: \"\\f245\"; }\n\n.fa-mug-hot:before {\n  content: \"\\f7b6\"; }\n\n.fa-music:before {\n  content: \"\\f001\"; }\n\n.fa-napster:before {\n  content: \"\\f3d2\"; }\n\n.fa-neos:before {\n  content: \"\\f612\"; }\n\n.fa-network-wired:before {\n  content: \"\\f6ff\"; }\n\n.fa-neuter:before {\n  content: \"\\f22c\"; }\n\n.fa-newspaper:before {\n  content: \"\\f1ea\"; }\n\n.fa-nimblr:before {\n  content: \"\\f5a8\"; }\n\n.fa-nintendo-switch:before {\n  content: \"\\f418\"; }\n\n.fa-node:before {\n  content: \"\\f419\"; }\n\n.fa-node-js:before {\n  content: \"\\f3d3\"; }\n\n.fa-not-equal:before {\n  content: \"\\f53e\"; }\n\n.fa-notes-medical:before {\n  content: \"\\f481\"; }\n\n.fa-npm:before {\n  content: \"\\f3d4\"; }\n\n.fa-ns8:before {\n  content: \"\\f3d5\"; }\n\n.fa-nutritionix:before {\n  content: \"\\f3d6\"; }\n\n.fa-object-group:before {\n  content: \"\\f247\"; }\n\n.fa-object-ungroup:before {\n  content: \"\\f248\"; }\n\n.fa-odnoklassniki:before {\n  content: \"\\f263\"; }\n\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\"; }\n\n.fa-oil-can:before {\n  content: \"\\f613\"; }\n\n.fa-old-republic:before {\n  content: \"\\f510\"; }\n\n.fa-om:before {\n  content: \"\\f679\"; }\n\n.fa-opencart:before {\n  content: \"\\f23d\"; }\n\n.fa-openid:before {\n  content: \"\\f19b\"; }\n\n.fa-opera:before {\n  content: \"\\f26a\"; }\n\n.fa-optin-monster:before {\n  content: \"\\f23c\"; }\n\n.fa-osi:before {\n  content: \"\\f41a\"; }\n\n.fa-otter:before {\n  content: \"\\f700\"; }\n\n.fa-outdent:before {\n  content: \"\\f03b\"; }\n\n.fa-page4:before {\n  content: \"\\f3d7\"; }\n\n.fa-pagelines:before {\n  content: \"\\f18c\"; }\n\n.fa-paint-brush:before {\n  content: \"\\f1fc\"; }\n\n.fa-paint-roller:before {\n  content: \"\\f5aa\"; }\n\n.fa-palette:before {\n  content: \"\\f53f\"; }\n\n.fa-palfed:before {\n  content: \"\\f3d8\"; }\n\n.fa-pallet:before {\n  content: \"\\f482\"; }\n\n.fa-paper-plane:before {\n  content: \"\\f1d8\"; }\n\n.fa-paperclip:before {\n  content: \"\\f0c6\"; }\n\n.fa-parachute-box:before {\n  content: \"\\f4cd\"; }\n\n.fa-paragraph:before {\n  content: \"\\f1dd\"; }\n\n.fa-parking:before {\n  content: \"\\f540\"; }\n\n.fa-passport:before {\n  content: \"\\f5ab\"; }\n\n.fa-pastafarianism:before {\n  content: \"\\f67b\"; }\n\n.fa-paste:before {\n  content: \"\\f0ea\"; }\n\n.fa-patreon:before {\n  content: \"\\f3d9\"; }\n\n.fa-pause:before {\n  content: \"\\f04c\"; }\n\n.fa-pause-circle:before {\n  content: \"\\f28b\"; }\n\n.fa-paw:before {\n  content: \"\\f1b0\"; }\n\n.fa-paypal:before {\n  content: \"\\f1ed\"; }\n\n.fa-peace:before {\n  content: \"\\f67c\"; }\n\n.fa-pen:before {\n  content: \"\\f304\"; }\n\n.fa-pen-alt:before {\n  content: \"\\f305\"; }\n\n.fa-pen-fancy:before {\n  content: \"\\f5ac\"; }\n\n.fa-pen-nib:before {\n  content: \"\\f5ad\"; }\n\n.fa-pen-square:before {\n  content: \"\\f14b\"; }\n\n.fa-pencil-alt:before {\n  content: \"\\f303\"; }\n\n.fa-pencil-ruler:before {\n  content: \"\\f5ae\"; }\n\n.fa-penny-arcade:before {\n  content: \"\\f704\"; }\n\n.fa-people-carry:before {\n  content: \"\\f4ce\"; }\n\n.fa-percent:before {\n  content: \"\\f295\"; }\n\n.fa-percentage:before {\n  content: \"\\f541\"; }\n\n.fa-periscope:before {\n  content: \"\\f3da\"; }\n\n.fa-person-booth:before {\n  content: \"\\f756\"; }\n\n.fa-phabricator:before {\n  content: \"\\f3db\"; }\n\n.fa-phoenix-framework:before {\n  content: \"\\f3dc\"; }\n\n.fa-phoenix-squadron:before {\n  content: \"\\f511\"; }\n\n.fa-phone:before {\n  content: \"\\f095\"; }\n\n.fa-phone-slash:before {\n  content: \"\\f3dd\"; }\n\n.fa-phone-square:before {\n  content: \"\\f098\"; }\n\n.fa-phone-volume:before {\n  content: \"\\f2a0\"; }\n\n.fa-php:before {\n  content: \"\\f457\"; }\n\n.fa-pied-piper:before {\n  content: \"\\f2ae\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\"; }\n\n.fa-pied-piper-hat:before {\n  content: \"\\f4e5\"; }\n\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\"; }\n\n.fa-piggy-bank:before {\n  content: \"\\f4d3\"; }\n\n.fa-pills:before {\n  content: \"\\f484\"; }\n\n.fa-pinterest:before {\n  content: \"\\f0d2\"; }\n\n.fa-pinterest-p:before {\n  content: \"\\f231\"; }\n\n.fa-pinterest-square:before {\n  content: \"\\f0d3\"; }\n\n.fa-place-of-worship:before {\n  content: \"\\f67f\"; }\n\n.fa-plane:before {\n  content: \"\\f072\"; }\n\n.fa-plane-arrival:before {\n  content: \"\\f5af\"; }\n\n.fa-plane-departure:before {\n  content: \"\\f5b0\"; }\n\n.fa-play:before {\n  content: \"\\f04b\"; }\n\n.fa-play-circle:before {\n  content: \"\\f144\"; }\n\n.fa-playstation:before {\n  content: \"\\f3df\"; }\n\n.fa-plug:before {\n  content: \"\\f1e6\"; }\n\n.fa-plus:before {\n  content: \"\\f067\"; }\n\n.fa-plus-circle:before {\n  content: \"\\f055\"; }\n\n.fa-plus-square:before {\n  content: \"\\f0fe\"; }\n\n.fa-podcast:before {\n  content: \"\\f2ce\"; }\n\n.fa-poll:before {\n  content: \"\\f681\"; }\n\n.fa-poll-h:before {\n  content: \"\\f682\"; }\n\n.fa-poo:before {\n  content: \"\\f2fe\"; }\n\n.fa-poo-storm:before {\n  content: \"\\f75a\"; }\n\n.fa-poop:before {\n  content: \"\\f619\"; }\n\n.fa-portrait:before {\n  content: \"\\f3e0\"; }\n\n.fa-pound-sign:before {\n  content: \"\\f154\"; }\n\n.fa-power-off:before {\n  content: \"\\f011\"; }\n\n.fa-pray:before {\n  content: \"\\f683\"; }\n\n.fa-praying-hands:before {\n  content: \"\\f684\"; }\n\n.fa-prescription:before {\n  content: \"\\f5b1\"; }\n\n.fa-prescription-bottle:before {\n  content: \"\\f485\"; }\n\n.fa-prescription-bottle-alt:before {\n  content: \"\\f486\"; }\n\n.fa-print:before {\n  content: \"\\f02f\"; }\n\n.fa-procedures:before {\n  content: \"\\f487\"; }\n\n.fa-product-hunt:before {\n  content: \"\\f288\"; }\n\n.fa-project-diagram:before {\n  content: \"\\f542\"; }\n\n.fa-pushed:before {\n  content: \"\\f3e1\"; }\n\n.fa-puzzle-piece:before {\n  content: \"\\f12e\"; }\n\n.fa-python:before {\n  content: \"\\f3e2\"; }\n\n.fa-qq:before {\n  content: \"\\f1d6\"; }\n\n.fa-qrcode:before {\n  content: \"\\f029\"; }\n\n.fa-question:before {\n  content: \"\\f128\"; }\n\n.fa-question-circle:before {\n  content: \"\\f059\"; }\n\n.fa-quidditch:before {\n  content: \"\\f458\"; }\n\n.fa-quinscape:before {\n  content: \"\\f459\"; }\n\n.fa-quora:before {\n  content: \"\\f2c4\"; }\n\n.fa-quote-left:before {\n  content: \"\\f10d\"; }\n\n.fa-quote-right:before {\n  content: \"\\f10e\"; }\n\n.fa-quran:before {\n  content: \"\\f687\"; }\n\n.fa-r-project:before {\n  content: \"\\f4f7\"; }\n\n.fa-radiation:before {\n  content: \"\\f7b9\"; }\n\n.fa-radiation-alt:before {\n  content: \"\\f7ba\"; }\n\n.fa-rainbow:before {\n  content: \"\\f75b\"; }\n\n.fa-random:before {\n  content: \"\\f074\"; }\n\n.fa-raspberry-pi:before {\n  content: \"\\f7bb\"; }\n\n.fa-ravelry:before {\n  content: \"\\f2d9\"; }\n\n.fa-react:before {\n  content: \"\\f41b\"; }\n\n.fa-reacteurope:before {\n  content: \"\\f75d\"; }\n\n.fa-readme:before {\n  content: \"\\f4d5\"; }\n\n.fa-rebel:before {\n  content: \"\\f1d0\"; }\n\n.fa-receipt:before {\n  content: \"\\f543\"; }\n\n.fa-recycle:before {\n  content: \"\\f1b8\"; }\n\n.fa-red-river:before {\n  content: \"\\f3e3\"; }\n\n.fa-reddit:before {\n  content: \"\\f1a1\"; }\n\n.fa-reddit-alien:before {\n  content: \"\\f281\"; }\n\n.fa-reddit-square:before {\n  content: \"\\f1a2\"; }\n\n.fa-redhat:before {\n  content: \"\\f7bc\"; }\n\n.fa-redo:before {\n  content: \"\\f01e\"; }\n\n.fa-redo-alt:before {\n  content: \"\\f2f9\"; }\n\n.fa-registered:before {\n  content: \"\\f25d\"; }\n\n.fa-renren:before {\n  content: \"\\f18b\"; }\n\n.fa-reply:before {\n  content: \"\\f3e5\"; }\n\n.fa-reply-all:before {\n  content: \"\\f122\"; }\n\n.fa-replyd:before {\n  content: \"\\f3e6\"; }\n\n.fa-republican:before {\n  content: \"\\f75e\"; }\n\n.fa-researchgate:before {\n  content: \"\\f4f8\"; }\n\n.fa-resolving:before {\n  content: \"\\f3e7\"; }\n\n.fa-restroom:before {\n  content: \"\\f7bd\"; }\n\n.fa-retweet:before {\n  content: \"\\f079\"; }\n\n.fa-rev:before {\n  content: \"\\f5b2\"; }\n\n.fa-ribbon:before {\n  content: \"\\f4d6\"; }\n\n.fa-ring:before {\n  content: \"\\f70b\"; }\n\n.fa-road:before {\n  content: \"\\f018\"; }\n\n.fa-robot:before {\n  content: \"\\f544\"; }\n\n.fa-rocket:before {\n  content: \"\\f135\"; }\n\n.fa-rocketchat:before {\n  content: \"\\f3e8\"; }\n\n.fa-rockrms:before {\n  content: \"\\f3e9\"; }\n\n.fa-route:before {\n  content: \"\\f4d7\"; }\n\n.fa-rss:before {\n  content: \"\\f09e\"; }\n\n.fa-rss-square:before {\n  content: \"\\f143\"; }\n\n.fa-ruble-sign:before {\n  content: \"\\f158\"; }\n\n.fa-ruler:before {\n  content: \"\\f545\"; }\n\n.fa-ruler-combined:before {\n  content: \"\\f546\"; }\n\n.fa-ruler-horizontal:before {\n  content: \"\\f547\"; }\n\n.fa-ruler-vertical:before {\n  content: \"\\f548\"; }\n\n.fa-running:before {\n  content: \"\\f70c\"; }\n\n.fa-rupee-sign:before {\n  content: \"\\f156\"; }\n\n.fa-sad-cry:before {\n  content: \"\\f5b3\"; }\n\n.fa-sad-tear:before {\n  content: \"\\f5b4\"; }\n\n.fa-safari:before {\n  content: \"\\f267\"; }\n\n.fa-sass:before {\n  content: \"\\f41e\"; }\n\n.fa-satellite:before {\n  content: \"\\f7bf\"; }\n\n.fa-satellite-dish:before {\n  content: \"\\f7c0\"; }\n\n.fa-save:before {\n  content: \"\\f0c7\"; }\n\n.fa-schlix:before {\n  content: \"\\f3ea\"; }\n\n.fa-school:before {\n  content: \"\\f549\"; }\n\n.fa-screwdriver:before {\n  content: \"\\f54a\"; }\n\n.fa-scribd:before {\n  content: \"\\f28a\"; }\n\n.fa-scroll:before {\n  content: \"\\f70e\"; }\n\n.fa-sd-card:before {\n  content: \"\\f7c2\"; }\n\n.fa-search:before {\n  content: \"\\f002\"; }\n\n.fa-search-dollar:before {\n  content: \"\\f688\"; }\n\n.fa-search-location:before {\n  content: \"\\f689\"; }\n\n.fa-search-minus:before {\n  content: \"\\f010\"; }\n\n.fa-search-plus:before {\n  content: \"\\f00e\"; }\n\n.fa-searchengin:before {\n  content: \"\\f3eb\"; }\n\n.fa-seedling:before {\n  content: \"\\f4d8\"; }\n\n.fa-sellcast:before {\n  content: \"\\f2da\"; }\n\n.fa-sellsy:before {\n  content: \"\\f213\"; }\n\n.fa-server:before {\n  content: \"\\f233\"; }\n\n.fa-servicestack:before {\n  content: \"\\f3ec\"; }\n\n.fa-shapes:before {\n  content: \"\\f61f\"; }\n\n.fa-share:before {\n  content: \"\\f064\"; }\n\n.fa-share-alt:before {\n  content: \"\\f1e0\"; }\n\n.fa-share-alt-square:before {\n  content: \"\\f1e1\"; }\n\n.fa-share-square:before {\n  content: \"\\f14d\"; }\n\n.fa-shekel-sign:before {\n  content: \"\\f20b\"; }\n\n.fa-shield-alt:before {\n  content: \"\\f3ed\"; }\n\n.fa-ship:before {\n  content: \"\\f21a\"; }\n\n.fa-shipping-fast:before {\n  content: \"\\f48b\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\\f214\"; }\n\n.fa-shoe-prints:before {\n  content: \"\\f54b\"; }\n\n.fa-shopping-bag:before {\n  content: \"\\f290\"; }\n\n.fa-shopping-basket:before {\n  content: \"\\f291\"; }\n\n.fa-shopping-cart:before {\n  content: \"\\f07a\"; }\n\n.fa-shopware:before {\n  content: \"\\f5b5\"; }\n\n.fa-shower:before {\n  content: \"\\f2cc\"; }\n\n.fa-shuttle-van:before {\n  content: \"\\f5b6\"; }\n\n.fa-sign:before {\n  content: \"\\f4d9\"; }\n\n.fa-sign-in-alt:before {\n  content: \"\\f2f6\"; }\n\n.fa-sign-language:before {\n  content: \"\\f2a7\"; }\n\n.fa-sign-out-alt:before {\n  content: \"\\f2f5\"; }\n\n.fa-signal:before {\n  content: \"\\f012\"; }\n\n.fa-signature:before {\n  content: \"\\f5b7\"; }\n\n.fa-sim-card:before {\n  content: \"\\f7c4\"; }\n\n.fa-simplybuilt:before {\n  content: \"\\f215\"; }\n\n.fa-sistrix:before {\n  content: \"\\f3ee\"; }\n\n.fa-sitemap:before {\n  content: \"\\f0e8\"; }\n\n.fa-sith:before {\n  content: \"\\f512\"; }\n\n.fa-skating:before {\n  content: \"\\f7c5\"; }\n\n.fa-sketch:before {\n  content: \"\\f7c6\"; }\n\n.fa-skiing:before {\n  content: \"\\f7c9\"; }\n\n.fa-skiing-nordic:before {\n  content: \"\\f7ca\"; }\n\n.fa-skull:before {\n  content: \"\\f54c\"; }\n\n.fa-skull-crossbones:before {\n  content: \"\\f714\"; }\n\n.fa-skyatlas:before {\n  content: \"\\f216\"; }\n\n.fa-skype:before {\n  content: \"\\f17e\"; }\n\n.fa-slack:before {\n  content: \"\\f198\"; }\n\n.fa-slack-hash:before {\n  content: \"\\f3ef\"; }\n\n.fa-slash:before {\n  content: \"\\f715\"; }\n\n.fa-sleigh:before {\n  content: \"\\f7cc\"; }\n\n.fa-sliders-h:before {\n  content: \"\\f1de\"; }\n\n.fa-slideshare:before {\n  content: \"\\f1e7\"; }\n\n.fa-smile:before {\n  content: \"\\f118\"; }\n\n.fa-smile-beam:before {\n  content: \"\\f5b8\"; }\n\n.fa-smile-wink:before {\n  content: \"\\f4da\"; }\n\n.fa-smog:before {\n  content: \"\\f75f\"; }\n\n.fa-smoking:before {\n  content: \"\\f48d\"; }\n\n.fa-smoking-ban:before {\n  content: \"\\f54d\"; }\n\n.fa-sms:before {\n  content: \"\\f7cd\"; }\n\n.fa-snapchat:before {\n  content: \"\\f2ab\"; }\n\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\"; }\n\n.fa-snapchat-square:before {\n  content: \"\\f2ad\"; }\n\n.fa-snowboarding:before {\n  content: \"\\f7ce\"; }\n\n.fa-snowflake:before {\n  content: \"\\f2dc\"; }\n\n.fa-snowman:before {\n  content: \"\\f7d0\"; }\n\n.fa-snowplow:before {\n  content: \"\\f7d2\"; }\n\n.fa-socks:before {\n  content: \"\\f696\"; }\n\n.fa-solar-panel:before {\n  content: \"\\f5ba\"; }\n\n.fa-sort:before {\n  content: \"\\f0dc\"; }\n\n.fa-sort-alpha-down:before {\n  content: \"\\f15d\"; }\n\n.fa-sort-alpha-up:before {\n  content: \"\\f15e\"; }\n\n.fa-sort-amount-down:before {\n  content: \"\\f160\"; }\n\n.fa-sort-amount-up:before {\n  content: \"\\f161\"; }\n\n.fa-sort-down:before {\n  content: \"\\f0dd\"; }\n\n.fa-sort-numeric-down:before {\n  content: \"\\f162\"; }\n\n.fa-sort-numeric-up:before {\n  content: \"\\f163\"; }\n\n.fa-sort-up:before {\n  content: \"\\f0de\"; }\n\n.fa-soundcloud:before {\n  content: \"\\f1be\"; }\n\n.fa-sourcetree:before {\n  content: \"\\f7d3\"; }\n\n.fa-spa:before {\n  content: \"\\f5bb\"; }\n\n.fa-space-shuttle:before {\n  content: \"\\f197\"; }\n\n.fa-speakap:before {\n  content: \"\\f3f3\"; }\n\n.fa-spider:before {\n  content: \"\\f717\"; }\n\n.fa-spinner:before {\n  content: \"\\f110\"; }\n\n.fa-splotch:before {\n  content: \"\\f5bc\"; }\n\n.fa-spotify:before {\n  content: \"\\f1bc\"; }\n\n.fa-spray-can:before {\n  content: \"\\f5bd\"; }\n\n.fa-square:before {\n  content: \"\\f0c8\"; }\n\n.fa-square-full:before {\n  content: \"\\f45c\"; }\n\n.fa-square-root-alt:before {\n  content: \"\\f698\"; }\n\n.fa-squarespace:before {\n  content: \"\\f5be\"; }\n\n.fa-stack-exchange:before {\n  content: \"\\f18d\"; }\n\n.fa-stack-overflow:before {\n  content: \"\\f16c\"; }\n\n.fa-stamp:before {\n  content: \"\\f5bf\"; }\n\n.fa-star:before {\n  content: \"\\f005\"; }\n\n.fa-star-and-crescent:before {\n  content: \"\\f699\"; }\n\n.fa-star-half:before {\n  content: \"\\f089\"; }\n\n.fa-star-half-alt:before {\n  content: \"\\f5c0\"; }\n\n.fa-star-of-david:before {\n  content: \"\\f69a\"; }\n\n.fa-star-of-life:before {\n  content: \"\\f621\"; }\n\n.fa-staylinked:before {\n  content: \"\\f3f5\"; }\n\n.fa-steam:before {\n  content: \"\\f1b6\"; }\n\n.fa-steam-square:before {\n  content: \"\\f1b7\"; }\n\n.fa-steam-symbol:before {\n  content: \"\\f3f6\"; }\n\n.fa-step-backward:before {\n  content: \"\\f048\"; }\n\n.fa-step-forward:before {\n  content: \"\\f051\"; }\n\n.fa-stethoscope:before {\n  content: \"\\f0f1\"; }\n\n.fa-sticker-mule:before {\n  content: \"\\f3f7\"; }\n\n.fa-sticky-note:before {\n  content: \"\\f249\"; }\n\n.fa-stop:before {\n  content: \"\\f04d\"; }\n\n.fa-stop-circle:before {\n  content: \"\\f28d\"; }\n\n.fa-stopwatch:before {\n  content: \"\\f2f2\"; }\n\n.fa-store:before {\n  content: \"\\f54e\"; }\n\n.fa-store-alt:before {\n  content: \"\\f54f\"; }\n\n.fa-strava:before {\n  content: \"\\f428\"; }\n\n.fa-stream:before {\n  content: \"\\f550\"; }\n\n.fa-street-view:before {\n  content: \"\\f21d\"; }\n\n.fa-strikethrough:before {\n  content: \"\\f0cc\"; }\n\n.fa-stripe:before {\n  content: \"\\f429\"; }\n\n.fa-stripe-s:before {\n  content: \"\\f42a\"; }\n\n.fa-stroopwafel:before {\n  content: \"\\f551\"; }\n\n.fa-studiovinari:before {\n  content: \"\\f3f8\"; }\n\n.fa-stumbleupon:before {\n  content: \"\\f1a4\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\"; }\n\n.fa-subscript:before {\n  content: \"\\f12c\"; }\n\n.fa-subway:before {\n  content: \"\\f239\"; }\n\n.fa-suitcase:before {\n  content: \"\\f0f2\"; }\n\n.fa-suitcase-rolling:before {\n  content: \"\\f5c1\"; }\n\n.fa-sun:before {\n  content: \"\\f185\"; }\n\n.fa-superpowers:before {\n  content: \"\\f2dd\"; }\n\n.fa-superscript:before {\n  content: \"\\f12b\"; }\n\n.fa-supple:before {\n  content: \"\\f3f9\"; }\n\n.fa-surprise:before {\n  content: \"\\f5c2\"; }\n\n.fa-suse:before {\n  content: \"\\f7d6\"; }\n\n.fa-swatchbook:before {\n  content: \"\\f5c3\"; }\n\n.fa-swimmer:before {\n  content: \"\\f5c4\"; }\n\n.fa-swimming-pool:before {\n  content: \"\\f5c5\"; }\n\n.fa-synagogue:before {\n  content: \"\\f69b\"; }\n\n.fa-sync:before {\n  content: \"\\f021\"; }\n\n.fa-sync-alt:before {\n  content: \"\\f2f1\"; }\n\n.fa-syringe:before {\n  content: \"\\f48e\"; }\n\n.fa-table:before {\n  content: \"\\f0ce\"; }\n\n.fa-table-tennis:before {\n  content: \"\\f45d\"; }\n\n.fa-tablet:before {\n  content: \"\\f10a\"; }\n\n.fa-tablet-alt:before {\n  content: \"\\f3fa\"; }\n\n.fa-tablets:before {\n  content: \"\\f490\"; }\n\n.fa-tachometer-alt:before {\n  content: \"\\f3fd\"; }\n\n.fa-tag:before {\n  content: \"\\f02b\"; }\n\n.fa-tags:before {\n  content: \"\\f02c\"; }\n\n.fa-tape:before {\n  content: \"\\f4db\"; }\n\n.fa-tasks:before {\n  content: \"\\f0ae\"; }\n\n.fa-taxi:before {\n  content: \"\\f1ba\"; }\n\n.fa-teamspeak:before {\n  content: \"\\f4f9\"; }\n\n.fa-teeth:before {\n  content: \"\\f62e\"; }\n\n.fa-teeth-open:before {\n  content: \"\\f62f\"; }\n\n.fa-telegram:before {\n  content: \"\\f2c6\"; }\n\n.fa-telegram-plane:before {\n  content: \"\\f3fe\"; }\n\n.fa-temperature-high:before {\n  content: \"\\f769\"; }\n\n.fa-temperature-low:before {\n  content: \"\\f76b\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\"; }\n\n.fa-tenge:before {\n  content: \"\\f7d7\"; }\n\n.fa-terminal:before {\n  content: \"\\f120\"; }\n\n.fa-text-height:before {\n  content: \"\\f034\"; }\n\n.fa-text-width:before {\n  content: \"\\f035\"; }\n\n.fa-th:before {\n  content: \"\\f00a\"; }\n\n.fa-th-large:before {\n  content: \"\\f009\"; }\n\n.fa-th-list:before {\n  content: \"\\f00b\"; }\n\n.fa-the-red-yeti:before {\n  content: \"\\f69d\"; }\n\n.fa-theater-masks:before {\n  content: \"\\f630\"; }\n\n.fa-themeco:before {\n  content: \"\\f5c6\"; }\n\n.fa-themeisle:before {\n  content: \"\\f2b2\"; }\n\n.fa-thermometer:before {\n  content: \"\\f491\"; }\n\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\"; }\n\n.fa-thermometer-full:before {\n  content: \"\\f2c7\"; }\n\n.fa-thermometer-half:before {\n  content: \"\\f2c9\"; }\n\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\"; }\n\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\"; }\n\n.fa-think-peaks:before {\n  content: \"\\f731\"; }\n\n.fa-thumbs-down:before {\n  content: \"\\f165\"; }\n\n.fa-thumbs-up:before {\n  content: \"\\f164\"; }\n\n.fa-thumbtack:before {\n  content: \"\\f08d\"; }\n\n.fa-ticket-alt:before {\n  content: \"\\f3ff\"; }\n\n.fa-times:before {\n  content: \"\\f00d\"; }\n\n.fa-times-circle:before {\n  content: \"\\f057\"; }\n\n.fa-tint:before {\n  content: \"\\f043\"; }\n\n.fa-tint-slash:before {\n  content: \"\\f5c7\"; }\n\n.fa-tired:before {\n  content: \"\\f5c8\"; }\n\n.fa-toggle-off:before {\n  content: \"\\f204\"; }\n\n.fa-toggle-on:before {\n  content: \"\\f205\"; }\n\n.fa-toilet:before {\n  content: \"\\f7d8\"; }\n\n.fa-toilet-paper:before {\n  content: \"\\f71e\"; }\n\n.fa-toolbox:before {\n  content: \"\\f552\"; }\n\n.fa-tools:before {\n  content: \"\\f7d9\"; }\n\n.fa-tooth:before {\n  content: \"\\f5c9\"; }\n\n.fa-torah:before {\n  content: \"\\f6a0\"; }\n\n.fa-torii-gate:before {\n  content: \"\\f6a1\"; }\n\n.fa-tractor:before {\n  content: \"\\f722\"; }\n\n.fa-trade-federation:before {\n  content: \"\\f513\"; }\n\n.fa-trademark:before {\n  content: \"\\f25c\"; }\n\n.fa-traffic-light:before {\n  content: \"\\f637\"; }\n\n.fa-train:before {\n  content: \"\\f238\"; }\n\n.fa-tram:before {\n  content: \"\\f7da\"; }\n\n.fa-transgender:before {\n  content: \"\\f224\"; }\n\n.fa-transgender-alt:before {\n  content: \"\\f225\"; }\n\n.fa-trash:before {\n  content: \"\\f1f8\"; }\n\n.fa-trash-alt:before {\n  content: \"\\f2ed\"; }\n\n.fa-tree:before {\n  content: \"\\f1bb\"; }\n\n.fa-trello:before {\n  content: \"\\f181\"; }\n\n.fa-tripadvisor:before {\n  content: \"\\f262\"; }\n\n.fa-trophy:before {\n  content: \"\\f091\"; }\n\n.fa-truck:before {\n  content: \"\\f0d1\"; }\n\n.fa-truck-loading:before {\n  content: \"\\f4de\"; }\n\n.fa-truck-monster:before {\n  content: \"\\f63b\"; }\n\n.fa-truck-moving:before {\n  content: \"\\f4df\"; }\n\n.fa-truck-pickup:before {\n  content: \"\\f63c\"; }\n\n.fa-tshirt:before {\n  content: \"\\f553\"; }\n\n.fa-tty:before {\n  content: \"\\f1e4\"; }\n\n.fa-tumblr:before {\n  content: \"\\f173\"; }\n\n.fa-tumblr-square:before {\n  content: \"\\f174\"; }\n\n.fa-tv:before {\n  content: \"\\f26c\"; }\n\n.fa-twitch:before {\n  content: \"\\f1e8\"; }\n\n.fa-twitter:before {\n  content: \"\\f099\"; }\n\n.fa-twitter-square:before {\n  content: \"\\f081\"; }\n\n.fa-typo3:before {\n  content: \"\\f42b\"; }\n\n.fa-uber:before {\n  content: \"\\f402\"; }\n\n.fa-ubuntu:before {\n  content: \"\\f7df\"; }\n\n.fa-uikit:before {\n  content: \"\\f403\"; }\n\n.fa-umbrella:before {\n  content: \"\\f0e9\"; }\n\n.fa-umbrella-beach:before {\n  content: \"\\f5ca\"; }\n\n.fa-underline:before {\n  content: \"\\f0cd\"; }\n\n.fa-undo:before {\n  content: \"\\f0e2\"; }\n\n.fa-undo-alt:before {\n  content: \"\\f2ea\"; }\n\n.fa-uniregistry:before {\n  content: \"\\f404\"; }\n\n.fa-universal-access:before {\n  content: \"\\f29a\"; }\n\n.fa-university:before {\n  content: \"\\f19c\"; }\n\n.fa-unlink:before {\n  content: \"\\f127\"; }\n\n.fa-unlock:before {\n  content: \"\\f09c\"; }\n\n.fa-unlock-alt:before {\n  content: \"\\f13e\"; }\n\n.fa-untappd:before {\n  content: \"\\f405\"; }\n\n.fa-upload:before {\n  content: \"\\f093\"; }\n\n.fa-ups:before {\n  content: \"\\f7e0\"; }\n\n.fa-usb:before {\n  content: \"\\f287\"; }\n\n.fa-user:before {\n  content: \"\\f007\"; }\n\n.fa-user-alt:before {\n  content: \"\\f406\"; }\n\n.fa-user-alt-slash:before {\n  content: \"\\f4fa\"; }\n\n.fa-user-astronaut:before {\n  content: \"\\f4fb\"; }\n\n.fa-user-check:before {\n  content: \"\\f4fc\"; }\n\n.fa-user-circle:before {\n  content: \"\\f2bd\"; }\n\n.fa-user-clock:before {\n  content: \"\\f4fd\"; }\n\n.fa-user-cog:before {\n  content: \"\\f4fe\"; }\n\n.fa-user-edit:before {\n  content: \"\\f4ff\"; }\n\n.fa-user-friends:before {\n  content: \"\\f500\"; }\n\n.fa-user-graduate:before {\n  content: \"\\f501\"; }\n\n.fa-user-injured:before {\n  content: \"\\f728\"; }\n\n.fa-user-lock:before {\n  content: \"\\f502\"; }\n\n.fa-user-md:before {\n  content: \"\\f0f0\"; }\n\n.fa-user-minus:before {\n  content: \"\\f503\"; }\n\n.fa-user-ninja:before {\n  content: \"\\f504\"; }\n\n.fa-user-plus:before {\n  content: \"\\f234\"; }\n\n.fa-user-secret:before {\n  content: \"\\f21b\"; }\n\n.fa-user-shield:before {\n  content: \"\\f505\"; }\n\n.fa-user-slash:before {\n  content: \"\\f506\"; }\n\n.fa-user-tag:before {\n  content: \"\\f507\"; }\n\n.fa-user-tie:before {\n  content: \"\\f508\"; }\n\n.fa-user-times:before {\n  content: \"\\f235\"; }\n\n.fa-users:before {\n  content: \"\\f0c0\"; }\n\n.fa-users-cog:before {\n  content: \"\\f509\"; }\n\n.fa-usps:before {\n  content: \"\\f7e1\"; }\n\n.fa-ussunnah:before {\n  content: \"\\f407\"; }\n\n.fa-utensil-spoon:before {\n  content: \"\\f2e5\"; }\n\n.fa-utensils:before {\n  content: \"\\f2e7\"; }\n\n.fa-vaadin:before {\n  content: \"\\f408\"; }\n\n.fa-vector-square:before {\n  content: \"\\f5cb\"; }\n\n.fa-venus:before {\n  content: \"\\f221\"; }\n\n.fa-venus-double:before {\n  content: \"\\f226\"; }\n\n.fa-venus-mars:before {\n  content: \"\\f228\"; }\n\n.fa-viacoin:before {\n  content: \"\\f237\"; }\n\n.fa-viadeo:before {\n  content: \"\\f2a9\"; }\n\n.fa-viadeo-square:before {\n  content: \"\\f2aa\"; }\n\n.fa-vial:before {\n  content: \"\\f492\"; }\n\n.fa-vials:before {\n  content: \"\\f493\"; }\n\n.fa-viber:before {\n  content: \"\\f409\"; }\n\n.fa-video:before {\n  content: \"\\f03d\"; }\n\n.fa-video-slash:before {\n  content: \"\\f4e2\"; }\n\n.fa-vihara:before {\n  content: \"\\f6a7\"; }\n\n.fa-vimeo:before {\n  content: \"\\f40a\"; }\n\n.fa-vimeo-square:before {\n  content: \"\\f194\"; }\n\n.fa-vimeo-v:before {\n  content: \"\\f27d\"; }\n\n.fa-vine:before {\n  content: \"\\f1ca\"; }\n\n.fa-vk:before {\n  content: \"\\f189\"; }\n\n.fa-vnv:before {\n  content: \"\\f40b\"; }\n\n.fa-volleyball-ball:before {\n  content: \"\\f45f\"; }\n\n.fa-volume-down:before {\n  content: \"\\f027\"; }\n\n.fa-volume-mute:before {\n  content: \"\\f6a9\"; }\n\n.fa-volume-off:before {\n  content: \"\\f026\"; }\n\n.fa-volume-up:before {\n  content: \"\\f028\"; }\n\n.fa-vote-yea:before {\n  content: \"\\f772\"; }\n\n.fa-vr-cardboard:before {\n  content: \"\\f729\"; }\n\n.fa-vuejs:before {\n  content: \"\\f41f\"; }\n\n.fa-walking:before {\n  content: \"\\f554\"; }\n\n.fa-wallet:before {\n  content: \"\\f555\"; }\n\n.fa-warehouse:before {\n  content: \"\\f494\"; }\n\n.fa-water:before {\n  content: \"\\f773\"; }\n\n.fa-weebly:before {\n  content: \"\\f5cc\"; }\n\n.fa-weibo:before {\n  content: \"\\f18a\"; }\n\n.fa-weight:before {\n  content: \"\\f496\"; }\n\n.fa-weight-hanging:before {\n  content: \"\\f5cd\"; }\n\n.fa-weixin:before {\n  content: \"\\f1d7\"; }\n\n.fa-whatsapp:before {\n  content: \"\\f232\"; }\n\n.fa-whatsapp-square:before {\n  content: \"\\f40c\"; }\n\n.fa-wheelchair:before {\n  content: \"\\f193\"; }\n\n.fa-whmcs:before {\n  content: \"\\f40d\"; }\n\n.fa-wifi:before {\n  content: \"\\f1eb\"; }\n\n.fa-wikipedia-w:before {\n  content: \"\\f266\"; }\n\n.fa-wind:before {\n  content: \"\\f72e\"; }\n\n.fa-window-close:before {\n  content: \"\\f410\"; }\n\n.fa-window-maximize:before {\n  content: \"\\f2d0\"; }\n\n.fa-window-minimize:before {\n  content: \"\\f2d1\"; }\n\n.fa-window-restore:before {\n  content: \"\\f2d2\"; }\n\n.fa-windows:before {\n  content: \"\\f17a\"; }\n\n.fa-wine-bottle:before {\n  content: \"\\f72f\"; }\n\n.fa-wine-glass:before {\n  content: \"\\f4e3\"; }\n\n.fa-wine-glass-alt:before {\n  content: \"\\f5ce\"; }\n\n.fa-wix:before {\n  content: \"\\f5cf\"; }\n\n.fa-wizards-of-the-coast:before {\n  content: \"\\f730\"; }\n\n.fa-wolf-pack-battalion:before {\n  content: \"\\f514\"; }\n\n.fa-won-sign:before {\n  content: \"\\f159\"; }\n\n.fa-wordpress:before {\n  content: \"\\f19a\"; }\n\n.fa-wordpress-simple:before {\n  content: \"\\f411\"; }\n\n.fa-wpbeginner:before {\n  content: \"\\f297\"; }\n\n.fa-wpexplorer:before {\n  content: \"\\f2de\"; }\n\n.fa-wpforms:before {\n  content: \"\\f298\"; }\n\n.fa-wpressr:before {\n  content: \"\\f3e4\"; }\n\n.fa-wrench:before {\n  content: \"\\f0ad\"; }\n\n.fa-x-ray:before {\n  content: \"\\f497\"; }\n\n.fa-xbox:before {\n  content: \"\\f412\"; }\n\n.fa-xing:before {\n  content: \"\\f168\"; }\n\n.fa-xing-square:before {\n  content: \"\\f169\"; }\n\n.fa-y-combinator:before {\n  content: \"\\f23b\"; }\n\n.fa-yahoo:before {\n  content: \"\\f19e\"; }\n\n.fa-yandex:before {\n  content: \"\\f413\"; }\n\n.fa-yandex-international:before {\n  content: \"\\f414\"; }\n\n.fa-yarn:before {\n  content: \"\\f7e3\"; }\n\n.fa-yelp:before {\n  content: \"\\f1e9\"; }\n\n.fa-yen-sign:before {\n  content: \"\\f157\"; }\n\n.fa-yin-yang:before {\n  content: \"\\f6ad\"; }\n\n.fa-yoast:before {\n  content: \"\\f2b1\"; }\n\n.fa-youtube:before {\n  content: \"\\f167\"; }\n\n.fa-youtube-square:before {\n  content: \"\\f431\"; }\n\n.fa-zhihu:before {\n  content: \"\\f63f\"; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n@font-face {\n  font-family: 'Font Awesome 5 Brands';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"../webfonts/fa-brands-400.eot\");\n  src: url(\"../webfonts/fa-brands-400.eot?#iefix\") format(\"embedded-opentype\"), url(\"../webfonts/fa-brands-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-brands-400.woff\") format(\"woff\"), url(\"../webfonts/fa-brands-400.ttf\") format(\"truetype\"), url(\"../webfonts/fa-brands-400.svg#fontawesome\") format(\"svg\"); }\n\n.fab {\n  font-family: 'Font Awesome 5 Brands'; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"../webfonts/fa-regular-400.eot\");\n  src: url(\"../webfonts/fa-regular-400.eot?#iefix\") format(\"embedded-opentype\"), url(\"../webfonts/fa-regular-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-regular-400.woff\") format(\"woff\"), url(\"../webfonts/fa-regular-400.ttf\") format(\"truetype\"), url(\"../webfonts/fa-regular-400.svg#fontawesome\") format(\"svg\"); }\n\n.far {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 400; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 900;\n  src: url(\"../webfonts/fa-solid-900.eot\");\n  src: url(\"../webfonts/fa-solid-900.eot?#iefix\") format(\"embedded-opentype\"), url(\"../webfonts/fa-solid-900.woff2\") format(\"woff2\"), url(\"../webfonts/fa-solid-900.woff\") format(\"woff\"), url(\"../webfonts/fa-solid-900.ttf\") format(\"truetype\"), url(\"../webfonts/fa-solid-900.svg#fontawesome\") format(\"svg\"); }\n\n.fa,\n.fas {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900; }\n";
styleInject(css);

var TYPES$1 = {
    DEFAULT: 'DEFAULT',
    REGULAR: 'REGULAR',
    LIGHT: 'LIGHT',
    BRAND: 'BRAND',
};
var IconAtom = function (props) {
    if (props === void 0) { props = {
        type: 'REGULAR',
        name: '',
        className: '',
    }; }
    var faIconType;
    switch (props.type) {
        case TYPES$1.REGULAR:
            faIconType = 'far';
            break;
        case TYPES$1.LIGHT:
            faIconType = 'fal';
            break;
        case TYPES$1.DEFAULT:
        default: faIconType = 'fa';
    }
    return React.createElement("i", { className: emotion.cx(faIconType + " fa-" + props.name, props.className) });
};
IconAtom.displayName = 'IconAtom';

var animatedLinkText$1 = emotion.css(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  width: auto;\n  text-decoration: none;\n  padding-bottom: 0;\n  vertical-align: bottom;\n  color: ", ";\n  position: relative;\n  display: inline-block;\n  &:after {\n    display: block;\n    content: '';\n    border-bottom: solid 1px ", ";  \n    transform: scaleX(0);  \n    transition: transform 250ms ease-in-out;\n    transform-origin:100% 50%;\n  }\n  &:hover:after { \n    transform: scaleX(1);\n    transform-origin:0 50%;\n  }\n"], ["\n  width: auto;\n  text-decoration: none;\n  padding-bottom: 0;\n  vertical-align: bottom;\n  color: ", ";\n  position: relative;\n  display: inline-block;\n  &:after {\n    display: block;\n    content: '';\n    border-bottom: solid 1px ", ";  \n    transform: scaleX(0);  \n    transition: transform 250ms ease-in-out;\n    transform-origin:100% 50%;\n  }\n  &:hover:after { \n    transform: scaleX(1);\n    transform-origin:0 50%;\n  }\n"])), COLORS.PURPLE.NORMAL, COLORS.PURPLE.NORMAL);
var linkText$1 = emotion.css(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  text-decoration: none;\n  color: inherit;\n"], ["\n  text-decoration: none;\n  color: inherit;\n"])));
var LinkTextAtom = function (_a) {
    var to = _a.to, animated = _a.animated, className = _a.className, props = __rest(_a, ["to", "animated", "className"]);
    return (React.createElement(reactRouterDom.Link, __assign({ to: to }, props, { "data-test": props['data-test'], className: emotion.cx(animated ? animatedLinkText$1 : linkText$1, className) })));
};
LinkTextAtom.displayName = 'LinkTextAtom';
var templateObject_1$9, templateObject_2$4;

var ProgressBarAtom = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.progress, progress = _c === void 0 ? 0 : _c, _d = _a.height, height = _d === void 0 ? 6 : _d;
    return (React.createElement("div", { className: emotion.cx('relative br3 w-100', emotion.css(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n    height: ", "px;\n    background: ", "\n  "], ["\n    height: ", "px;\n    background: ", "\n  "])), height, COLORS.GREY.NORMAL), className) },
        React.createElement("div", { className: emotion.cx('absolute br3 top-0 left-0', emotion.css(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n      width: ", "%;\n      height: ", "px;\n      background: ", "\n    "], ["\n      width: ", "%;\n      height: ", "px;\n      background: ", "\n    "])), Number(progress) * 100, height, COLORS.GREEN.NORMAL)) })));
};
var templateObject_1$a, templateObject_2$5;

var alertDanger = "\n    background-color: " + COLORS.RED.NORMAL + ";\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding: 10px;\n    border-radius: 2px;    \n";
var alertInfo = "\n    background-color: " + COLORS.GREEN.NORMAL + ";\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;    \n    padding: 10px;\n    border-radius: 2px;\n";
var TYPES_LIST$1 = {
    ALERT_DANGER: emotion.css(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n      ", "\n        color:  ", ";\n    "], ["\n      ", "\n        color:  ", ";\n    "])), alertDanger, COLORS.WHITE.NORMAL),
    ALERT_INFO: emotion.css(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n      ", "\n        scolor:  ", ";\n    "], ["\n      ", "\n        scolor:  ", ";\n    "])), alertInfo, COLORS.WHITE.NORMAL),
};
var AlertMolecule = /** @class */ (function (_super) {
    __extends(AlertMolecule, _super);
    function AlertMolecule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    AlertMolecule.prototype.render = function () {
        var _a = this.props, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, children = _a.children;
        return (React.createElement("div", { "data-test": this.props['data-test'], className: emotion.cx((TYPES_LIST$1[type]), className) }, children));
    };
    return AlertMolecule;
}(React.PureComponent));
var templateObject_1$b, templateObject_2$6;

var AnimatedButtonMolecule = function (_a) {
    var className = _a.className, icon = _a.icon, disabled = _a.disabled, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b, props = __rest(_a, ["className", "icon", "disabled", "onClick"]);
    return (React.createElement(ButtonAtom, { type: "WITH_ICON_CTA", disabled: disabled, onClick: onClick, className: emotion.cx('flex flex-row justify-between align-center', emotion.css(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n      min-width: 300px;\n      .i1 {\n        transition: transform 0.2s linear;\n        transform: translate(5px);\n        color: ", ";\n      }\n\n      .i2 {\n        transition: transform 0.2s linear;\n        transform: translate(-50px);\n        color: ", ";\n      }\n      \n      ", "\n    "], ["\n      min-width: 300px;\n      .i1 {\n        transition: transform 0.2s linear;\n        transform: translate(5px);\n        color: ", ";\n      }\n\n      .i2 {\n        transition: transform 0.2s linear;\n        transform: translate(-50px);\n        color: ", ";\n      }\n      \n      ",
            "\n    "])), disabled ? COLORS.GREY.NORMAL : COLORS.RED.NORMAL, disabled ? COLORS.GREY.NORMAL : COLORS.RED.NORMAL, !disabled && "\n        :hover {\n          .i1 {\n            transition: transform 0.2s linear;\n            transform: translate(50px);\n            color: " + COLORS.RED.LIGHT + ";\n          }\n\n          .i2 {\n            transition: transform 0.2s linear;\n            transform: translate(-5px);\n            color: " + COLORS.RED.LIGHT + ";\n          }\n        }\n        :active {\n          .i1 {\n            color: " + COLORS.RED.DARK + ";\n          }\n\n          .i2 {\n            color: " + COLORS.RED.DARK + ";\n          }\n        }\n      "), className) },
        React.createElement("div", { style: { width: 32, height: 32 } }),
        React.createElement("div", { className: "self-center flex flex-column" },
            React.createElement(TextAtom, { size: "M", className: "fw6 self-center" }, props.children)),
        React.createElement("div", { className: "self-center ph2" },
            React.createElement("div", { className: "br-100 flex flex-row justify-center align-center bg-white", style: { width: 32, height: 32, overflow: 'hidden' } },
                React.createElement(IconAtom, { name: icon, className: emotion.cx('i1 self-center f7', emotion.css(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n          ", "\n        "], ["\n          ", "\n        "])), disabled && "color: " + COLORS.GREY.NORMAL)) }),
                React.createElement(IconAtom, { name: icon, className: emotion.cx('i2 self-center f7', emotion.css(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n          ", "\n        "], ["\n          ", "\n        "])), disabled && "color: " + COLORS.GREY.NORMAL)) })))));
};
AnimatedButtonMolecule.displayName = 'AnimatedButtonMolecule';
var templateObject_1$c, templateObject_2$7, templateObject_3$3;

var hoverableCard = emotion.css(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"], ["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"])));
var beginnerColor = '#2F80ED';
var intermediateColor = '#FB529F';
var expertColor = '#7143BF';
// const starColor = '#F8BA32';
var generateColorByDifficulty = function (difficulty) {
    switch (difficulty.toUpperCase()) {
        case 'EXPERT': return expertColor;
        case 'INTERMEDIATE': return intermediateColor;
        case 'BEGINNER':
        default: return beginnerColor;
    }
};
var beginnerGradient = 'background: linear-gradient(270deg, #645AFF 0%, #5AC4FF 100%); border-radius: 8px 8px 0px 0px;';
var intermediateGradient = 'background: linear-gradient(90deg, #FB529F 0%, #FFA844 100%); border-radius: 8px 8px 0px 0px;';
var expertGradient = 'background: linear-gradient(270deg, #7143BF 0%, #C86DD7 100%); border-radius: 8px 8px 0px 0px;';
var generateGradientByDifficulty = function (difficulty) {
    switch (difficulty.toUpperCase()) {
        case 'EXPERT': return expertGradient;
        case 'INTERMEDIATE': return intermediateGradient;
        case 'BEGINNER':
        default: return beginnerGradient;
    }
};
// const courseRating = (ratings: any): any => {
//   let rating;
//   if (ratings.length !== 0) {
//     const reducer = (accumulator: any, currentValue: any) => accumulator + currentValue;
//     rating = Math.floor(ratings.map((r: any) => parseInt(r.rating, 10)).reduce(reducer) / ratings.length);
//   }
//   return rating;
// };
var CourseCardMolecule = function (_a) {
    var  
    // slug = '',
    _b = _a.title, 
    // slug = '',
    title = _b === void 0 ? '' : _b, _c = _a.instructor, instructor = _c === void 0 ? 'KODE Team' : _c, _d = _a.description, description = _d === void 0 ? '' : _d, _e = _a.level, level = _e === void 0 ? { name: '', label: '' } : _e, _f = _a.linkTo, small = _a.small, 
    // category,
    _g = _a.className, 
    // category,
    className = _g === void 0 ? '' : _g, _h = _a.coverImage, coverImage = _h === void 0 ? '' : _h, _j = _a.metadata;
    return (React.createElement("div", { className: emotion.cx('flex flex-column', emotion.css(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "], ["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "])), small ? '20%' : '90%', small ? '250px' : '90%', small ? '55%' : '100%', small ? '250px' : '100%', small ? '75%' : '100%', small ? '250px' : '100%'), className) },
        React.createElement(CardAtom, { className: emotion.cx("pb3 relative flex " + (small ? 'flex-column' : 'flex-row') + " align-center justify-" + (small ? 'center' : 'start'), hoverableCard, emotion.css(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["", ""], ["", ""])), small ? '' : 'height: auto')) },
            React.createElement("div", { className: emotion.cx('w-100 br2 absolute', emotion.css(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n          height: 8px;\n          top: 0;\n          ", "\n          @media only screen and (max-width: 30em) {\n            height: 5px;\n          }\n        "], ["\n          height: 8px;\n          top: 0;\n          ", "\n          @media only screen and (max-width: 30em) {\n            height: 5px;\n          }\n        "])), generateGradientByDifficulty(level.name))) }),
            React.createElement("div", { className: "ph3 pt2" },
                React.createElement("div", { className: emotion.cx('br3 mt3', emotion.css(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n            width: 100%;\n            min-height: 180px;\n            background: url(", ");\n            background-size: cover;\n          "], ["\n            width: 100%;\n            min-height: 180px;\n            background: url(", ");\n            background-size: cover;\n          "])), coverImage)) })),
            React.createElement("div", { className: "flex flex-column justify-start" },
                React.createElement("div", { className: "flex flex-column mt2 ph3 " + (small ? 'pv1' : 'pv3 pr3') + " w-100" },
                    React.createElement(TextAtom, { size: small ? 'M' : 'L', className: emotion.cx('lh-title mv2 fw6', emotion.css(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n                min-height: ", "px;\n                color: ", ";\n              "], ["\n                min-height: ", "px;\n                color: ", ";\n              "])), small ? 40 : 0, COLORS.BLACK.NORMAL)) }, title),
                    React.createElement(TextAtom, { size: "XS", className: "f6 lh-copy " + (small ? '' : 'mt3') },
                        React.createElement("span", { className: emotion.cx('fw6', emotion.css(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.BLACK.LIGHT)) }, instructor.toUpperCase()),
                        React.createElement("span", { className: emotion.cx('mh1 fw6', emotion.css(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.BLACK.LIGHT)) }, "\u00B7"),
                        React.createElement("span", { className: emotion.cx('fw6', emotion.css(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), generateColorByDifficulty(level.name))) }, level.label.toUpperCase())),
                    React.createElement(TextAtom, { size: "S", className: emotion.cx('mt3 lh-copy', emotion.css(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.BLACK.LIGHTER)) },
                        description.slice(0, 80),
                        description.length > 80 && '...'),
                    React.createElement(TextAtom, { size: "S", className: emotion.cx('mt3 lh-copy', emotion.css(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.BLACK.LIGHTER)) },
                        "Berkolaborasi dengan ",
                        React.createElement("span", { className: "fw6" }, "Hacktiv8")))))));
};
CourseCardMolecule.displayName = 'CourseCardMolecule';
var templateObject_1$d, templateObject_2$8, templateObject_3$4, templateObject_4$2, templateObject_5$2, templateObject_6$2, templateObject_7$2, templateObject_8$2, templateObject_9$1, templateObject_10$1, templateObject_11$1;

var hoverableCard$1 = emotion.css(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"], ["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"])));
var beginnerColor$1 = '#2F80ED';
var intermediateColor$1 = '#FB529F';
var expertColor$1 = '#7143BF';
var generateColorByDifficulty$1 = function (difficulty) {
    switch (difficulty.toUpperCase()) {
        case 'EXPERT': return expertColor$1;
        case 'INTERMEDIATE': return intermediateColor$1;
        case 'BEGINNER':
        default: return beginnerColor$1;
    }
};
var beginnerGradient$1 = 'background: linear-gradient(270deg, #645AFF 0%, #5AC4FF 100%); border-radius: 8px 8px 0px 0px;';
var intermediateGradient$1 = 'background: linear-gradient(90deg, #FB529F 0%, #FFA844 100%); border-radius: 8px 8px 0px 0px;';
var expertGradient$1 = 'background: linear-gradient(270deg, #7143BF 0%, #C86DD7 100%); border-radius: 8px 8px 0px 0px;';
var generateGradientByDifficulty$1 = function (difficulty) {
    switch (difficulty.toUpperCase()) {
        case 'EXPERT': return expertGradient$1;
        case 'INTERMEDIATE': return intermediateGradient$1;
        case 'BEGINNER':
        default: return beginnerGradient$1;
    }
};
var CourseProgressCardMolecule = function (_a) {
    var _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.instructor, instructor = _c === void 0 ? 'KODE Team' : _c, _d = _a.description, description = _d === void 0 ? '' : _d, _e = _a.level, level = _e === void 0 ? { name: '', label: '' } : _e, _f = _a.ProgressBarComponent, ProgressBarComponent = _f === void 0 ? function () { return null; } : _f, _g = _a.FooterComponent, FooterComponent = _g === void 0 ? function () { return null; } : _g, small = _a.small, _h = _a.className, className = _h === void 0 ? '' : _h;
    return (React.createElement("div", { className: emotion.cx('flex flex-column', emotion.css(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "], ["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "])), small ? '20%' : '90%', small ? '250px' : '90%', small ? '55%' : '100%', small ? '250px' : '100%', small ? '75%' : '100%', small ? '250px' : '100%'), className) },
        React.createElement(CardAtom, { className: emotion.cx("pb3 relative flex " + (small ? 'flex-column' : 'flex-row') + " align-center justify-" + (small ? 'start' : 'start'), hoverableCard$1, emotion.css(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["", ""], ["", ""])), small ? '' : 'height: auto')) },
            React.createElement("div", { className: emotion.cx('w-100 br2 absolute', emotion.css(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n          height: 8px;\n          top: 0;\n          ", "\n          @media only screen and (max-width: 30em) {\n            height: 5px;\n          }\n        "], ["\n          height: 8px;\n          top: 0;\n          ", "\n          @media only screen and (max-width: 30em) {\n            height: 5px;\n          }\n        "])), generateGradientByDifficulty$1(level.name))) }),
            React.createElement("div", { className: "flex flex-column justify-start" },
                React.createElement("div", { className: "flex flex-column mt3 ph3 " + (small ? 'pv1' : 'pv3 pr3') + " w-100" },
                    React.createElement(TextAtom, { size: small ? 'M' : 'L', className: emotion.cx('lh-title mv2 fw6', emotion.css(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n                min-height: ", "px;\n                color: ", ";\n              "], ["\n                min-height: ", "px;\n                color: ", ";\n              "])), small ? 40 : 0, COLORS.BLACK.NORMAL)) }, title),
                    React.createElement(TextAtom, { size: "XS", className: "f6 lh-copy " + (small ? '' : 'mt3') },
                        React.createElement("span", { className: emotion.cx('fw6', emotion.css(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.BLACK.LIGHT)) }, instructor.toUpperCase()),
                        React.createElement("span", { className: emotion.cx('mh1 fw6', emotion.css(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.BLACK.LIGHT)) }, "\u00B7"),
                        React.createElement("span", { className: emotion.cx('fw6', emotion.css(templateObject_8$3 || (templateObject_8$3 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), generateColorByDifficulty$1(level.name))) }, level.label.toUpperCase())),
                    React.createElement(TextAtom, { size: "S", className: emotion.cx('mt3 lh-copy', emotion.css(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.BLACK.LIGHTER)) },
                        description.slice(0, 80),
                        description.length > 80 && '...'),
                    React.createElement(ProgressBarComponent, null),
                    React.createElement(FooterComponent, null))))));
};
CourseProgressCardMolecule.displayName = 'CourseProgressCardMolecule';
var templateObject_1$e, templateObject_2$9, templateObject_3$5, templateObject_4$3, templateObject_5$3, templateObject_6$3, templateObject_7$3, templateObject_8$3, templateObject_9$2;

var FooterMolecule = /** @class */ (function (_super) {
    __extends(FooterMolecule, _super);
    function FooterMolecule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    FooterMolecule.prototype.render = function () {
        var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children;
        return (React.createElement("footer", { "data-test": this.props['data-test'], className: emotion.cx(emotion.css(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["background: ", ""], ["background: ", ""])), COLORS.BLACK.DARKER), className) }, children));
    };
    return FooterMolecule;
}(React.PureComponent));
var templateObject_1$f;

var dotCss = emotion.css(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n"], ["\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n"]))); // prev 12
var fadePurple = emotion.keyframes(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  0%   { background: #DBE4E8; }\n  25% { background: #645AFF; }\n  50% { background: #645AFF; }\n  75% { background: #DBE4E8; }\n  100% { background: #DBE4E8; }\n"], ["\n  0%   { background: #DBE4E8; }\n  25% { background: #645AFF; }\n  50% { background: #645AFF; }\n  75% { background: #DBE4E8; }\n  100% { background: #DBE4E8; }\n"])));
var fadeRed = emotion.keyframes(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  0%   { background: #FF6260; }\n  25% { background: #DBE4E8; }\n  50% { background: #DBE4E8; }\n  75% { background: #FF6260; }\n  100%   { background: #FF6260; }\n"], ["\n  0%   { background: #FF6260; }\n  25% { background: #DBE4E8; }\n  50% { background: #DBE4E8; }\n  75% { background: #FF6260; }\n  100%   { background: #FF6260; }\n"])));
var dotPurple = emotion.css(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  background: #645AFF;\n  animation: ", " 2s ease-in-out infinite;\n"], ["\n  background: #645AFF;\n  animation: ", " 2s ease-in-out infinite;\n"])), fadePurple);
var dotRed = emotion.css(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  background: #DBE4E8;\n  animation: ", " 2s linear infinite;\n"], ["\n  background: #DBE4E8;\n  animation: ", " 2s linear infinite;\n"])), fadeRed);
var colContainer = emotion.css(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["height: 50px;"], ["height: 50px;"]))); // prev: 73
var rowContainer = emotion.css(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["width: 50px;"], ["width: 50px;"]))); // prev: 73
var LoaderMolecule = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement("div", { className: emotion.cx('flex flex-column justify-between align-center', colContainer, className) },
        React.createElement("div", { className: emotion.cx('flex flex-row justify-between align-center', rowContainer) },
            React.createElement("div", { className: emotion.cx(dotCss, dotPurple) }),
            React.createElement("div", { className: emotion.cx(dotCss, dotRed) }),
            React.createElement("div", { className: emotion.cx(dotCss, dotPurple) })),
        React.createElement("div", { className: emotion.cx('flex flex-row justify-between align-center', rowContainer) },
            React.createElement("div", { className: emotion.cx(dotCss, dotRed) }),
            React.createElement("div", { className: emotion.cx(dotCss, dotPurple) }),
            React.createElement("div", { className: emotion.cx(dotCss, dotRed) })),
        React.createElement("div", { className: emotion.cx('flex flex-row justify-between align-center', rowContainer) },
            React.createElement("div", { className: emotion.cx(dotCss, dotPurple) }),
            React.createElement("div", { className: emotion.cx(dotCss, dotRed) }),
            React.createElement("div", { className: emotion.cx(dotCss, dotPurple) }))));
};
var templateObject_1$g, templateObject_2$a, templateObject_3$6, templateObject_4$4, templateObject_5$4, templateObject_6$4, templateObject_7$4;

var InputOrganism = /** @class */ (function (_super) {
    __extends(InputOrganism, _super);
    function InputOrganism() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isFocus: false,
            isActive: !!_this.props.value,
        };
        _this.onFocus = function () {
            _this.setState({ isFocus: true });
            if (_this.input) {
                _this.input.focus();
            }
        };
        _this.onBlur = function () {
            _this.setState({ isFocus: false });
            if (_this.props.onBlur) {
                _this.props.onBlur();
            }
        };
        _this.onScroll = function () {
            if (_this.input) {
                window.scrollTo({
                    top: _this.input.offsetTop - 200,
                    behavior: 'smooth',
                });
            }
        };
        _this.handleChange = function (e) {
            _this.props.onChange(e);
            _this.setState({ isActive: !!e.target.value });
        };
        return _this;
    }
    InputOrganism.prototype.render = function () {
        var _this = this;
        var _a = this.state, isFocus = _a.isFocus, isActive = _a.isActive;
        var _b = this.props, value = _b.value, error = _b.error, name = _b.name, placeholder = _b.placeholder, label = _b.label, icon = _b.icon, className = _b.className, _c = _b.type, type = _c === void 0 ? 'text' : _c, disabled = _b.disabled, height = _b.height, required = _b.required, _d = _b.onKeyUp, onKeyUp = _d === void 0 ? function () { } : _d;
        return (React.createElement("div", { className: emotion.cx('flex flex-column justify-center align-center', className) },
            React.createElement("div", { role: "button", onClick: this.onFocus, tabIndex: 0, onKeyPress: this.onFocus, onFocus: this.onFocus, className: emotion.cx('w-100 ph3 pv1 br3 flex flex-row align-start outline-0', emotion.css(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n            background: ", ";\n            cursor: ", ";\n            border: 1px solid ", ";\n            transition: all 0.5s ease;\n            height: ", ";\n            @media screen and (min-width: 30em) {\n              height: ", ";\n            }\n          "], ["\n            background: ", ";\n            cursor: ", ";\n            border: 1px solid ", ";\n            transition: all 0.5s ease;\n            height: ", ";\n            @media screen and (min-width: 30em) {\n              height: ", ";\n            }\n          "])), COLORS.WHITE.NORMAL, disabled ? 'not-allowed' : 'pointer', error ? '#EB5757' : ((isFocus && !disabled) ? '#645AFF' : '#E8EDF2'), type === 'textarea' ? (height || 'auto') : '48px', type === 'textarea' ? (height || 'auto') : '56px')) },
                icon && (React.createElement(IconAtom, { name: icon, className: emotion.cx('self-center', emotion.css(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n                transition: 0.2s;\n                color: ", "\n              "], ["\n                transition: 0.2s;\n                color: ", "\n              "])), COLORS.BLACK.LIGHT)) })),
                React.createElement("div", { className: "w-100 ml2 flex flex-column justify-start align-start" },
                    React.createElement(TextAtom, { size: (isFocus || isActive) ? 'XS' : 'M', className: emotion.cx('bg-white ph2 self-start', emotion.css(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n                transition: all 0.4s ease;\n                color: ", ";\n                transform: translateY(", "px);\n                @media screen and (min-width: 30em) {\n                  transform: translateY(", "px);\n                }\n              "], ["\n                transition: all 0.4s ease;\n                color: ", ";\n                transform: translateY(", "px);\n                @media screen and (min-width: 30em) {\n                  transform: translateY(", "px);\n                }\n              "])), error ? '#EB5757' : ((isFocus && !disabled) ? '#645AFF' : '#8393A3'), (isFocus || isActive) ? -12 : 12, (isFocus || isActive) ? -13 : 13)) }, required && (isFocus || isActive)
                        ? label
                        : !required
                            ? label
                            : "* " + label),
                    type !== 'textarea' && (React.createElement("input", { ref: function (input) { _this.input = input; }, type: type, className: emotion.cx('w-100 ph2 outline-0 bn', emotion.css(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n                  font-size: 0.8rem;\n                  cursor: ", ";\n                  background: transparent;\n                  opacity: ", ";\n                  height: ", ";\n                  transition: all 0.4s ease;\n                  margin-top: -0.5px;\n                  transform: translateY(", "px);\n                  @media screen and (min-width: 30em) {\n                    font-size: 1rem;\n                    margin: 0;\n                  }\n                "], ["\n                  font-size: 0.8rem;\n                  cursor: ", ";\n                  background: transparent;\n                  opacity: ", ";\n                  height: ", ";\n                  transition: all 0.4s ease;\n                  margin-top: -0.5px;\n                  transform: translateY(", "px);\n                  @media screen and (min-width: 30em) {\n                    font-size: 1rem;\n                    margin: 0;\n                  }\n                "])), disabled ? 'not-allowed' : 'auto', (isFocus || isActive) ? '1' : '0', height || 'auto', (isFocus || isActive) ? -2 : 0)), onKeyUp: onKeyUp, name: name, value: value, placeholder: placeholder, onChange: this.handleChange, onBlur: this.onBlur, disabled: disabled, "data-test": this.props['data-test'] })),
                    type === 'textarea' && (React.createElement("textarea", { ref: function (input) { _this.input = input; }, className: emotion.cx('w-100 ph2 outline-0 bn', emotion.css(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n                  font-size: 0.8rem;\n                  cursor: ", ";\n                  background: transparent;\n                  opacity: ", ";\n                  height: ", ";\n                  transition: all 0.4s ease;\n                  margin-top: -0.5px;\n                  transform: translateY(", "px);\n                  @media screen and (min-width: 30em) {\n                    font-size: 1rem;\n                    margin: 0;\n                  }\n                "], ["\n                  font-size: 0.8rem;\n                  cursor: ", ";\n                  background: transparent;\n                  opacity: ", ";\n                  height: ", ";\n                  transition: all 0.4s ease;\n                  margin-top: -0.5px;\n                  transform: translateY(", "px);\n                  @media screen and (min-width: 30em) {\n                    font-size: 1rem;\n                    margin: 0;\n                  }\n                "])), disabled ? 'not-allowed' : 'auto', (isFocus || isActive) ? '1' : '0', height || 'auto', (isFocus || isActive) ? -2 : 0)), name: name, value: value, placeholder: placeholder, onChange: this.handleChange, onKeyUp: onKeyUp, onBlur: this.onBlur, disabled: disabled, "data-test": this.props['data-test'] }))),
                error && (React.createElement(IconAtom, { name: "exclamation-circle", className: emotion.cx('f3 self-center', emotion.css(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.RED.NORMAL)) }))),
            React.createElement("div", { className: "mt2" }, error && (React.createElement(TextAtom, { size: "S", className: emotion.cx('self-center', emotion.css(templateObject_7$5 || (templateObject_7$5 = __makeTemplateObject(["color: #EB5757"], ["color: #EB5757"])))) }, error)))));
    };
    return InputOrganism;
}(React.PureComponent));
var templateObject_1$h, templateObject_2$b, templateObject_3$7, templateObject_4$5, templateObject_5$5, templateObject_6$5, templateObject_7$5;

var moment = moment_; // issue on https://github.com/jvandemo/generator-angular2-library/issues/221
var LearningTimeBarChartOrganism = /** @class */ (function (_super) {
    __extends(LearningTimeBarChartOrganism, _super);
    function LearningTimeBarChartOrganism() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderYAxisText = function (d) {
            if (_this.props.type === 'SMALL')
                return Math.floor(d.duration / 60) + " menit";
            if (_this.props.type === 'MEDIUM')
                return Math.floor(d.duration / 60) + "m";
            if (_this.props.type === 'LARGE')
                return "" + Math.floor(d.duration / 60);
            return Math.floor(d.duration / 60) + " menit";
        };
        _this.renderXAxisText = function (d) {
            if (_this.props.type === 'SMALL')
                return moment(d.date).format('D MMM');
            if (_this.props.type === 'MEDIUM')
                return moment(d.date).format('D');
            if (_this.props.type === 'LARGE')
                return moment(d.date).format('D');
            return moment(d.date).format('D MMM');
        };
        return _this;
    }
    LearningTimeBarChartOrganism.prototype.componentDidMount = function () {
        var svg = d3.select("#" + (this.props.id || 'svgWrapper'))
            .append('svg')
            .attr('class', 'barChartSvg')
            .style('width', this.props.width)
            .style('height', this.props.height)
            .style('background-color', 'transparent')
            .style('padding', 0);
        var dataset = this.props.data;
        var barPaddings = {
            SMALL: 10,
            MEDIUM: 5,
            LARGE: 1,
        };
        var barTransitionDelays = {
            SMALL: 150,
            MEDIUM: 80,
            LARGE: 50,
        };
        var barPadding = barPaddings[this.props.type];
        var barTransitionDelay = barTransitionDelays[this.props.type];
        var svgWidth = this.props.width;
        var svgHeight = this.props.height;
        var svgTopOffset = 40;
        var maxBarHeight = svgHeight - svgTopOffset;
        var numberOfBars = dataset.length;
        var customElasticEasing = d3.easeElastic.period(1);
        var durations = dataset.map(function (item) { return item.duration; });
        var yScale = d3.scaleLinear()
            // @ts-ignore
            .domain([0, d3.max(durations)])
            .range([svgHeight, svgTopOffset]);
        var barGroup = svg.selectAll('g')
            .data(dataset)
            .enter()
            .append('g')
            .attr('class', function (d, i) { return "bar-group-" + i; });
        barGroup.append('rect')
            .attr('class', function (d, i) { return "bar-group-contain-" + i; })
            .attr('fill', 'transparent')
            .attr('stroke', 'transparent')
            .attr('stroke-width', 1)
            .attr('width', (svgWidth / numberOfBars) - barPadding)
            .attr('x', function (d, i) { return ((svgWidth / numberOfBars) * i) + barPadding; })
            .attr('height', maxBarHeight)
            .attr('y', 0);
        barGroup.append('rect')
            .attr('class', function (d, i) { return "bar-group-item-" + i; })
            .attr('fill', COLORS.PURPLE.NORMAL)
            .attr('width', (svgWidth / numberOfBars) - barPadding)
            .attr('x', function (d, i) { return ((svgWidth / numberOfBars) * i) + barPadding; })
            .attr('height', 0)
            .attr('y', maxBarHeight)
            .transition()
            .duration(1000)
            .ease(customElasticEasing)
            .delay(function (d, i) { return i * barTransitionDelay; })
            .attr('height', function (d) { return svgHeight - yScale(d.duration); })
            .attr('y', function (d) { return yScale(d.duration) - 20; });
        barGroup.append('text')
            .attr('fill', 'rgba(0, 0, 0, 0.5)')
            .attr('font-size', 10)
            .attr('class', 'fw6')
            .text(this.renderYAxisText)
            .attr('x', function (d, i) { return ((svgWidth / numberOfBars) * i) + (barPadding * 2); })
            .attr('text-anchor', 'center')
            .attr('y', maxBarHeight)
            .transition()
            .duration(1000)
            .delay(function (d, i) { return i * barTransitionDelay; })
            .ease(customElasticEasing)
            .attr('y', function (d) { return yScale(d.duration) - 25; });
        barGroup.append('text')
            .attr('fill', 'rgba(0, 0, 0, 0.5)')
            .attr('font-size', 10)
            .attr('class', function (d, i) { return "bar-group-x-label-" + i + " fw4"; })
            .text(this.renderXAxisText)
            .attr('x', function (d, i) { return ((svgWidth / numberOfBars) * i) + (barPadding * 2); })
            .attr('y', svgHeight - 7);
        var barGroupBack = barGroup.append('rect')
            .attr('class', function (d, i) { return "bar-group-back bar-group-background-" + i; })
            .attr('opacity', 0)
            .attr('fill', 'transparent')
            .attr('width', (svgWidth / numberOfBars) + 5)
            .attr('x', function (d, i) { return (((svgWidth / numberOfBars) * i) + barPadding) - (numberOfBars / 2); })
            .attr('height', maxBarHeight + numberOfBars)
            .attr('y', -numberOfBars);
        barGroupBack.on('mouseenter', function (d, i) {
            svg.select(".bar-group-item-" + i).attr('fill', COLORS.PURPLE.LIGHT);
            svg.select(".bar-group-x-label-" + i).attr('class', ".bar-group-x-label-" + i);
        });
        barGroupBack.on('mouseleave', function (d, i) {
            svg.select(".bar-group-item-" + i).attr('fill', COLORS.PURPLE.NORMAL);
            svg.select(".bar-group-x-label-" + i).attr('class', ".bar-group-x-label-" + i);
        });
        // const yAxis = d3
        //   .axisLeft(yScale)
        //   // @ts-ignore
        //   .ticks(d3.max(durations) / durations.length)
        // svg.append('g')
        //   .attr('class', 'y axis')
        //   .call(yAxis);
        // d3.select('.y.axis').select('.domain').attr('stroke', 'rgba(255, 255, 255, 1)');
        // const axisTicks = d3.select('.y.axis').selectAll('.tick');
        // axisTicks.select('line')
        //   .attr('stroke', 'rgba(0, 0, 0, 0.5)')
        //   .attr('x2', svgWidth + 50);
        // axisTicks.select('text').attr('fill', '#FFFFFF').style('font-size', 16);
        // svg.append('text')
        //   .attr('x', 20)
        //   .attr('y', 20)
        //   .text('Duration')
        //   .attr('fill', 'rgba(0, 0, 0, 0.8)')
        //   .style('font-size', 16)
        //   .style('font-weight', 600);
        svg.append('line')
            .attr('stroke', 'rgba(0, 0, 0, 0.3)')
            .attr('stroke-width', 1)
            .attr('x1', 0.5)
            .attr('x2', svgWidth + 20)
            .attr('y1', svgHeight - 20)
            .attr('y2', svgHeight - 20);
        // svg.append('line')
        //   .attr('stroke', 'rgba(0, 0, 0, 0.3)')
        //   .attr('stroke-width', 1)
        //   .attr('x1', 0.5)
        //   .attr('x2', 0.5)
        //   .attr('y1', svgHeight)
        //   .attr('y2', 0);
    };
    LearningTimeBarChartOrganism.prototype.render = function () {
        var _a = this.props, id = _a.id, className = _a.className, width = _a.width, height = _a.height;
        return (React.createElement("div", { key: "learning-bar-" + id, id: id || 'svgWrapper', className: emotion.cx(emotion.css(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n            height: ", "px;\n            width: ", "px;\n        "], ["\n            height: ", "px;\n            width: ", "px;\n        "])), height + 50, width + 50), className) }));
    };
    return LearningTimeBarChartOrganism;
}(React.Component));
var templateObject_1$i;

exports.AnchorTextAtom = AnchorTextAtom;
exports.AvatarAtom = AvatarAtom;
exports.ButtonAtom = ButtonAtom;
exports.CardAtom = CardAtom;
exports.ClassroomHeaderAtom = ClassroomHeaderAtom;
exports.H1Atom = H1Atom;
exports.H2Atom = H2Atom;
exports.H3Atom = H3Atom;
exports.LinkTextAtom = LinkTextAtom;
exports.ProgressBarAtom = ProgressBarAtom;
exports.TextAtom = TextAtom;
exports.AlertMolecule = AlertMolecule;
exports.AnimatedButtonMolecule = AnimatedButtonMolecule;
exports.CourseCardMolecule = CourseCardMolecule;
exports.CourseProgressCardMolecule = CourseProgressCardMolecule;
exports.FooterMolecule = FooterMolecule;
exports.LoaderMolecule = LoaderMolecule;
exports.InputOrganism = InputOrganism;
exports.LearningTimeBarChartOrganism = LearningTimeBarChartOrganism;
