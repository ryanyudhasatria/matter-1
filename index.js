'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var emotion = require('emotion');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var faIcon = require('@fortawesome/free-solid-svg-icons');
var reactRouterDom = require('react-router-dom');
var Carousel = _interopDefault(require('nuka-carousel'));
var util = require('util');
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
        _this.noImage = function (e) {
            e.target.onerror = null;
            e.target.src = 'https://s3-ap-southeast-1.amazonaws.com/kode-images/public/avatars/placeholder_img.png';
        };
        return _this;
    }
    AvatarAtom.prototype.render = function () {
        var _a = this.props, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, alt = _a.alt, _d = _a.src, src = _d === void 0 ? this.props.src : _d, _e = _a.name, name = _e === void 0 ? 'User' : _e;
        if (src) {
            return (React.createElement("img", { onError: this.noImage.bind(this), src: src, alt: alt, "data-test": this.props['data-test'], className: emotion.cx((TYPES_LIST[type]), className) }));
        }
        else {
            return (React.createElement("div", { "data-test": this.props['data-test'], className: emotion.cx((TYPES_LIST[type]), emotion.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                -moz-user-select: none;\n                -webkit-user-select: none;\n                -ms-user-select:none;\n                user-select:none;\n                -o-user-select:none;\n                "], ["\n                -moz-user-select: none;\n                -webkit-user-select: none;\n                -ms-user-select:none;\n                user-select:none;\n                -o-user-select:none;\n                "]))), 'flex flex-column items-center justify-center', className), unselectable: "on" },
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

var TYPES$1 = {
    DEFAULT: 'DEFAULT',
    REGULAR: 'REGULAR',
    LIGHT: 'LIGHT',
    BRAND: 'BRAND',
};
function camelize(str) {
    return str.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}
var IconAtom = function (props) {
    if (props === void 0) { props = {
        type: 'REGULAR',
        name: '',
        className: '',
        size: '',
    }; }
    var faIconType;
    switch (props.type) {
        case TYPES$1.REGULAR:
            faIconType = 'foawer';
            break;
        case TYPES$1.LIGHT:
            faIconType = 'foawel';
            break;
        case TYPES$1.DEFAULT:
        default: faIconType = 'foawe';
    }
    return (React.createElement(reactFontawesome.FontAwesomeIcon, { icon: faIcon["fa" + camelize(props.name[0].toUpperCase() + props.name.slice(1))], size: props.size, className: emotion.cx(faIconType + " fa-" + props.name, props.className) }));
};
IconAtom.displayName = 'IconAtom';

var ImageAtom = function (_a) {
    var src = _a.src, alt = _a.alt, className = _a.className;
    return React.createElement("img", { src: src, alt: alt, className: className });
};
ImageAtom.displayName = 'ImageAtom';

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

var BannerMolecule = /** @class */ (function (_super) {
    __extends(BannerMolecule, _super);
    function BannerMolecule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentSlideIndex: 0,
        };
        return _this;
    }
    BannerMolecule.prototype.render = function () {
        var _this = this;
        var _a = this.props.items, items = _a === void 0 ? [] : _a;
        var currentSlideIndex = this.state.currentSlideIndex;
        return (React.createElement(Carousel, { autoplay: true, dragging: true, swiping: true, renderBottomCenterControls: util.isNull, cellSpacing: 0, wrapAround: true, cellAlign: 'center', slidesToShow: 1.5, 
            // transitionMode="scroll"
            afterSlide: function (currentSlideIndex) { return _this.setState({ currentSlideIndex: currentSlideIndex }); }, renderCenterLeftControls: function (_a) {
                var previousSlide = _a.previousSlide;
                return (React.createElement(ButtonAtom, { onClick: previousSlide, className: emotion.cx('pa3', emotion.css(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["border-radius: 0px 40px 40px 0px; padding: 1rem; font-size: 1rem; color:", "; background: ", ""], ["border-radius: 0px 40px 40px 0px; padding: 1rem; font-size: 1rem; color:", "; background: ", ""])), COLORS.WHITE.NORMAL, COLORS.BLACK.DARKER)) },
                    React.createElement(IconAtom, { name: "chevron-left" })));
            }, renderCenterRightControls: function (_a) {
                var nextSlide = _a.nextSlide;
                return (React.createElement(ButtonAtom, { onClick: nextSlide, className: emotion.cx('pa3', emotion.css(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["border-radius: 40px 0px 0px 40px; padding: 1rem; font-size: 1rem; color:", "; background: ", ""], ["border-radius: 40px 0px 0px 40px; padding: 1rem; font-size: 1rem; color:", "; background: ", ""])), COLORS.WHITE.NORMAL, COLORS.BLACK.DARKER)) },
                    React.createElement(IconAtom, { name: "chevron-right" })));
            } }, items.map(function (item, index) {
            return React.createElement("a", { key: index, href: item.linkUrl, target: "_blank", className: "outline-0" },
                React.createElement("img", { src: item.imageUrl, className: emotion.css(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n                            opacity: ", ";\n                            transition:0.3s;\n                            "], ["\n                            opacity: ", ";\n                            transition:0.3s;\n                            "])), currentSlideIndex === index ? '1' : '0.5') }));
        })));
    };
    return BannerMolecule;
}(React.PureComponent));
var templateObject_1$d, templateObject_2$8, templateObject_3$4;

var hoverableCard = emotion.css(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"], ["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"])));
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
    return (React.createElement("div", { className: emotion.cx('flex flex-column', emotion.css(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "], ["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "])), small ? '20%' : '90%', small ? '250px' : '90%', small ? '55%' : '100%', small ? '250px' : '100%', small ? '75%' : '100%', small ? '250px' : '100%'), className) },
        React.createElement(CardAtom, { className: emotion.cx("pb3 relative flex " + (small ? 'flex-column' : 'flex-row') + " align-center justify-" + (small ? 'center' : 'start'), hoverableCard, emotion.css(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["", ""], ["", ""])), small ? '' : 'height: auto')) },
            React.createElement("div", { className: emotion.cx('w-100 br2 absolute', emotion.css(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n          height: 8px;\n          top: 0;\n          ", "\n          @media only screen and (max-width: 30em) {\n            height: 5px;\n          }\n        "], ["\n          height: 8px;\n          top: 0;\n          ", "\n          @media only screen and (max-width: 30em) {\n            height: 5px;\n          }\n        "])), generateGradientByDifficulty(level.name))) }),
            React.createElement("div", { className: "ph3 pt2" },
                React.createElement("div", { className: "mt3" },
                    React.createElement("img", { src: coverImage, alt: "", className: emotion.cx('br3', emotion.css(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n              min-height: 180px;\n              object-fit: cover;\n            "], ["\n              min-height: 180px;\n              object-fit: cover;\n            "])))) }))),
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
var templateObject_1$e, templateObject_2$9, templateObject_3$5, templateObject_4$2, templateObject_5$2, templateObject_6$2, templateObject_7$2, templateObject_8$2, templateObject_9$1, templateObject_10$1, templateObject_11$1;

var hoverableCard$1 = emotion.css(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"], ["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"])));
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
    return (React.createElement("div", { className: emotion.cx('flex flex-column', emotion.css(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "], ["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "])), small ? '20%' : '90%', small ? '250px' : '90%', small ? '55%' : '100%', small ? '250px' : '100%', small ? '75%' : '100%', small ? '250px' : '100%'), className) },
        React.createElement(CardAtom, { className: emotion.cx("pb3 relative flex " + (small ? 'flex-column h-100' : 'flex-row') + " align-center justify-" + (small ? 'start' : 'start'), hoverableCard$1, emotion.css(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["", ""], ["", ""])), small ? '' : 'height: auto')) },
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
var templateObject_1$f, templateObject_2$a, templateObject_3$6, templateObject_4$3, templateObject_5$3, templateObject_6$3, templateObject_7$3, templateObject_8$3, templateObject_9$2;

var hoverableCard$2 = emotion.css(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"], ["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"])));
var beginnerGradient$2 = 'background: linear-gradient(270deg, #645AFF 0%, #5AC4FF 100%); border-radius: 8px 8px 0px 0px;';
var intermediateGradient$2 = 'background: linear-gradient(90deg, #FB529F 0%, #FFA844 100%); border-radius: 8px 8px 0px 0px;';
var expertGradient$2 = 'background: linear-gradient(270deg, #7143BF 0%, #C86DD7 100%); border-radius: 8px 8px 0px 0px;';
var generateGradientByDifficulty$2 = function (difficulty) {
    switch (difficulty.toUpperCase()) {
        case 'EXPERT': return expertGradient$2;
        case 'INTERMEDIATE': return intermediateGradient$2;
        case 'BEGINNER':
        default: return beginnerGradient$2;
    }
};
var SkillAssessmentCardMolecule = function (_a) {
    var _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.instructor, _d = _a.description, description = _d === void 0 ? '' : _d, _e = _a.level, level = _e === void 0 ? { name: '', label: '' } : _e, _f = _a.ProgressBarComponent, ProgressBarComponent = _f === void 0 ? function () { return null; } : _f, _g = _a.FooterComponent, FooterComponent = _g === void 0 ? function () { return null; } : _g, small = _a.small, _h = _a.className, className = _h === void 0 ? '' : _h;
    return (React.createElement("div", { className: emotion.cx('flex flex-column', emotion.css(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "], ["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "])), small ? '20%' : '90%', small ? '250px' : '90%', small ? '55%' : '100%', small ? '250px' : '100%', small ? '75%' : '100%', small ? '250px' : '100%'), className) },
        React.createElement(CardAtom, { className: emotion.cx("pb3 relative flex " + (small ? 'flex-column h-100' : 'flex-row') + " align-center justify-" + (small ? 'start' : 'start'), hoverableCard$2, emotion.css(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["", ""], ["", ""])), small ? '' : 'height: auto')) },
            React.createElement("div", { className: emotion.cx('w-100 br2 absolute', emotion.css(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n          height: 8px;\n          top: 0;\n          ", "\n          @media only screen and (max-width: 30em) {\n            height: 5px;\n          }\n        "], ["\n          height: 8px;\n          top: 0;\n          ", "\n          @media only screen and (max-width: 30em) {\n            height: 5px;\n          }\n        "])), generateGradientByDifficulty$2(level.name))) }),
            React.createElement("div", { className: "flex flex-column justify-start" },
                React.createElement("div", { className: "flex flex-column mt3 ph3 " + (small ? 'pv1' : 'pv3 pr3') + " w-100" },
                    React.createElement(TextAtom, { size: small ? 'M' : 'L', className: emotion.cx('lh-title mv2 fw6', emotion.css(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n                min-height: ", "px;\n                color: ", ";\n              "], ["\n                min-height: ", "px;\n                color: ", ";\n              "])), small ? 40 : 0, COLORS.BLACK.NORMAL)) }, title),
                    React.createElement(TextAtom, { size: "S", className: emotion.cx('mt3 lh-copy', emotion.css(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.BLACK.LIGHTER)) },
                        description.slice(0, 100),
                        description.length > 100 && '...'),
                    React.createElement(ProgressBarComponent, null),
                    React.createElement(FooterComponent, null))))));
};
SkillAssessmentCardMolecule.displayName = 'SkillAssessmentCardMolecule';
var templateObject_1$g, templateObject_2$b, templateObject_3$7, templateObject_4$4, templateObject_5$4, templateObject_6$4;

var hoverableCard$3 = emotion.css(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"], ["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"])));
var beginnerGradient$3 = 'background: linear-gradient(270deg, #645AFF 0%, #5AC4FF 100%); border-radius: 8px 8px 0px 0px;';
var intermediateGradient$3 = 'background: linear-gradient(90deg, #FB529F 0%, #FFA844 100%); border-radius: 8px 8px 0px 0px;';
var expertGradient$3 = 'background: linear-gradient(270deg, #7143BF 0%, #C86DD7 100%); border-radius: 8px 8px 0px 0px;';
var generateGradientByDifficulty$3 = function (difficulty) {
    switch (difficulty.toUpperCase()) {
        case 'EXPERT': return expertGradient$3;
        case 'INTERMEDIATE': return intermediateGradient$3;
        case 'BEGINNER':
        default: return beginnerGradient$3;
    }
};
var LearningPathCardMolecule = function (_a) {
    var _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.instructor, _d = _a.description, description = _d === void 0 ? '' : _d, _e = _a.level, level = _e === void 0 ? { name: '', label: '' } : _e, _f = _a.ProgressBarComponent, ProgressBarComponent = _f === void 0 ? function () { return null; } : _f, _g = _a.FooterComponent, FooterComponent = _g === void 0 ? function () { return null; } : _g, small = _a.small, _h = _a.className, className = _h === void 0 ? '' : _h;
    return (React.createElement("div", { className: emotion.cx('flex flex-column', emotion.css(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "], ["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "])), small ? '20%' : '90%', small ? '250px' : '90%', small ? '55%' : '100%', small ? '250px' : '100%', small ? '75%' : '100%', small ? '250px' : '100%'), className) },
        React.createElement(CardAtom, { className: emotion.cx("pb3 relative flex " + (small ? 'flex-column h-100' : 'flex-row') + " align-center justify-" + (small ? 'start' : 'start'), hoverableCard$3, emotion.css(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["", ""], ["", ""])), small ? '' : 'height: auto')) },
            React.createElement("div", { className: emotion.cx('w-100 br2 absolute', emotion.css(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n          height: 8px;\n          top: 0;\n          ", "\n          @media only screen and (max-width: 30em) {\n            height: 5px;\n          }\n        "], ["\n          height: 8px;\n          top: 0;\n          ", "\n          @media only screen and (max-width: 30em) {\n            height: 5px;\n          }\n        "])), generateGradientByDifficulty$3(level.name))) }),
            React.createElement("div", { className: "flex flex-column justify-start" },
                React.createElement("div", { className: "flex flex-column mt3 ph3 " + (small ? 'pv1' : 'pv3 pr3') + " w-100" },
                    React.createElement(TextAtom, { size: small ? 'M' : 'L', className: emotion.cx('lh-title mv2 fw6', emotion.css(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n                min-height: ", "px;\n                color: ", ";\n              "], ["\n                min-height: ", "px;\n                color: ", ";\n              "])), small ? 40 : 0, COLORS.BLACK.NORMAL)) }, title),
                    React.createElement(TextAtom, { size: "S", className: emotion.cx('mt3 lh-copy', emotion.css(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.BLACK.LIGHTER)) },
                        description.slice(0, 100),
                        description.length > 100 && '...'),
                    React.createElement(ProgressBarComponent, null),
                    React.createElement(FooterComponent, null))))));
};
LearningPathCardMolecule.displayName = 'LearningPathCardMolecule';
var templateObject_1$h, templateObject_2$c, templateObject_3$8, templateObject_4$5, templateObject_5$5, templateObject_6$5;

var TeacherCardMolecule = /** @class */ (function (_super) {
    __extends(TeacherCardMolecule, _super);
    function TeacherCardMolecule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    TeacherCardMolecule.prototype.render = function () {
        var _a = this.props, src = _a.src, alt = _a.alt, name = _a.name, instructorRole = _a.instructorRole, description = _a.description;
        return (React.createElement(CardAtom, { className: "flex w-25 pa3", type: "GREY", "data-test": this.props['data-test'] },
            React.createElement("div", null,
                React.createElement("div", { className: "h3 db" },
                    React.createElement("div", { className: "fl dib v-mid tc mr3 mt2" },
                        React.createElement(AvatarAtom, { src: src, alt: alt, type: "REGULAR_CIRCLE" })),
                    React.createElement("div", { className: "fl" },
                        React.createElement("h1", { className: "f5 lh-copy fw7 mb0" }, name),
                        React.createElement("p", { className: emotion.cx('f6 lh-copy', emotion.css(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["margin:0"], ["margin:0"])))) }, instructorRole))),
                React.createElement("div", { className: "dib v-mid" },
                    React.createElement("p", { className: emotion.cx('db f6 ma0 mt3') }, description)))));
    };
    return TeacherCardMolecule;
}(React.PureComponent));
var templateObject_1$i;

var avatarCircle$1 = 'border-radius: 100%;';
var CARD_TYPES$1 = {
    GREY: emotion.css(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n      display: inline-flex;\n      background: ", ";\n      border-radius: 8px;\n      box-shadow: none;\n      width: 30rem;\n      padding: 30px;\n    "], ["\n      display: inline-flex;\n      background: ", ";\n      border-radius: 8px;\n      box-shadow: none;\n      width: 30rem;\n      padding: 30px;\n    "])), COLORS.GREY.LIGHTER),
};
var TYPES_LIST$2 = {
    REGULAR_CIRCLE: emotion.css(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n      ", "\n        background: ", ";\n        width: 48px;\n        height: 48px;\n    "], ["\n      ", "\n        background: ", ";\n        width: 48px;\n        height: 48px;\n    "])), avatarCircle$1, COLORS.RED.NORMAL),
};
var ReviewCardMolecule = /** @class */ (function (_super) {
    __extends(ReviewCardMolecule, _super);
    function ReviewCardMolecule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    ReviewCardMolecule.prototype.render = function () {
        var _a = this.props, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.typeCard, typeCard = _c === void 0 ? '' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, src = _a.src, alt = _a.alt, name = _a.name, date = _a.date, rating = _a.rating, description = _a.description;
        var indents = [];
        for (var i = 0; i < this.props.level; i++) {
            indents.push(React.createElement("span", { className: 'indent', key: i }));
        }
        return (React.createElement(CardAtom, { className: emotion.cx('', CARD_TYPES$1[typeCard], className), "data-test": this.props['data-test'] },
            React.createElement("div", null,
                React.createElement("div", { className: "h3 db" },
                    React.createElement("div", { className: "fl dib v-mid tc mr3 mt2" },
                        React.createElement(AvatarAtom, { src: src, alt: alt, className: emotion.cx('', (TYPES_LIST$2[type]), className) })),
                    React.createElement("div", { className: "fl" },
                        React.createElement("h1", { className: "f5 lh-copy fw7 mb0" }, name),
                        React.createElement("p", { className: emotion.cx('f6 lh-copy', emotion.css(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["margin:0"], ["margin:0"])))) }, date))),
                React.createElement("div", { className: "dib v-mid" },
                    React.createElement("div", { className: "" },
                        React.createElement(IconAtom, { className: emotion.cx('', emotion.css(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), rating >= 1 ? COLORS.YELLOW.NORMAL : COLORS.BLACK.LIGHTEST)), name: "star" }),
                        React.createElement(IconAtom, { className: emotion.cx('', emotion.css(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), rating >= 2 ? COLORS.YELLOW.NORMAL : COLORS.BLACK.LIGHTEST)), name: "star" }),
                        React.createElement(IconAtom, { className: emotion.cx('', emotion.css(templateObject_6$6 || (templateObject_6$6 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), rating >= 3 ? COLORS.YELLOW.NORMAL : COLORS.BLACK.LIGHTEST)), name: "star" }),
                        React.createElement(IconAtom, { className: emotion.cx('', emotion.css(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), rating >= 4 ? COLORS.YELLOW.NORMAL : COLORS.BLACK.LIGHTEST)), name: "star" }),
                        React.createElement(IconAtom, { className: emotion.cx('', emotion.css(templateObject_8$4 || (templateObject_8$4 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), rating >= 5 ? COLORS.YELLOW.NORMAL : COLORS.BLACK.LIGHTEST)), name: "star" })),
                    React.createElement("p", { className: emotion.cx('db f6') }, description)))));
    };
    return ReviewCardMolecule;
}(React.PureComponent));
var templateObject_1$j, templateObject_2$d, templateObject_3$9, templateObject_4$6, templateObject_5$6, templateObject_6$6, templateObject_7$4, templateObject_8$4;

var FooterMolecule = /** @class */ (function (_super) {
    __extends(FooterMolecule, _super);
    function FooterMolecule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    FooterMolecule.prototype.render = function () {
        var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children;
        return (React.createElement("footer", { "data-test": this.props['data-test'], className: emotion.cx(emotion.css(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["background: ", ""], ["background: ", ""])), COLORS.BLACK.DARKER), className) }, children));
    };
    return FooterMolecule;
}(React.PureComponent));
var templateObject_1$k;

var dotCss = emotion.css(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n"], ["\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n"]))); // prev 12
var fadePurple = emotion.keyframes(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  0%   { background: #DBE4E8; }\n  25% { background: #645AFF; }\n  50% { background: #645AFF; }\n  75% { background: #DBE4E8; }\n  100% { background: #DBE4E8; }\n"], ["\n  0%   { background: #DBE4E8; }\n  25% { background: #645AFF; }\n  50% { background: #645AFF; }\n  75% { background: #DBE4E8; }\n  100% { background: #DBE4E8; }\n"])));
var fadeRed = emotion.keyframes(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  0%   { background: #FF6260; }\n  25% { background: #DBE4E8; }\n  50% { background: #DBE4E8; }\n  75% { background: #FF6260; }\n  100%   { background: #FF6260; }\n"], ["\n  0%   { background: #FF6260; }\n  25% { background: #DBE4E8; }\n  50% { background: #DBE4E8; }\n  75% { background: #FF6260; }\n  100%   { background: #FF6260; }\n"])));
var dotPurple = emotion.css(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  background: #645AFF;\n  animation: ", " 2s ease-in-out infinite;\n"], ["\n  background: #645AFF;\n  animation: ", " 2s ease-in-out infinite;\n"])), fadePurple);
var dotRed = emotion.css(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n  background: #DBE4E8;\n  animation: ", " 2s linear infinite;\n"], ["\n  background: #DBE4E8;\n  animation: ", " 2s linear infinite;\n"])), fadeRed);
var colContainer = emotion.css(templateObject_6$7 || (templateObject_6$7 = __makeTemplateObject(["height: 50px;"], ["height: 50px;"]))); // prev: 73
var rowContainer = emotion.css(templateObject_7$5 || (templateObject_7$5 = __makeTemplateObject(["width: 50px;"], ["width: 50px;"]))); // prev: 73
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
var templateObject_1$l, templateObject_2$e, templateObject_3$a, templateObject_4$7, templateObject_5$7, templateObject_6$7, templateObject_7$5;

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
            React.createElement("div", { role: "button", onClick: this.onFocus, tabIndex: 0, onKeyPress: this.onFocus, onFocus: this.onFocus, className: emotion.cx('w-100 ph3 pv1 br3 flex flex-row align-start outline-0', emotion.css(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n            background: ", ";\n            cursor: ", ";\n            border: 1px solid ", ";\n            transition: all 0.5s ease;\n            height: ", ";\n            @media screen and (min-width: 30em) {\n              height: ", ";\n            }\n          "], ["\n            background: ", ";\n            cursor: ", ";\n            border: 1px solid ", ";\n            transition: all 0.5s ease;\n            height: ", ";\n            @media screen and (min-width: 30em) {\n              height: ", ";\n            }\n          "])), COLORS.WHITE.NORMAL, disabled ? 'not-allowed' : 'pointer', error ? '#EB5757' : ((isFocus && !disabled) ? '#645AFF' : '#E8EDF2'), type === 'textarea' ? (height || 'auto') : '48px', type === 'textarea' ? (height || 'auto') : '56px')) },
                icon && (React.createElement(IconAtom, { name: icon, className: emotion.cx('self-center', emotion.css(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n                transition: 0.2s;\n                color: ", "\n              "], ["\n                transition: 0.2s;\n                color: ", "\n              "])), COLORS.BLACK.LIGHT)) })),
                React.createElement("div", { className: "w-100 ml2 flex flex-column justify-start align-start" },
                    React.createElement(TextAtom, { size: (isFocus || isActive) ? 'XS' : 'M', className: emotion.cx('bg-white ph2 self-start', emotion.css(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n                transition: all 0.4s ease;\n                color: ", ";\n                transform: translateY(", "px);\n                @media screen and (min-width: 30em) {\n                  transform: translateY(", "px);\n                }\n              "], ["\n                transition: all 0.4s ease;\n                color: ", ";\n                transform: translateY(", "px);\n                @media screen and (min-width: 30em) {\n                  transform: translateY(", "px);\n                }\n              "])), error ? '#EB5757' : ((isFocus && !disabled) ? '#645AFF' : '#8393A3'), (isFocus || isActive) ? -12 : 12, (isFocus || isActive) ? -13 : 13)) }, required && (isFocus || isActive)
                        ? label
                        : !required
                            ? label
                            : "* " + label),
                    type !== 'textarea' && (React.createElement("input", { ref: function (input) { _this.input = input; }, type: type, className: emotion.cx('w-100 ph2 outline-0 bn', emotion.css(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n                  font-size: 0.8rem;\n                  cursor: ", ";\n                  background: transparent;\n                  opacity: ", ";\n                  height: ", ";\n                  transition: all 0.4s ease;\n                  margin-top: -0.5px;\n                  transform: translateY(", "px);\n                  @media screen and (min-width: 30em) {\n                    font-size: 1rem;\n                    margin: 0;\n                  }\n                "], ["\n                  font-size: 0.8rem;\n                  cursor: ", ";\n                  background: transparent;\n                  opacity: ", ";\n                  height: ", ";\n                  transition: all 0.4s ease;\n                  margin-top: -0.5px;\n                  transform: translateY(", "px);\n                  @media screen and (min-width: 30em) {\n                    font-size: 1rem;\n                    margin: 0;\n                  }\n                "])), disabled ? 'not-allowed' : 'auto', (isFocus || isActive) ? '1' : '0', height || 'auto', (isFocus || isActive) ? -2 : 0)), onKeyUp: onKeyUp, name: name, value: value, placeholder: placeholder, onChange: this.handleChange, onBlur: this.onBlur, disabled: disabled, "data-test": this.props['data-test'] })),
                    type === 'textarea' && (React.createElement("textarea", { ref: function (input) { _this.input = input; }, className: emotion.cx('w-100 ph2 outline-0 bn', emotion.css(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n                  font-size: 0.8rem;\n                  cursor: ", ";\n                  background: transparent;\n                  opacity: ", ";\n                  height: ", ";\n                  transition: all 0.4s ease;\n                  margin-top: -0.5px;\n                  transform: translateY(", "px);\n                  @media screen and (min-width: 30em) {\n                    font-size: 1rem;\n                    margin: 0;\n                  }\n                "], ["\n                  font-size: 0.8rem;\n                  cursor: ", ";\n                  background: transparent;\n                  opacity: ", ";\n                  height: ", ";\n                  transition: all 0.4s ease;\n                  margin-top: -0.5px;\n                  transform: translateY(", "px);\n                  @media screen and (min-width: 30em) {\n                    font-size: 1rem;\n                    margin: 0;\n                  }\n                "])), disabled ? 'not-allowed' : 'auto', (isFocus || isActive) ? '1' : '0', height || 'auto', (isFocus || isActive) ? -2 : 0)), name: name, value: value, placeholder: placeholder, onChange: this.handleChange, onKeyUp: onKeyUp, onBlur: this.onBlur, disabled: disabled, "data-test": this.props['data-test'] }))),
                error && (React.createElement(IconAtom, { name: "exclamation-circle", className: emotion.cx('f3 self-center', emotion.css(templateObject_6$8 || (templateObject_6$8 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), COLORS.RED.NORMAL)) }))),
            React.createElement("div", { className: "mt2" }, error && (React.createElement(TextAtom, { size: "S", className: emotion.cx('self-center', emotion.css(templateObject_7$6 || (templateObject_7$6 = __makeTemplateObject(["color: #EB5757"], ["color: #EB5757"])))) }, error)))));
    };
    return InputOrganism;
}(React.PureComponent));
var templateObject_1$m, templateObject_2$f, templateObject_3$b, templateObject_4$8, templateObject_5$8, templateObject_6$8, templateObject_7$6;

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
        return (React.createElement("div", { key: "learning-bar-" + id, id: id || 'svgWrapper', className: emotion.cx(emotion.css(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n            height: ", "px;\n            width: ", "px;\n        "], ["\n            height: ", "px;\n            width: ", "px;\n        "])), height + 50, width + 50), className) }));
    };
    return LearningTimeBarChartOrganism;
}(React.Component));
var templateObject_1$n;

exports.AnchorTextAtom = AnchorTextAtom;
exports.AvatarAtom = AvatarAtom;
exports.ButtonAtom = ButtonAtom;
exports.CardAtom = CardAtom;
exports.ClassroomHeaderAtom = ClassroomHeaderAtom;
exports.H1Atom = H1Atom;
exports.H2Atom = H2Atom;
exports.H3Atom = H3Atom;
exports.IconAtom = IconAtom;
exports.ImageAtom = ImageAtom;
exports.LinkTextAtom = LinkTextAtom;
exports.ProgressBarAtom = ProgressBarAtom;
exports.TextAtom = TextAtom;
exports.AlertMolecule = AlertMolecule;
exports.AnimatedButtonMolecule = AnimatedButtonMolecule;
exports.BannerMolecule = BannerMolecule;
exports.CourseCardMolecule = CourseCardMolecule;
exports.SkillAssessmentCardMolecule = SkillAssessmentCardMolecule;
exports.LearningPathCardMolecule = LearningPathCardMolecule;
exports.CourseProgressCardMolecule = CourseProgressCardMolecule;
exports.TeacherCardMolecule = TeacherCardMolecule;
exports.ReviewCardMolecule = ReviewCardMolecule;
exports.FooterMolecule = FooterMolecule;
exports.LoaderMolecule = LoaderMolecule;
exports.InputOrganism = InputOrganism;
exports.LearningTimeBarChartOrganism = LearningTimeBarChartOrganism;
