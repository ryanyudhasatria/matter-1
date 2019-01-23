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

var css = ".foawe,\n.foawes,\n.foawer,\n.foawel,\n.foaweb {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1; }\n\n.foawe-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.foawe-xs {\n  font-size: .75em; }\n\n.foawe-sm {\n  font-size: .875em; }\n\n.foawe-1x {\n  font-size: 1em; }\n\n.foawe-2x {\n  font-size: 2em; }\n\n.foawe-3x {\n  font-size: 3em; }\n\n.foawe-4x {\n  font-size: 4em; }\n\n.foawe-5x {\n  font-size: 5em; }\n\n.foawe-6x {\n  font-size: 6em; }\n\n.foawe-7x {\n  font-size: 7em; }\n\n.foawe-8x {\n  font-size: 8em; }\n\n.foawe-9x {\n  font-size: 9em; }\n\n.foawe-10x {\n  font-size: 10em; }\n\n.foawe-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.foawe-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .foawe-ul > li {\n    position: relative; }\n\n.foawe-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.foawe-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.foawe-pull-left {\n  float: left; }\n\n.foawe-pull-right {\n  float: right; }\n\n.foawe.foawe-pull-left,\n.foawes.foawe-pull-left,\n.foawer.foawe-pull-left,\n.foawel.foawe-pull-left,\n.foaweb.foawe-pull-left {\n  margin-right: .3em; }\n\n.foawe.foawe-pull-right,\n.foawes.foawe-pull-right,\n.foawer.foawe-pull-right,\n.foawel.foawe-pull-right,\n.foaweb.foawe-pull-right {\n  margin-left: .3em; }\n\n.foawe-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.foawe-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.foawe-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.foawe-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.foawe-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.foawe-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.foawe-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.foawe-flip-horizontal.foawe-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .foawe-rotate-90,\n:root .foawe-rotate-180,\n:root .foawe-rotate-270,\n:root .foawe-flip-horizontal,\n:root .foawe-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.foawe-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em; }\n\n.foawe-stack-1x,\n.foawe-stack-2x {\n  left: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n\n.foawe-stack-1x {\n  line-height: inherit; }\n\n.foawe-stack-2x {\n  font-size: 2em; }\n\n.foawe-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\nreaders do not read off random characters that represent icons */\n.foawe-500px:before {\n  content: \"\\f26e\"; }\n\n.foawe-accessible-icon:before {\n  content: \"\\f368\"; }\n\n.foawe-accusoft:before {\n  content: \"\\f369\"; }\n\n.foawe-acquisitions-incorporated:before {\n  content: \"\\f6af\"; }\n\n.foawe-ad:before {\n  content: \"\\f641\"; }\n\n.foawe-address-book:before {\n  content: \"\\f2b9\"; }\n\n.foawe-address-card:before {\n  content: \"\\f2bb\"; }\n\n.foawe-adjust:before {\n  content: \"\\f042\"; }\n\n.foawe-adn:before {\n  content: \"\\f170\"; }\n\n.foawe-adobe:before {\n  content: \"\\f778\"; }\n\n.foawe-adversal:before {\n  content: \"\\f36a\"; }\n\n.foawe-affiliatetheme:before {\n  content: \"\\f36b\"; }\n\n.foawe-air-freshener:before {\n  content: \"\\f5d0\"; }\n\n.foawe-algolia:before {\n  content: \"\\f36c\"; }\n\n.foawe-align-center:before {\n  content: \"\\f037\"; }\n\n.foawe-align-justify:before {\n  content: \"\\f039\"; }\n\n.foawe-align-left:before {\n  content: \"\\f036\"; }\n\n.foawe-align-right:before {\n  content: \"\\f038\"; }\n\n.foawe-alipay:before {\n  content: \"\\f642\"; }\n\n.foawe-allergies:before {\n  content: \"\\f461\"; }\n\n.foawe-amazon:before {\n  content: \"\\f270\"; }\n\n.foawe-amazon-pay:before {\n  content: \"\\f42c\"; }\n\n.foawe-ambulance:before {\n  content: \"\\f0f9\"; }\n\n.foawe-american-sign-language-interpreting:before {\n  content: \"\\f2a3\"; }\n\n.foawe-amilia:before {\n  content: \"\\f36d\"; }\n\n.foawe-anchor:before {\n  content: \"\\f13d\"; }\n\n.foawe-android:before {\n  content: \"\\f17b\"; }\n\n.foawe-angellist:before {\n  content: \"\\f209\"; }\n\n.foawe-angle-double-down:before {\n  content: \"\\f103\"; }\n\n.foawe-angle-double-left:before {\n  content: \"\\f100\"; }\n\n.foawe-angle-double-right:before {\n  content: \"\\f101\"; }\n\n.foawe-angle-double-up:before {\n  content: \"\\f102\"; }\n\n.foawe-angle-down:before {\n  content: \"\\f107\"; }\n\n.foawe-angle-left:before {\n  content: \"\\f104\"; }\n\n.foawe-angle-right:before {\n  content: \"\\f105\"; }\n\n.foawe-angle-up:before {\n  content: \"\\f106\"; }\n\n.foawe-angry:before {\n  content: \"\\f556\"; }\n\n.foawe-angrycreative:before {\n  content: \"\\f36e\"; }\n\n.foawe-angular:before {\n  content: \"\\f420\"; }\n\n.foawe-ankh:before {\n  content: \"\\f644\"; }\n\n.foawe-app-store:before {\n  content: \"\\f36f\"; }\n\n.foawe-app-store-ios:before {\n  content: \"\\f370\"; }\n\n.foawe-apper:before {\n  content: \"\\f371\"; }\n\n.foawe-apple:before {\n  content: \"\\f179\"; }\n\n.foawe-apple-alt:before {\n  content: \"\\f5d1\"; }\n\n.foawe-apple-pay:before {\n  content: \"\\f415\"; }\n\n.foawe-archive:before {\n  content: \"\\f187\"; }\n\n.foawe-archway:before {\n  content: \"\\f557\"; }\n\n.foawe-arrow-alt-circle-down:before {\n  content: \"\\f358\"; }\n\n.foawe-arrow-alt-circle-left:before {\n  content: \"\\f359\"; }\n\n.foawe-arrow-alt-circle-right:before {\n  content: \"\\f35a\"; }\n\n.foawe-arrow-alt-circle-up:before {\n  content: \"\\f35b\"; }\n\n.foawe-arrow-circle-down:before {\n  content: \"\\f0ab\"; }\n\n.foawe-arrow-circle-left:before {\n  content: \"\\f0a8\"; }\n\n.foawe-arrow-circle-right:before {\n  content: \"\\f0a9\"; }\n\n.foawe-arrow-circle-up:before {\n  content: \"\\f0aa\"; }\n\n.foawe-arrow-down:before {\n  content: \"\\f063\"; }\n\n.foawe-arrow-left:before {\n  content: \"\\f060\"; }\n\n.foawe-arrow-right:before {\n  content: \"\\f061\"; }\n\n.foawe-arrow-up:before {\n  content: \"\\f062\"; }\n\n.foawe-arrows-alt:before {\n  content: \"\\f0b2\"; }\n\n.foawe-arrows-alt-h:before {\n  content: \"\\f337\"; }\n\n.foawe-arrows-alt-v:before {\n  content: \"\\f338\"; }\n\n.foawe-artstation:before {\n  content: \"\\f77a\"; }\n\n.foawe-assistive-listening-systems:before {\n  content: \"\\f2a2\"; }\n\n.foawe-asterisk:before {\n  content: \"\\f069\"; }\n\n.foawe-asymmetrik:before {\n  content: \"\\f372\"; }\n\n.foawe-at:before {\n  content: \"\\f1fa\"; }\n\n.foawe-atlas:before {\n  content: \"\\f558\"; }\n\n.foawe-atlassian:before {\n  content: \"\\f77b\"; }\n\n.foawe-atom:before {\n  content: \"\\f5d2\"; }\n\n.foawe-audible:before {\n  content: \"\\f373\"; }\n\n.foawe-audio-description:before {\n  content: \"\\f29e\"; }\n\n.foawe-autoprefixer:before {\n  content: \"\\f41c\"; }\n\n.foawe-avianex:before {\n  content: \"\\f374\"; }\n\n.foawe-aviato:before {\n  content: \"\\f421\"; }\n\n.foawe-award:before {\n  content: \"\\f559\"; }\n\n.foawe-aws:before {\n  content: \"\\f375\"; }\n\n.foawe-baby:before {\n  content: \"\\f77c\"; }\n\n.foawe-baby-carriage:before {\n  content: \"\\f77d\"; }\n\n.foawe-backspace:before {\n  content: \"\\f55a\"; }\n\n.foawe-backward:before {\n  content: \"\\f04a\"; }\n\n.foawe-balance-scale:before {\n  content: \"\\f24e\"; }\n\n.foawe-ban:before {\n  content: \"\\f05e\"; }\n\n.foawe-band-aid:before {\n  content: \"\\f462\"; }\n\n.foawe-bandcamp:before {\n  content: \"\\f2d5\"; }\n\n.foawe-barcode:before {\n  content: \"\\f02a\"; }\n\n.foawe-bars:before {\n  content: \"\\f0c9\"; }\n\n.foawe-baseball-ball:before {\n  content: \"\\f433\"; }\n\n.foawe-basketball-ball:before {\n  content: \"\\f434\"; }\n\n.foawe-bath:before {\n  content: \"\\f2cd\"; }\n\n.foawe-battery-empty:before {\n  content: \"\\f244\"; }\n\n.foawe-battery-full:before {\n  content: \"\\f240\"; }\n\n.foawe-battery-half:before {\n  content: \"\\f242\"; }\n\n.foawe-battery-quarter:before {\n  content: \"\\f243\"; }\n\n.foawe-battery-three-quarters:before {\n  content: \"\\f241\"; }\n\n.foawe-bed:before {\n  content: \"\\f236\"; }\n\n.foawe-beer:before {\n  content: \"\\f0fc\"; }\n\n.foawe-behance:before {\n  content: \"\\f1b4\"; }\n\n.foawe-behance-square:before {\n  content: \"\\f1b5\"; }\n\n.foawe-bell:before {\n  content: \"\\f0f3\"; }\n\n.foawe-bell-slash:before {\n  content: \"\\f1f6\"; }\n\n.foawe-bezier-curve:before {\n  content: \"\\f55b\"; }\n\n.foawe-bible:before {\n  content: \"\\f647\"; }\n\n.foawe-bicycle:before {\n  content: \"\\f206\"; }\n\n.foawe-bimobject:before {\n  content: \"\\f378\"; }\n\n.foawe-binoculars:before {\n  content: \"\\f1e5\"; }\n\n.foawe-biohazard:before {\n  content: \"\\f780\"; }\n\n.foawe-birthday-cake:before {\n  content: \"\\f1fd\"; }\n\n.foawe-bitbucket:before {\n  content: \"\\f171\"; }\n\n.foawe-bitcoin:before {\n  content: \"\\f379\"; }\n\n.foawe-bity:before {\n  content: \"\\f37a\"; }\n\n.foawe-black-tie:before {\n  content: \"\\f27e\"; }\n\n.foawe-blackberry:before {\n  content: \"\\f37b\"; }\n\n.foawe-blender:before {\n  content: \"\\f517\"; }\n\n.foawe-blender-phone:before {\n  content: \"\\f6b6\"; }\n\n.foawe-blind:before {\n  content: \"\\f29d\"; }\n\n.foawe-blog:before {\n  content: \"\\f781\"; }\n\n.foawe-blogger:before {\n  content: \"\\f37c\"; }\n\n.foawe-blogger-b:before {\n  content: \"\\f37d\"; }\n\n.foawe-bluetooth:before {\n  content: \"\\f293\"; }\n\n.foawe-bluetooth-b:before {\n  content: \"\\f294\"; }\n\n.foawe-bold:before {\n  content: \"\\f032\"; }\n\n.foawe-bolt:before {\n  content: \"\\f0e7\"; }\n\n.foawe-bomb:before {\n  content: \"\\f1e2\"; }\n\n.foawe-bone:before {\n  content: \"\\f5d7\"; }\n\n.foawe-bong:before {\n  content: \"\\f55c\"; }\n\n.foawe-book:before {\n  content: \"\\f02d\"; }\n\n.foawe-book-dead:before {\n  content: \"\\f6b7\"; }\n\n.foawe-book-open:before {\n  content: \"\\f518\"; }\n\n.foawe-book-reader:before {\n  content: \"\\f5da\"; }\n\n.foawe-bookmark:before {\n  content: \"\\f02e\"; }\n\n.foawe-bowling-ball:before {\n  content: \"\\f436\"; }\n\n.foawe-box:before {\n  content: \"\\f466\"; }\n\n.foawe-box-open:before {\n  content: \"\\f49e\"; }\n\n.foawe-boxes:before {\n  content: \"\\f468\"; }\n\n.foawe-braille:before {\n  content: \"\\f2a1\"; }\n\n.foawe-brain:before {\n  content: \"\\f5dc\"; }\n\n.foawe-briefcase:before {\n  content: \"\\f0b1\"; }\n\n.foawe-briefcase-medical:before {\n  content: \"\\f469\"; }\n\n.foawe-broadcast-tower:before {\n  content: \"\\f519\"; }\n\n.foawe-broom:before {\n  content: \"\\f51a\"; }\n\n.foawe-brush:before {\n  content: \"\\f55d\"; }\n\n.foawe-btc:before {\n  content: \"\\f15a\"; }\n\n.foawe-bug:before {\n  content: \"\\f188\"; }\n\n.foawe-building:before {\n  content: \"\\f1ad\"; }\n\n.foawe-bullhorn:before {\n  content: \"\\f0a1\"; }\n\n.foawe-bullseye:before {\n  content: \"\\f140\"; }\n\n.foawe-burn:before {\n  content: \"\\f46a\"; }\n\n.foawe-buromobelexperte:before {\n  content: \"\\f37f\"; }\n\n.foawe-bus:before {\n  content: \"\\f207\"; }\n\n.foawe-bus-alt:before {\n  content: \"\\f55e\"; }\n\n.foawe-business-time:before {\n  content: \"\\f64a\"; }\n\n.foawe-buysellads:before {\n  content: \"\\f20d\"; }\n\n.foawe-calculator:before {\n  content: \"\\f1ec\"; }\n\n.foawe-calendar:before {\n  content: \"\\f133\"; }\n\n.foawe-calendar-alt:before {\n  content: \"\\f073\"; }\n\n.foawe-calendar-check:before {\n  content: \"\\f274\"; }\n\n.foawe-calendar-day:before {\n  content: \"\\f783\"; }\n\n.foawe-calendar-minus:before {\n  content: \"\\f272\"; }\n\n.foawe-calendar-plus:before {\n  content: \"\\f271\"; }\n\n.foawe-calendar-times:before {\n  content: \"\\f273\"; }\n\n.foawe-calendar-week:before {\n  content: \"\\f784\"; }\n\n.foawe-camera:before {\n  content: \"\\f030\"; }\n\n.foawe-camera-retro:before {\n  content: \"\\f083\"; }\n\n.foawe-campground:before {\n  content: \"\\f6bb\"; }\n\n.foawe-canadian-maple-leaf:before {\n  content: \"\\f785\"; }\n\n.foawe-candy-cane:before {\n  content: \"\\f786\"; }\n\n.foawe-cannabis:before {\n  content: \"\\f55f\"; }\n\n.foawe-capsules:before {\n  content: \"\\f46b\"; }\n\n.foawe-car:before {\n  content: \"\\f1b9\"; }\n\n.foawe-car-alt:before {\n  content: \"\\f5de\"; }\n\n.foawe-car-battery:before {\n  content: \"\\f5df\"; }\n\n.foawe-car-crash:before {\n  content: \"\\f5e1\"; }\n\n.foawe-car-side:before {\n  content: \"\\f5e4\"; }\n\n.foawe-caret-down:before {\n  content: \"\\f0d7\"; }\n\n.foawe-caret-left:before {\n  content: \"\\f0d9\"; }\n\n.foawe-caret-right:before {\n  content: \"\\f0da\"; }\n\n.foawe-caret-square-down:before {\n  content: \"\\f150\"; }\n\n.foawe-caret-square-left:before {\n  content: \"\\f191\"; }\n\n.foawe-caret-square-right:before {\n  content: \"\\f152\"; }\n\n.foawe-caret-square-up:before {\n  content: \"\\f151\"; }\n\n.foawe-caret-up:before {\n  content: \"\\f0d8\"; }\n\n.foawe-carrot:before {\n  content: \"\\f787\"; }\n\n.foawe-cart-arrow-down:before {\n  content: \"\\f218\"; }\n\n.foawe-cart-plus:before {\n  content: \"\\f217\"; }\n\n.foawe-cash-register:before {\n  content: \"\\f788\"; }\n\n.foawe-cat:before {\n  content: \"\\f6be\"; }\n\n.foawe-cc-amazon-pay:before {\n  content: \"\\f42d\"; }\n\n.foawe-cc-amex:before {\n  content: \"\\f1f3\"; }\n\n.foawe-cc-apple-pay:before {\n  content: \"\\f416\"; }\n\n.foawe-cc-diners-club:before {\n  content: \"\\f24c\"; }\n\n.foawe-cc-discover:before {\n  content: \"\\f1f2\"; }\n\n.foawe-cc-jcb:before {\n  content: \"\\f24b\"; }\n\n.foawe-cc-mastercard:before {\n  content: \"\\f1f1\"; }\n\n.foawe-cc-paypal:before {\n  content: \"\\f1f4\"; }\n\n.foawe-cc-stripe:before {\n  content: \"\\f1f5\"; }\n\n.foawe-cc-visa:before {\n  content: \"\\f1f0\"; }\n\n.foawe-centercode:before {\n  content: \"\\f380\"; }\n\n.foawe-centos:before {\n  content: \"\\f789\"; }\n\n.foawe-certificate:before {\n  content: \"\\f0a3\"; }\n\n.foawe-chair:before {\n  content: \"\\f6c0\"; }\n\n.foawe-chalkboard:before {\n  content: \"\\f51b\"; }\n\n.foawe-chalkboard-teacher:before {\n  content: \"\\f51c\"; }\n\n.foawe-charging-station:before {\n  content: \"\\f5e7\"; }\n\n.foawe-chart-area:before {\n  content: \"\\f1fe\"; }\n\n.foawe-chart-bar:before {\n  content: \"\\f080\"; }\n\n.foawe-chart-line:before {\n  content: \"\\f201\"; }\n\n.foawe-chart-pie:before {\n  content: \"\\f200\"; }\n\n.foawe-check:before {\n  content: \"\\f00c\"; }\n\n.foawe-check-circle:before {\n  content: \"\\f058\"; }\n\n.foawe-check-double:before {\n  content: \"\\f560\"; }\n\n.foawe-check-square:before {\n  content: \"\\f14a\"; }\n\n.foawe-chess:before {\n  content: \"\\f439\"; }\n\n.foawe-chess-bishop:before {\n  content: \"\\f43a\"; }\n\n.foawe-chess-board:before {\n  content: \"\\f43c\"; }\n\n.foawe-chess-king:before {\n  content: \"\\f43f\"; }\n\n.foawe-chess-knight:before {\n  content: \"\\f441\"; }\n\n.foawe-chess-pawn:before {\n  content: \"\\f443\"; }\n\n.foawe-chess-queen:before {\n  content: \"\\f445\"; }\n\n.foawe-chess-rook:before {\n  content: \"\\f447\"; }\n\n.foawe-chevron-circle-down:before {\n  content: \"\\f13a\"; }\n\n.foawe-chevron-circle-left:before {\n  content: \"\\f137\"; }\n\n.foawe-chevron-circle-right:before {\n  content: \"\\f138\"; }\n\n.foawe-chevron-circle-up:before {\n  content: \"\\f139\"; }\n\n.foawe-chevron-down:before {\n  content: \"\\f078\"; }\n\n.foawe-chevron-left:before {\n  content: \"\\f053\"; }\n\n.foawe-chevron-right:before {\n  content: \"\\f054\"; }\n\n.foawe-chevron-up:before {\n  content: \"\\f077\"; }\n\n.foawe-child:before {\n  content: \"\\f1ae\"; }\n\n.foawe-chrome:before {\n  content: \"\\f268\"; }\n\n.foawe-church:before {\n  content: \"\\f51d\"; }\n\n.foawe-circle:before {\n  content: \"\\f111\"; }\n\n.foawe-circle-notch:before {\n  content: \"\\f1ce\"; }\n\n.foawe-city:before {\n  content: \"\\f64f\"; }\n\n.foawe-clipboard:before {\n  content: \"\\f328\"; }\n\n.foawe-clipboard-check:before {\n  content: \"\\f46c\"; }\n\n.foawe-clipboard-list:before {\n  content: \"\\f46d\"; }\n\n.foawe-clock:before {\n  content: \"\\f017\"; }\n\n.foawe-clone:before {\n  content: \"\\f24d\"; }\n\n.foawe-closed-captioning:before {\n  content: \"\\f20a\"; }\n\n.foawe-cloud:before {\n  content: \"\\f0c2\"; }\n\n.foawe-cloud-download-alt:before {\n  content: \"\\f381\"; }\n\n.foawe-cloud-meatball:before {\n  content: \"\\f73b\"; }\n\n.foawe-cloud-moon:before {\n  content: \"\\f6c3\"; }\n\n.foawe-cloud-moon-rain:before {\n  content: \"\\f73c\"; }\n\n.foawe-cloud-rain:before {\n  content: \"\\f73d\"; }\n\n.foawe-cloud-showers-heavy:before {\n  content: \"\\f740\"; }\n\n.foawe-cloud-sun:before {\n  content: \"\\f6c4\"; }\n\n.foawe-cloud-sun-rain:before {\n  content: \"\\f743\"; }\n\n.foawe-cloud-upload-alt:before {\n  content: \"\\f382\"; }\n\n.foawe-cloudscale:before {\n  content: \"\\f383\"; }\n\n.foawe-cloudsmith:before {\n  content: \"\\f384\"; }\n\n.foawe-cloudversify:before {\n  content: \"\\f385\"; }\n\n.foawe-cocktail:before {\n  content: \"\\f561\"; }\n\n.foawe-code:before {\n  content: \"\\f121\"; }\n\n.foawe-code-branch:before {\n  content: \"\\f126\"; }\n\n.foawe-codepen:before {\n  content: \"\\f1cb\"; }\n\n.foawe-codiepie:before {\n  content: \"\\f284\"; }\n\n.foawe-coffee:before {\n  content: \"\\f0f4\"; }\n\n.foawe-cog:before {\n  content: \"\\f013\"; }\n\n.foawe-cogs:before {\n  content: \"\\f085\"; }\n\n.foawe-coins:before {\n  content: \"\\f51e\"; }\n\n.foawe-columns:before {\n  content: \"\\f0db\"; }\n\n.foawe-comment:before {\n  content: \"\\f075\"; }\n\n.foawe-comment-alt:before {\n  content: \"\\f27a\"; }\n\n.foawe-comment-dollar:before {\n  content: \"\\f651\"; }\n\n.foawe-comment-dots:before {\n  content: \"\\f4ad\"; }\n\n.foawe-comment-slash:before {\n  content: \"\\f4b3\"; }\n\n.foawe-comments:before {\n  content: \"\\f086\"; }\n\n.foawe-comments-dollar:before {\n  content: \"\\f653\"; }\n\n.foawe-compact-disc:before {\n  content: \"\\f51f\"; }\n\n.foawe-compass:before {\n  content: \"\\f14e\"; }\n\n.foawe-compress:before {\n  content: \"\\f066\"; }\n\n.foawe-compress-arrows-alt:before {\n  content: \"\\f78c\"; }\n\n.foawe-concierge-bell:before {\n  content: \"\\f562\"; }\n\n.foawe-confluence:before {\n  content: \"\\f78d\"; }\n\n.foawe-connectdevelop:before {\n  content: \"\\f20e\"; }\n\n.foawe-contao:before {\n  content: \"\\f26d\"; }\n\n.foawe-cookie:before {\n  content: \"\\f563\"; }\n\n.foawe-cookie-bite:before {\n  content: \"\\f564\"; }\n\n.foawe-copy:before {\n  content: \"\\f0c5\"; }\n\n.foawe-copyright:before {\n  content: \"\\f1f9\"; }\n\n.foawe-couch:before {\n  content: \"\\f4b8\"; }\n\n.foawe-cpanel:before {\n  content: \"\\f388\"; }\n\n.foawe-creative-commons:before {\n  content: \"\\f25e\"; }\n\n.foawe-creative-commons-by:before {\n  content: \"\\f4e7\"; }\n\n.foawe-creative-commons-nc:before {\n  content: \"\\f4e8\"; }\n\n.foawe-creative-commons-nc-eu:before {\n  content: \"\\f4e9\"; }\n\n.foawe-creative-commons-nc-jp:before {\n  content: \"\\f4ea\"; }\n\n.foawe-creative-commons-nd:before {\n  content: \"\\f4eb\"; }\n\n.foawe-creative-commons-pd:before {\n  content: \"\\f4ec\"; }\n\n.foawe-creative-commons-pd-alt:before {\n  content: \"\\f4ed\"; }\n\n.foawe-creative-commons-remix:before {\n  content: \"\\f4ee\"; }\n\n.foawe-creative-commons-sa:before {\n  content: \"\\f4ef\"; }\n\n.foawe-creative-commons-sampling:before {\n  content: \"\\f4f0\"; }\n\n.foawe-creative-commons-sampling-plus:before {\n  content: \"\\f4f1\"; }\n\n.foawe-creative-commons-share:before {\n  content: \"\\f4f2\"; }\n\n.foawe-creative-commons-zero:before {\n  content: \"\\f4f3\"; }\n\n.foawe-credit-card:before {\n  content: \"\\f09d\"; }\n\n.foawe-critical-role:before {\n  content: \"\\f6c9\"; }\n\n.foawe-crop:before {\n  content: \"\\f125\"; }\n\n.foawe-crop-alt:before {\n  content: \"\\f565\"; }\n\n.foawe-cross:before {\n  content: \"\\f654\"; }\n\n.foawe-crosshairs:before {\n  content: \"\\f05b\"; }\n\n.foawe-crow:before {\n  content: \"\\f520\"; }\n\n.foawe-crown:before {\n  content: \"\\f521\"; }\n\n.foawe-css3:before {\n  content: \"\\f13c\"; }\n\n.foawe-css3-alt:before {\n  content: \"\\f38b\"; }\n\n.foawe-cube:before {\n  content: \"\\f1b2\"; }\n\n.foawe-cubes:before {\n  content: \"\\f1b3\"; }\n\n.foawe-cut:before {\n  content: \"\\f0c4\"; }\n\n.foawe-cuttlefish:before {\n  content: \"\\f38c\"; }\n\n.foawe-d-and-d:before {\n  content: \"\\f38d\"; }\n\n.foawe-d-and-d-beyond:before {\n  content: \"\\f6ca\"; }\n\n.foawe-dashcube:before {\n  content: \"\\f210\"; }\n\n.foawe-database:before {\n  content: \"\\f1c0\"; }\n\n.foawe-deaf:before {\n  content: \"\\f2a4\"; }\n\n.foawe-delicious:before {\n  content: \"\\f1a5\"; }\n\n.foawe-democrat:before {\n  content: \"\\f747\"; }\n\n.foawe-deploydog:before {\n  content: \"\\f38e\"; }\n\n.foawe-deskpro:before {\n  content: \"\\f38f\"; }\n\n.foawe-desktop:before {\n  content: \"\\f108\"; }\n\n.foawe-dev:before {\n  content: \"\\f6cc\"; }\n\n.foawe-deviantart:before {\n  content: \"\\f1bd\"; }\n\n.foawe-dharmachakra:before {\n  content: \"\\f655\"; }\n\n.foawe-dhl:before {\n  content: \"\\f790\"; }\n\n.foawe-diagnoses:before {\n  content: \"\\f470\"; }\n\n.foawe-diaspora:before {\n  content: \"\\f791\"; }\n\n.foawe-dice:before {\n  content: \"\\f522\"; }\n\n.foawe-dice-d20:before {\n  content: \"\\f6cf\"; }\n\n.foawe-dice-d6:before {\n  content: \"\\f6d1\"; }\n\n.foawe-dice-five:before {\n  content: \"\\f523\"; }\n\n.foawe-dice-four:before {\n  content: \"\\f524\"; }\n\n.foawe-dice-one:before {\n  content: \"\\f525\"; }\n\n.foawe-dice-six:before {\n  content: \"\\f526\"; }\n\n.foawe-dice-three:before {\n  content: \"\\f527\"; }\n\n.foawe-dice-two:before {\n  content: \"\\f528\"; }\n\n.foawe-digg:before {\n  content: \"\\f1a6\"; }\n\n.foawe-digital-ocean:before {\n  content: \"\\f391\"; }\n\n.foawe-digital-tachograph:before {\n  content: \"\\f566\"; }\n\n.foawe-directions:before {\n  content: \"\\f5eb\"; }\n\n.foawe-discord:before {\n  content: \"\\f392\"; }\n\n.foawe-discourse:before {\n  content: \"\\f393\"; }\n\n.foawe-divide:before {\n  content: \"\\f529\"; }\n\n.foawe-dizzy:before {\n  content: \"\\f567\"; }\n\n.foawe-dna:before {\n  content: \"\\f471\"; }\n\n.foawe-dochub:before {\n  content: \"\\f394\"; }\n\n.foawe-docker:before {\n  content: \"\\f395\"; }\n\n.foawe-dog:before {\n  content: \"\\f6d3\"; }\n\n.foawe-dollar-sign:before {\n  content: \"\\f155\"; }\n\n.foawe-dolly:before {\n  content: \"\\f472\"; }\n\n.foawe-dolly-flatbed:before {\n  content: \"\\f474\"; }\n\n.foawe-donate:before {\n  content: \"\\f4b9\"; }\n\n.foawe-door-closed:before {\n  content: \"\\f52a\"; }\n\n.foawe-door-open:before {\n  content: \"\\f52b\"; }\n\n.foawe-dot-circle:before {\n  content: \"\\f192\"; }\n\n.foawe-dove:before {\n  content: \"\\f4ba\"; }\n\n.foawe-download:before {\n  content: \"\\f019\"; }\n\n.foawe-draft2digital:before {\n  content: \"\\f396\"; }\n\n.foawe-drafting-compass:before {\n  content: \"\\f568\"; }\n\n.foawe-dragon:before {\n  content: \"\\f6d5\"; }\n\n.foawe-draw-polygon:before {\n  content: \"\\f5ee\"; }\n\n.foawe-dribbble:before {\n  content: \"\\f17d\"; }\n\n.foawe-dribbble-square:before {\n  content: \"\\f397\"; }\n\n.foawe-dropbox:before {\n  content: \"\\f16b\"; }\n\n.foawe-drum:before {\n  content: \"\\f569\"; }\n\n.foawe-drum-steelpan:before {\n  content: \"\\f56a\"; }\n\n.foawe-drumstick-bite:before {\n  content: \"\\f6d7\"; }\n\n.foawe-drupal:before {\n  content: \"\\f1a9\"; }\n\n.foawe-dumbbell:before {\n  content: \"\\f44b\"; }\n\n.foawe-dumpster:before {\n  content: \"\\f793\"; }\n\n.foawe-dumpster-fire:before {\n  content: \"\\f794\"; }\n\n.foawe-dungeon:before {\n  content: \"\\f6d9\"; }\n\n.foawe-dyalog:before {\n  content: \"\\f399\"; }\n\n.foawe-earlybirds:before {\n  content: \"\\f39a\"; }\n\n.foawe-ebay:before {\n  content: \"\\f4f4\"; }\n\n.foawe-edge:before {\n  content: \"\\f282\"; }\n\n.foawe-edit:before {\n  content: \"\\f044\"; }\n\n.foawe-eject:before {\n  content: \"\\f052\"; }\n\n.foawe-elementor:before {\n  content: \"\\f430\"; }\n\n.foawe-ellipsis-h:before {\n  content: \"\\f141\"; }\n\n.foawe-ellipsis-v:before {\n  content: \"\\f142\"; }\n\n.foawe-ello:before {\n  content: \"\\f5f1\"; }\n\n.foawe-ember:before {\n  content: \"\\f423\"; }\n\n.foawe-empire:before {\n  content: \"\\f1d1\"; }\n\n.foawe-envelope:before {\n  content: \"\\f0e0\"; }\n\n.foawe-envelope-open:before {\n  content: \"\\f2b6\"; }\n\n.foawe-envelope-open-text:before {\n  content: \"\\f658\"; }\n\n.foawe-envelope-square:before {\n  content: \"\\f199\"; }\n\n.foawe-envira:before {\n  content: \"\\f299\"; }\n\n.foawe-equals:before {\n  content: \"\\f52c\"; }\n\n.foawe-eraser:before {\n  content: \"\\f12d\"; }\n\n.foawe-erlang:before {\n  content: \"\\f39d\"; }\n\n.foawe-ethereum:before {\n  content: \"\\f42e\"; }\n\n.foawe-ethernet:before {\n  content: \"\\f796\"; }\n\n.foawe-etsy:before {\n  content: \"\\f2d7\"; }\n\n.foawe-euro-sign:before {\n  content: \"\\f153\"; }\n\n.foawe-exchange-alt:before {\n  content: \"\\f362\"; }\n\n.foawe-exclamation:before {\n  content: \"\\f12a\"; }\n\n.foawe-exclamation-circle:before {\n  content: \"\\f06a\"; }\n\n.foawe-exclamation-triangle:before {\n  content: \"\\f071\"; }\n\n.foawe-expand:before {\n  content: \"\\f065\"; }\n\n.foawe-expand-arrows-alt:before {\n  content: \"\\f31e\"; }\n\n.foawe-expeditedssl:before {\n  content: \"\\f23e\"; }\n\n.foawe-external-link-alt:before {\n  content: \"\\f35d\"; }\n\n.foawe-external-link-square-alt:before {\n  content: \"\\f360\"; }\n\n.foawe-eye:before {\n  content: \"\\f06e\"; }\n\n.foawe-eye-dropper:before {\n  content: \"\\f1fb\"; }\n\n.foawe-eye-slash:before {\n  content: \"\\f070\"; }\n\n.foawe-facebook:before {\n  content: \"\\f09a\"; }\n\n.foawe-facebook-f:before {\n  content: \"\\f39e\"; }\n\n.foawe-facebook-messenger:before {\n  content: \"\\f39f\"; }\n\n.foawe-facebook-square:before {\n  content: \"\\f082\"; }\n\n.foawe-fantasy-flight-games:before {\n  content: \"\\f6dc\"; }\n\n.foawe-fast-backward:before {\n  content: \"\\f049\"; }\n\n.foawe-fast-forward:before {\n  content: \"\\f050\"; }\n\n.foawe-fax:before {\n  content: \"\\f1ac\"; }\n\n.foawe-feather:before {\n  content: \"\\f52d\"; }\n\n.foawe-feather-alt:before {\n  content: \"\\f56b\"; }\n\n.foawe-fedex:before {\n  content: \"\\f797\"; }\n\n.foawe-fedora:before {\n  content: \"\\f798\"; }\n\n.foawe-female:before {\n  content: \"\\f182\"; }\n\n.foawe-fighter-jet:before {\n  content: \"\\f0fb\"; }\n\n.foawe-figma:before {\n  content: \"\\f799\"; }\n\n.foawe-file:before {\n  content: \"\\f15b\"; }\n\n.foawe-file-alt:before {\n  content: \"\\f15c\"; }\n\n.foawe-file-archive:before {\n  content: \"\\f1c6\"; }\n\n.foawe-file-audio:before {\n  content: \"\\f1c7\"; }\n\n.foawe-file-code:before {\n  content: \"\\f1c9\"; }\n\n.foawe-file-contract:before {\n  content: \"\\f56c\"; }\n\n.foawe-file-csv:before {\n  content: \"\\f6dd\"; }\n\n.foawe-file-download:before {\n  content: \"\\f56d\"; }\n\n.foawe-file-excel:before {\n  content: \"\\f1c3\"; }\n\n.foawe-file-export:before {\n  content: \"\\f56e\"; }\n\n.foawe-file-image:before {\n  content: \"\\f1c5\"; }\n\n.foawe-file-import:before {\n  content: \"\\f56f\"; }\n\n.foawe-file-invoice:before {\n  content: \"\\f570\"; }\n\n.foawe-file-invoice-dollar:before {\n  content: \"\\f571\"; }\n\n.foawe-file-medical:before {\n  content: \"\\f477\"; }\n\n.foawe-file-medical-alt:before {\n  content: \"\\f478\"; }\n\n.foawe-file-pdf:before {\n  content: \"\\f1c1\"; }\n\n.foawe-file-powerpoint:before {\n  content: \"\\f1c4\"; }\n\n.foawe-file-prescription:before {\n  content: \"\\f572\"; }\n\n.foawe-file-signature:before {\n  content: \"\\f573\"; }\n\n.foawe-file-upload:before {\n  content: \"\\f574\"; }\n\n.foawe-file-video:before {\n  content: \"\\f1c8\"; }\n\n.foawe-file-word:before {\n  content: \"\\f1c2\"; }\n\n.foawe-fill:before {\n  content: \"\\f575\"; }\n\n.foawe-fill-drip:before {\n  content: \"\\f576\"; }\n\n.foawe-film:before {\n  content: \"\\f008\"; }\n\n.foawe-filter:before {\n  content: \"\\f0b0\"; }\n\n.foawe-fingerprint:before {\n  content: \"\\f577\"; }\n\n.foawe-fire:before {\n  content: \"\\f06d\"; }\n\n.foawe-fire-alt:before {\n  content: \"\\f7e4\"; }\n\n.foawe-fire-extinguisher:before {\n  content: \"\\f134\"; }\n\n.foawe-firefox:before {\n  content: \"\\f269\"; }\n\n.foawe-first-aid:before {\n  content: \"\\f479\"; }\n\n.foawe-first-order:before {\n  content: \"\\f2b0\"; }\n\n.foawe-first-order-alt:before {\n  content: \"\\f50a\"; }\n\n.foawe-firstdraft:before {\n  content: \"\\f3a1\"; }\n\n.foawe-fish:before {\n  content: \"\\f578\"; }\n\n.foawe-fist-raised:before {\n  content: \"\\f6de\"; }\n\n.foawe-flag:before {\n  content: \"\\f024\"; }\n\n.foawe-flag-checkered:before {\n  content: \"\\f11e\"; }\n\n.foawe-flag-usa:before {\n  content: \"\\f74d\"; }\n\n.foawe-flask:before {\n  content: \"\\f0c3\"; }\n\n.foawe-flickr:before {\n  content: \"\\f16e\"; }\n\n.foawe-flipboard:before {\n  content: \"\\f44d\"; }\n\n.foawe-flushed:before {\n  content: \"\\f579\"; }\n\n.foawe-fly:before {\n  content: \"\\f417\"; }\n\n.foawe-folder:before {\n  content: \"\\f07b\"; }\n\n.foawe-folder-minus:before {\n  content: \"\\f65d\"; }\n\n.foawe-folder-open:before {\n  content: \"\\f07c\"; }\n\n.foawe-folder-plus:before {\n  content: \"\\f65e\"; }\n\n.foawe-font:before {\n  content: \"\\f031\"; }\n\n.foawe-font-awesome:before {\n  content: \"\\f2b4\"; }\n\n.foawe-font-awesome-alt:before {\n  content: \"\\f35c\"; }\n\n.foawe-font-awesome-flag:before {\n  content: \"\\f425\"; }\n\n.foawe-font-awesome-logo-full:before {\n  content: \"\\f4e6\"; }\n\n.foawe-fonticons:before {\n  content: \"\\f280\"; }\n\n.foawe-fonticons-fi:before {\n  content: \"\\f3a2\"; }\n\n.foawe-football-ball:before {\n  content: \"\\f44e\"; }\n\n.foawe-fort-awesome:before {\n  content: \"\\f286\"; }\n\n.foawe-fort-awesome-alt:before {\n  content: \"\\f3a3\"; }\n\n.foawe-forumbee:before {\n  content: \"\\f211\"; }\n\n.foawe-forward:before {\n  content: \"\\f04e\"; }\n\n.foawe-foursquare:before {\n  content: \"\\f180\"; }\n\n.foawe-free-code-camp:before {\n  content: \"\\f2c5\"; }\n\n.foawe-freebsd:before {\n  content: \"\\f3a4\"; }\n\n.foawe-frog:before {\n  content: \"\\f52e\"; }\n\n.foawe-frown:before {\n  content: \"\\f119\"; }\n\n.foawe-frown-open:before {\n  content: \"\\f57a\"; }\n\n.foawe-fulcrum:before {\n  content: \"\\f50b\"; }\n\n.foawe-funnel-dollar:before {\n  content: \"\\f662\"; }\n\n.foawe-futbol:before {\n  content: \"\\f1e3\"; }\n\n.foawe-galactic-republic:before {\n  content: \"\\f50c\"; }\n\n.foawe-galactic-senate:before {\n  content: \"\\f50d\"; }\n\n.foawe-gamepad:before {\n  content: \"\\f11b\"; }\n\n.foawe-gas-pump:before {\n  content: \"\\f52f\"; }\n\n.foawe-gavel:before {\n  content: \"\\f0e3\"; }\n\n.foawe-gem:before {\n  content: \"\\f3a5\"; }\n\n.foawe-genderless:before {\n  content: \"\\f22d\"; }\n\n.foawe-get-pocket:before {\n  content: \"\\f265\"; }\n\n.foawe-gg:before {\n  content: \"\\f260\"; }\n\n.foawe-gg-circle:before {\n  content: \"\\f261\"; }\n\n.foawe-ghost:before {\n  content: \"\\f6e2\"; }\n\n.foawe-gift:before {\n  content: \"\\f06b\"; }\n\n.foawe-gifts:before {\n  content: \"\\f79c\"; }\n\n.foawe-git:before {\n  content: \"\\f1d3\"; }\n\n.foawe-git-square:before {\n  content: \"\\f1d2\"; }\n\n.foawe-github:before {\n  content: \"\\f09b\"; }\n\n.foawe-github-alt:before {\n  content: \"\\f113\"; }\n\n.foawe-github-square:before {\n  content: \"\\f092\"; }\n\n.foawe-gitkraken:before {\n  content: \"\\f3a6\"; }\n\n.foawe-gitlab:before {\n  content: \"\\f296\"; }\n\n.foawe-gitter:before {\n  content: \"\\f426\"; }\n\n.foawe-glass-cheers:before {\n  content: \"\\f79f\"; }\n\n.foawe-glass-martini:before {\n  content: \"\\f000\"; }\n\n.foawe-glass-martini-alt:before {\n  content: \"\\f57b\"; }\n\n.foawe-glass-whiskey:before {\n  content: \"\\f7a0\"; }\n\n.foawe-glasses:before {\n  content: \"\\f530\"; }\n\n.foawe-glide:before {\n  content: \"\\f2a5\"; }\n\n.foawe-glide-g:before {\n  content: \"\\f2a6\"; }\n\n.foawe-globe:before {\n  content: \"\\f0ac\"; }\n\n.foawe-globe-africa:before {\n  content: \"\\f57c\"; }\n\n.foawe-globe-americas:before {\n  content: \"\\f57d\"; }\n\n.foawe-globe-asia:before {\n  content: \"\\f57e\"; }\n\n.foawe-globe-europe:before {\n  content: \"\\f7a2\"; }\n\n.foawe-gofore:before {\n  content: \"\\f3a7\"; }\n\n.foawe-golf-ball:before {\n  content: \"\\f450\"; }\n\n.foawe-goodreads:before {\n  content: \"\\f3a8\"; }\n\n.foawe-goodreads-g:before {\n  content: \"\\f3a9\"; }\n\n.foawe-google:before {\n  content: \"\\f1a0\"; }\n\n.foawe-google-drive:before {\n  content: \"\\f3aa\"; }\n\n.foawe-google-play:before {\n  content: \"\\f3ab\"; }\n\n.foawe-google-plus:before {\n  content: \"\\f2b3\"; }\n\n.foawe-google-plus-g:before {\n  content: \"\\f0d5\"; }\n\n.foawe-google-plus-square:before {\n  content: \"\\f0d4\"; }\n\n.foawe-google-wallet:before {\n  content: \"\\f1ee\"; }\n\n.foawe-gopuram:before {\n  content: \"\\f664\"; }\n\n.foawe-graduation-cap:before {\n  content: \"\\f19d\"; }\n\n.foawe-gratipay:before {\n  content: \"\\f184\"; }\n\n.foawe-grav:before {\n  content: \"\\f2d6\"; }\n\n.foawe-greater-than:before {\n  content: \"\\f531\"; }\n\n.foawe-greater-than-equal:before {\n  content: \"\\f532\"; }\n\n.foawe-grimace:before {\n  content: \"\\f57f\"; }\n\n.foawe-grin:before {\n  content: \"\\f580\"; }\n\n.foawe-grin-alt:before {\n  content: \"\\f581\"; }\n\n.foawe-grin-beam:before {\n  content: \"\\f582\"; }\n\n.foawe-grin-beam-sweat:before {\n  content: \"\\f583\"; }\n\n.foawe-grin-hearts:before {\n  content: \"\\f584\"; }\n\n.foawe-grin-squint:before {\n  content: \"\\f585\"; }\n\n.foawe-grin-squint-tears:before {\n  content: \"\\f586\"; }\n\n.foawe-grin-stars:before {\n  content: \"\\f587\"; }\n\n.foawe-grin-tears:before {\n  content: \"\\f588\"; }\n\n.foawe-grin-tongue:before {\n  content: \"\\f589\"; }\n\n.foawe-grin-tongue-squint:before {\n  content: \"\\f58a\"; }\n\n.foawe-grin-tongue-wink:before {\n  content: \"\\f58b\"; }\n\n.foawe-grin-wink:before {\n  content: \"\\f58c\"; }\n\n.foawe-grip-horizontal:before {\n  content: \"\\f58d\"; }\n\n.foawe-grip-lines:before {\n  content: \"\\f7a4\"; }\n\n.foawe-grip-lines-vertical:before {\n  content: \"\\f7a5\"; }\n\n.foawe-grip-vertical:before {\n  content: \"\\f58e\"; }\n\n.foawe-gripfire:before {\n  content: \"\\f3ac\"; }\n\n.foawe-grunt:before {\n  content: \"\\f3ad\"; }\n\n.foawe-guitar:before {\n  content: \"\\f7a6\"; }\n\n.foawe-gulp:before {\n  content: \"\\f3ae\"; }\n\n.foawe-h-square:before {\n  content: \"\\f0fd\"; }\n\n.foawe-hacker-news:before {\n  content: \"\\f1d4\"; }\n\n.foawe-hacker-news-square:before {\n  content: \"\\f3af\"; }\n\n.foawe-hackerrank:before {\n  content: \"\\f5f7\"; }\n\n.foawe-hammer:before {\n  content: \"\\f6e3\"; }\n\n.foawe-hamsa:before {\n  content: \"\\f665\"; }\n\n.foawe-hand-holding:before {\n  content: \"\\f4bd\"; }\n\n.foawe-hand-holding-heart:before {\n  content: \"\\f4be\"; }\n\n.foawe-hand-holding-usd:before {\n  content: \"\\f4c0\"; }\n\n.foawe-hand-lizard:before {\n  content: \"\\f258\"; }\n\n.foawe-hand-paper:before {\n  content: \"\\f256\"; }\n\n.foawe-hand-peace:before {\n  content: \"\\f25b\"; }\n\n.foawe-hand-point-down:before {\n  content: \"\\f0a7\"; }\n\n.foawe-hand-point-left:before {\n  content: \"\\f0a5\"; }\n\n.foawe-hand-point-right:before {\n  content: \"\\f0a4\"; }\n\n.foawe-hand-point-up:before {\n  content: \"\\f0a6\"; }\n\n.foawe-hand-pointer:before {\n  content: \"\\f25a\"; }\n\n.foawe-hand-rock:before {\n  content: \"\\f255\"; }\n\n.foawe-hand-scissors:before {\n  content: \"\\f257\"; }\n\n.foawe-hand-spock:before {\n  content: \"\\f259\"; }\n\n.foawe-hands:before {\n  content: \"\\f4c2\"; }\n\n.foawe-hands-helping:before {\n  content: \"\\f4c4\"; }\n\n.foawe-handshake:before {\n  content: \"\\f2b5\"; }\n\n.foawe-hanukiah:before {\n  content: \"\\f6e6\"; }\n\n.foawe-hashtag:before {\n  content: \"\\f292\"; }\n\n.foawe-hat-wizard:before {\n  content: \"\\f6e8\"; }\n\n.foawe-haykal:before {\n  content: \"\\f666\"; }\n\n.foawe-hdd:before {\n  content: \"\\f0a0\"; }\n\n.foawe-heading:before {\n  content: \"\\f1dc\"; }\n\n.foawe-headphones:before {\n  content: \"\\f025\"; }\n\n.foawe-headphones-alt:before {\n  content: \"\\f58f\"; }\n\n.foawe-headset:before {\n  content: \"\\f590\"; }\n\n.foawe-heart:before {\n  content: \"\\f004\"; }\n\n.foawe-heart-broken:before {\n  content: \"\\f7a9\"; }\n\n.foawe-heartbeat:before {\n  content: \"\\f21e\"; }\n\n.foawe-helicopter:before {\n  content: \"\\f533\"; }\n\n.foawe-highlighter:before {\n  content: \"\\f591\"; }\n\n.foawe-hiking:before {\n  content: \"\\f6ec\"; }\n\n.foawe-hippo:before {\n  content: \"\\f6ed\"; }\n\n.foawe-hips:before {\n  content: \"\\f452\"; }\n\n.foawe-hire-a-helper:before {\n  content: \"\\f3b0\"; }\n\n.foawe-history:before {\n  content: \"\\f1da\"; }\n\n.foawe-hockey-puck:before {\n  content: \"\\f453\"; }\n\n.foawe-holly-berry:before {\n  content: \"\\f7aa\"; }\n\n.foawe-home:before {\n  content: \"\\f015\"; }\n\n.foawe-hooli:before {\n  content: \"\\f427\"; }\n\n.foawe-hornbill:before {\n  content: \"\\f592\"; }\n\n.foawe-horse:before {\n  content: \"\\f6f0\"; }\n\n.foawe-horse-head:before {\n  content: \"\\f7ab\"; }\n\n.foawe-hospital:before {\n  content: \"\\f0f8\"; }\n\n.foawe-hospital-alt:before {\n  content: \"\\f47d\"; }\n\n.foawe-hospital-symbol:before {\n  content: \"\\f47e\"; }\n\n.foawe-hot-tub:before {\n  content: \"\\f593\"; }\n\n.foawe-hotel:before {\n  content: \"\\f594\"; }\n\n.foawe-hotjar:before {\n  content: \"\\f3b1\"; }\n\n.foawe-hourglass:before {\n  content: \"\\f254\"; }\n\n.foawe-hourglass-end:before {\n  content: \"\\f253\"; }\n\n.foawe-hourglass-half:before {\n  content: \"\\f252\"; }\n\n.foawe-hourglass-start:before {\n  content: \"\\f251\"; }\n\n.foawe-house-damage:before {\n  content: \"\\f6f1\"; }\n\n.foawe-houzz:before {\n  content: \"\\f27c\"; }\n\n.foawe-hryvnia:before {\n  content: \"\\f6f2\"; }\n\n.foawe-html5:before {\n  content: \"\\f13b\"; }\n\n.foawe-hubspot:before {\n  content: \"\\f3b2\"; }\n\n.foawe-i-cursor:before {\n  content: \"\\f246\"; }\n\n.foawe-icicles:before {\n  content: \"\\f7ad\"; }\n\n.foawe-id-badge:before {\n  content: \"\\f2c1\"; }\n\n.foawe-id-card:before {\n  content: \"\\f2c2\"; }\n\n.foawe-id-card-alt:before {\n  content: \"\\f47f\"; }\n\n.foawe-igloo:before {\n  content: \"\\f7ae\"; }\n\n.foawe-image:before {\n  content: \"\\f03e\"; }\n\n.foawe-images:before {\n  content: \"\\f302\"; }\n\n.foawe-imdb:before {\n  content: \"\\f2d8\"; }\n\n.foawe-inbox:before {\n  content: \"\\f01c\"; }\n\n.foawe-indent:before {\n  content: \"\\f03c\"; }\n\n.foawe-industry:before {\n  content: \"\\f275\"; }\n\n.foawe-infinity:before {\n  content: \"\\f534\"; }\n\n.foawe-info:before {\n  content: \"\\f129\"; }\n\n.foawe-info-circle:before {\n  content: \"\\f05a\"; }\n\n.foawe-instagram:before {\n  content: \"\\f16d\"; }\n\n.foawe-intercom:before {\n  content: \"\\f7af\"; }\n\n.foawe-internet-explorer:before {\n  content: \"\\f26b\"; }\n\n.foawe-invision:before {\n  content: \"\\f7b0\"; }\n\n.foawe-ioxhost:before {\n  content: \"\\f208\"; }\n\n.foawe-italic:before {\n  content: \"\\f033\"; }\n\n.foawe-itunes:before {\n  content: \"\\f3b4\"; }\n\n.foawe-itunes-note:before {\n  content: \"\\f3b5\"; }\n\n.foawe-java:before {\n  content: \"\\f4e4\"; }\n\n.foawe-jedi:before {\n  content: \"\\f669\"; }\n\n.foawe-jedi-order:before {\n  content: \"\\f50e\"; }\n\n.foawe-jenkins:before {\n  content: \"\\f3b6\"; }\n\n.foawe-jira:before {\n  content: \"\\f7b1\"; }\n\n.foawe-joget:before {\n  content: \"\\f3b7\"; }\n\n.foawe-joint:before {\n  content: \"\\f595\"; }\n\n.foawe-joomla:before {\n  content: \"\\f1aa\"; }\n\n.foawe-journal-whills:before {\n  content: \"\\f66a\"; }\n\n.foawe-js:before {\n  content: \"\\f3b8\"; }\n\n.foawe-js-square:before {\n  content: \"\\f3b9\"; }\n\n.foawe-jsfiddle:before {\n  content: \"\\f1cc\"; }\n\n.foawe-kaaba:before {\n  content: \"\\f66b\"; }\n\n.foawe-kaggle:before {\n  content: \"\\f5fa\"; }\n\n.foawe-key:before {\n  content: \"\\f084\"; }\n\n.foawe-keybase:before {\n  content: \"\\f4f5\"; }\n\n.foawe-keyboard:before {\n  content: \"\\f11c\"; }\n\n.foawe-keycdn:before {\n  content: \"\\f3ba\"; }\n\n.foawe-khanda:before {\n  content: \"\\f66d\"; }\n\n.foawe-kickstarter:before {\n  content: \"\\f3bb\"; }\n\n.foawe-kickstarter-k:before {\n  content: \"\\f3bc\"; }\n\n.foawe-kiss:before {\n  content: \"\\f596\"; }\n\n.foawe-kiss-beam:before {\n  content: \"\\f597\"; }\n\n.foawe-kiss-wink-heart:before {\n  content: \"\\f598\"; }\n\n.foawe-kiwi-bird:before {\n  content: \"\\f535\"; }\n\n.foawe-korvue:before {\n  content: \"\\f42f\"; }\n\n.foawe-landmark:before {\n  content: \"\\f66f\"; }\n\n.foawe-language:before {\n  content: \"\\f1ab\"; }\n\n.foawe-laptop:before {\n  content: \"\\f109\"; }\n\n.foawe-laptop-code:before {\n  content: \"\\f5fc\"; }\n\n.foawe-laravel:before {\n  content: \"\\f3bd\"; }\n\n.foawe-lastfm:before {\n  content: \"\\f202\"; }\n\n.foawe-lastfm-square:before {\n  content: \"\\f203\"; }\n\n.foawe-laugh:before {\n  content: \"\\f599\"; }\n\n.foawe-laugh-beam:before {\n  content: \"\\f59a\"; }\n\n.foawe-laugh-squint:before {\n  content: \"\\f59b\"; }\n\n.foawe-laugh-wink:before {\n  content: \"\\f59c\"; }\n\n.foawe-layer-group:before {\n  content: \"\\f5fd\"; }\n\n.foawe-leaf:before {\n  content: \"\\f06c\"; }\n\n.foawe-leanpub:before {\n  content: \"\\f212\"; }\n\n.foawe-lemon:before {\n  content: \"\\f094\"; }\n\n.foawe-less:before {\n  content: \"\\f41d\"; }\n\n.foawe-less-than:before {\n  content: \"\\f536\"; }\n\n.foawe-less-than-equal:before {\n  content: \"\\f537\"; }\n\n.foawe-level-down-alt:before {\n  content: \"\\f3be\"; }\n\n.foawe-level-up-alt:before {\n  content: \"\\f3bf\"; }\n\n.foawe-life-ring:before {\n  content: \"\\f1cd\"; }\n\n.foawe-lightbulb:before {\n  content: \"\\f0eb\"; }\n\n.foawe-line:before {\n  content: \"\\f3c0\"; }\n\n.foawe-link:before {\n  content: \"\\f0c1\"; }\n\n.foawe-linkedin:before {\n  content: \"\\f08c\"; }\n\n.foawe-linkedin-in:before {\n  content: \"\\f0e1\"; }\n\n.foawe-linode:before {\n  content: \"\\f2b8\"; }\n\n.foawe-linux:before {\n  content: \"\\f17c\"; }\n\n.foawe-lira-sign:before {\n  content: \"\\f195\"; }\n\n.foawe-list:before {\n  content: \"\\f03a\"; }\n\n.foawe-list-alt:before {\n  content: \"\\f022\"; }\n\n.foawe-list-ol:before {\n  content: \"\\f0cb\"; }\n\n.foawe-list-ul:before {\n  content: \"\\f0ca\"; }\n\n.foawe-location-arrow:before {\n  content: \"\\f124\"; }\n\n.foawe-lock:before {\n  content: \"\\f023\"; }\n\n.foawe-lock-open:before {\n  content: \"\\f3c1\"; }\n\n.foawe-long-arrow-alt-down:before {\n  content: \"\\f309\"; }\n\n.foawe-long-arrow-alt-left:before {\n  content: \"\\f30a\"; }\n\n.foawe-long-arrow-alt-right:before {\n  content: \"\\f30b\"; }\n\n.foawe-long-arrow-alt-up:before {\n  content: \"\\f30c\"; }\n\n.foawe-low-vision:before {\n  content: \"\\f2a8\"; }\n\n.foawe-luggage-cart:before {\n  content: \"\\f59d\"; }\n\n.foawe-lyft:before {\n  content: \"\\f3c3\"; }\n\n.foawe-magento:before {\n  content: \"\\f3c4\"; }\n\n.foawe-magic:before {\n  content: \"\\f0d0\"; }\n\n.foawe-magnet:before {\n  content: \"\\f076\"; }\n\n.foawe-mail-bulk:before {\n  content: \"\\f674\"; }\n\n.foawe-mailchimp:before {\n  content: \"\\f59e\"; }\n\n.foawe-male:before {\n  content: \"\\f183\"; }\n\n.foawe-mandalorian:before {\n  content: \"\\f50f\"; }\n\n.foawe-map:before {\n  content: \"\\f279\"; }\n\n.foawe-map-marked:before {\n  content: \"\\f59f\"; }\n\n.foawe-map-marked-alt:before {\n  content: \"\\f5a0\"; }\n\n.foawe-map-marker:before {\n  content: \"\\f041\"; }\n\n.foawe-map-marker-alt:before {\n  content: \"\\f3c5\"; }\n\n.foawe-map-pin:before {\n  content: \"\\f276\"; }\n\n.foawe-map-signs:before {\n  content: \"\\f277\"; }\n\n.foawe-markdown:before {\n  content: \"\\f60f\"; }\n\n.foawe-marker:before {\n  content: \"\\f5a1\"; }\n\n.foawe-mars:before {\n  content: \"\\f222\"; }\n\n.foawe-mars-double:before {\n  content: \"\\f227\"; }\n\n.foawe-mars-stroke:before {\n  content: \"\\f229\"; }\n\n.foawe-mars-stroke-h:before {\n  content: \"\\f22b\"; }\n\n.foawe-mars-stroke-v:before {\n  content: \"\\f22a\"; }\n\n.foawe-mask:before {\n  content: \"\\f6fa\"; }\n\n.foawe-mastodon:before {\n  content: \"\\f4f6\"; }\n\n.foawe-maxcdn:before {\n  content: \"\\f136\"; }\n\n.foawe-medal:before {\n  content: \"\\f5a2\"; }\n\n.foawe-medapps:before {\n  content: \"\\f3c6\"; }\n\n.foawe-medium:before {\n  content: \"\\f23a\"; }\n\n.foawe-medium-m:before {\n  content: \"\\f3c7\"; }\n\n.foawe-medkit:before {\n  content: \"\\f0fa\"; }\n\n.foawe-medrt:before {\n  content: \"\\f3c8\"; }\n\n.foawe-meetup:before {\n  content: \"\\f2e0\"; }\n\n.foawe-megaport:before {\n  content: \"\\f5a3\"; }\n\n.foawe-meh:before {\n  content: \"\\f11a\"; }\n\n.foawe-meh-blank:before {\n  content: \"\\f5a4\"; }\n\n.foawe-meh-rolling-eyes:before {\n  content: \"\\f5a5\"; }\n\n.foawe-memory:before {\n  content: \"\\f538\"; }\n\n.foawe-mendeley:before {\n  content: \"\\f7b3\"; }\n\n.foawe-menorah:before {\n  content: \"\\f676\"; }\n\n.foawe-mercury:before {\n  content: \"\\f223\"; }\n\n.foawe-meteor:before {\n  content: \"\\f753\"; }\n\n.foawe-microchip:before {\n  content: \"\\f2db\"; }\n\n.foawe-microphone:before {\n  content: \"\\f130\"; }\n\n.foawe-microphone-alt:before {\n  content: \"\\f3c9\"; }\n\n.foawe-microphone-alt-slash:before {\n  content: \"\\f539\"; }\n\n.foawe-microphone-slash:before {\n  content: \"\\f131\"; }\n\n.foawe-microscope:before {\n  content: \"\\f610\"; }\n\n.foawe-microsoft:before {\n  content: \"\\f3ca\"; }\n\n.foawe-minus:before {\n  content: \"\\f068\"; }\n\n.foawe-minus-circle:before {\n  content: \"\\f056\"; }\n\n.foawe-minus-square:before {\n  content: \"\\f146\"; }\n\n.foawe-mitten:before {\n  content: \"\\f7b5\"; }\n\n.foawe-mix:before {\n  content: \"\\f3cb\"; }\n\n.foawe-mixcloud:before {\n  content: \"\\f289\"; }\n\n.foawe-mizuni:before {\n  content: \"\\f3cc\"; }\n\n.foawe-mobile:before {\n  content: \"\\f10b\"; }\n\n.foawe-mobile-alt:before {\n  content: \"\\f3cd\"; }\n\n.foawe-modx:before {\n  content: \"\\f285\"; }\n\n.foawe-monero:before {\n  content: \"\\f3d0\"; }\n\n.foawe-money-bill:before {\n  content: \"\\f0d6\"; }\n\n.foawe-money-bill-alt:before {\n  content: \"\\f3d1\"; }\n\n.foawe-money-bill-wave:before {\n  content: \"\\f53a\"; }\n\n.foawe-money-bill-wave-alt:before {\n  content: \"\\f53b\"; }\n\n.foawe-money-check:before {\n  content: \"\\f53c\"; }\n\n.foawe-money-check-alt:before {\n  content: \"\\f53d\"; }\n\n.foawe-monument:before {\n  content: \"\\f5a6\"; }\n\n.foawe-moon:before {\n  content: \"\\f186\"; }\n\n.foawe-mortar-pestle:before {\n  content: \"\\f5a7\"; }\n\n.foawe-mosque:before {\n  content: \"\\f678\"; }\n\n.foawe-motorcycle:before {\n  content: \"\\f21c\"; }\n\n.foawe-mountain:before {\n  content: \"\\f6fc\"; }\n\n.foawe-mouse-pointer:before {\n  content: \"\\f245\"; }\n\n.foawe-mug-hot:before {\n  content: \"\\f7b6\"; }\n\n.foawe-music:before {\n  content: \"\\f001\"; }\n\n.foawe-napster:before {\n  content: \"\\f3d2\"; }\n\n.foawe-neos:before {\n  content: \"\\f612\"; }\n\n.foawe-network-wired:before {\n  content: \"\\f6ff\"; }\n\n.foawe-neuter:before {\n  content: \"\\f22c\"; }\n\n.foawe-newspaper:before {\n  content: \"\\f1ea\"; }\n\n.foawe-nimblr:before {\n  content: \"\\f5a8\"; }\n\n.foawe-nintendo-switch:before {\n  content: \"\\f418\"; }\n\n.foawe-node:before {\n  content: \"\\f419\"; }\n\n.foawe-node-js:before {\n  content: \"\\f3d3\"; }\n\n.foawe-not-equal:before {\n  content: \"\\f53e\"; }\n\n.foawe-notes-medical:before {\n  content: \"\\f481\"; }\n\n.foawe-npm:before {\n  content: \"\\f3d4\"; }\n\n.foawe-ns8:before {\n  content: \"\\f3d5\"; }\n\n.foawe-nutritionix:before {\n  content: \"\\f3d6\"; }\n\n.foawe-object-group:before {\n  content: \"\\f247\"; }\n\n.foawe-object-ungroup:before {\n  content: \"\\f248\"; }\n\n.foawe-odnoklassniki:before {\n  content: \"\\f263\"; }\n\n.foawe-odnoklassniki-square:before {\n  content: \"\\f264\"; }\n\n.foawe-oil-can:before {\n  content: \"\\f613\"; }\n\n.foawe-old-republic:before {\n  content: \"\\f510\"; }\n\n.foawe-om:before {\n  content: \"\\f679\"; }\n\n.foawe-opencart:before {\n  content: \"\\f23d\"; }\n\n.foawe-openid:before {\n  content: \"\\f19b\"; }\n\n.foawe-opera:before {\n  content: \"\\f26a\"; }\n\n.foawe-optin-monster:before {\n  content: \"\\f23c\"; }\n\n.foawe-osi:before {\n  content: \"\\f41a\"; }\n\n.foawe-otter:before {\n  content: \"\\f700\"; }\n\n.foawe-outdent:before {\n  content: \"\\f03b\"; }\n\n.foawe-page4:before {\n  content: \"\\f3d7\"; }\n\n.foawe-pagelines:before {\n  content: \"\\f18c\"; }\n\n.foawe-paint-brush:before {\n  content: \"\\f1fc\"; }\n\n.foawe-paint-roller:before {\n  content: \"\\f5aa\"; }\n\n.foawe-palette:before {\n  content: \"\\f53f\"; }\n\n.foawe-palfed:before {\n  content: \"\\f3d8\"; }\n\n.foawe-pallet:before {\n  content: \"\\f482\"; }\n\n.foawe-paper-plane:before {\n  content: \"\\f1d8\"; }\n\n.foawe-paperclip:before {\n  content: \"\\f0c6\"; }\n\n.foawe-parachute-box:before {\n  content: \"\\f4cd\"; }\n\n.foawe-paragraph:before {\n  content: \"\\f1dd\"; }\n\n.foawe-parking:before {\n  content: \"\\f540\"; }\n\n.foawe-passport:before {\n  content: \"\\f5ab\"; }\n\n.foawe-pastafarianism:before {\n  content: \"\\f67b\"; }\n\n.foawe-paste:before {\n  content: \"\\f0ea\"; }\n\n.foawe-patreon:before {\n  content: \"\\f3d9\"; }\n\n.foawe-pause:before {\n  content: \"\\f04c\"; }\n\n.foawe-pause-circle:before {\n  content: \"\\f28b\"; }\n\n.foawe-paw:before {\n  content: \"\\f1b0\"; }\n\n.foawe-paypal:before {\n  content: \"\\f1ed\"; }\n\n.foawe-peace:before {\n  content: \"\\f67c\"; }\n\n.foawe-pen:before {\n  content: \"\\f304\"; }\n\n.foawe-pen-alt:before {\n  content: \"\\f305\"; }\n\n.foawe-pen-fancy:before {\n  content: \"\\f5ac\"; }\n\n.foawe-pen-nib:before {\n  content: \"\\f5ad\"; }\n\n.foawe-pen-square:before {\n  content: \"\\f14b\"; }\n\n.foawe-pencil-alt:before {\n  content: \"\\f303\"; }\n\n.foawe-pencil-ruler:before {\n  content: \"\\f5ae\"; }\n\n.foawe-penny-arcade:before {\n  content: \"\\f704\"; }\n\n.foawe-people-carry:before {\n  content: \"\\f4ce\"; }\n\n.foawe-percent:before {\n  content: \"\\f295\"; }\n\n.foawe-percentage:before {\n  content: \"\\f541\"; }\n\n.foawe-periscope:before {\n  content: \"\\f3da\"; }\n\n.foawe-person-booth:before {\n  content: \"\\f756\"; }\n\n.foawe-phabricator:before {\n  content: \"\\f3db\"; }\n\n.foawe-phoenix-framework:before {\n  content: \"\\f3dc\"; }\n\n.foawe-phoenix-squadron:before {\n  content: \"\\f511\"; }\n\n.foawe-phone:before {\n  content: \"\\f095\"; }\n\n.foawe-phone-slash:before {\n  content: \"\\f3dd\"; }\n\n.foawe-phone-square:before {\n  content: \"\\f098\"; }\n\n.foawe-phone-volume:before {\n  content: \"\\f2a0\"; }\n\n.foawe-php:before {\n  content: \"\\f457\"; }\n\n.foawe-pied-piper:before {\n  content: \"\\f2ae\"; }\n\n.foawe-pied-piper-alt:before {\n  content: \"\\f1a8\"; }\n\n.foawe-pied-piper-hat:before {\n  content: \"\\f4e5\"; }\n\n.foawe-pied-piper-pp:before {\n  content: \"\\f1a7\"; }\n\n.foawe-piggy-bank:before {\n  content: \"\\f4d3\"; }\n\n.foawe-pills:before {\n  content: \"\\f484\"; }\n\n.foawe-pinterest:before {\n  content: \"\\f0d2\"; }\n\n.foawe-pinterest-p:before {\n  content: \"\\f231\"; }\n\n.foawe-pinterest-square:before {\n  content: \"\\f0d3\"; }\n\n.foawe-place-of-worship:before {\n  content: \"\\f67f\"; }\n\n.foawe-plane:before {\n  content: \"\\f072\"; }\n\n.foawe-plane-arrival:before {\n  content: \"\\f5af\"; }\n\n.foawe-plane-departure:before {\n  content: \"\\f5b0\"; }\n\n.foawe-play:before {\n  content: \"\\f04b\"; }\n\n.foawe-play-circle:before {\n  content: \"\\f144\"; }\n\n.foawe-playstation:before {\n  content: \"\\f3df\"; }\n\n.foawe-plug:before {\n  content: \"\\f1e6\"; }\n\n.foawe-plus:before {\n  content: \"\\f067\"; }\n\n.foawe-plus-circle:before {\n  content: \"\\f055\"; }\n\n.foawe-plus-square:before {\n  content: \"\\f0fe\"; }\n\n.foawe-podcast:before {\n  content: \"\\f2ce\"; }\n\n.foawe-poll:before {\n  content: \"\\f681\"; }\n\n.foawe-poll-h:before {\n  content: \"\\f682\"; }\n\n.foawe-poo:before {\n  content: \"\\f2fe\"; }\n\n.foawe-poo-storm:before {\n  content: \"\\f75a\"; }\n\n.foawe-poop:before {\n  content: \"\\f619\"; }\n\n.foawe-portrait:before {\n  content: \"\\f3e0\"; }\n\n.foawe-pound-sign:before {\n  content: \"\\f154\"; }\n\n.foawe-power-off:before {\n  content: \"\\f011\"; }\n\n.foawe-pray:before {\n  content: \"\\f683\"; }\n\n.foawe-praying-hands:before {\n  content: \"\\f684\"; }\n\n.foawe-prescription:before {\n  content: \"\\f5b1\"; }\n\n.foawe-prescription-bottle:before {\n  content: \"\\f485\"; }\n\n.foawe-prescription-bottle-alt:before {\n  content: \"\\f486\"; }\n\n.foawe-print:before {\n  content: \"\\f02f\"; }\n\n.foawe-procedures:before {\n  content: \"\\f487\"; }\n\n.foawe-product-hunt:before {\n  content: \"\\f288\"; }\n\n.foawe-project-diagram:before {\n  content: \"\\f542\"; }\n\n.foawe-pushed:before {\n  content: \"\\f3e1\"; }\n\n.foawe-puzzle-piece:before {\n  content: \"\\f12e\"; }\n\n.foawe-python:before {\n  content: \"\\f3e2\"; }\n\n.foawe-qq:before {\n  content: \"\\f1d6\"; }\n\n.foawe-qrcode:before {\n  content: \"\\f029\"; }\n\n.foawe-question:before {\n  content: \"\\f128\"; }\n\n.foawe-question-circle:before {\n  content: \"\\f059\"; }\n\n.foawe-quidditch:before {\n  content: \"\\f458\"; }\n\n.foawe-quinscape:before {\n  content: \"\\f459\"; }\n\n.foawe-quora:before {\n  content: \"\\f2c4\"; }\n\n.foawe-quote-left:before {\n  content: \"\\f10d\"; }\n\n.foawe-quote-right:before {\n  content: \"\\f10e\"; }\n\n.foawe-quran:before {\n  content: \"\\f687\"; }\n\n.foawe-r-project:before {\n  content: \"\\f4f7\"; }\n\n.foawe-radiation:before {\n  content: \"\\f7b9\"; }\n\n.foawe-radiation-alt:before {\n  content: \"\\f7ba\"; }\n\n.foawe-rainbow:before {\n  content: \"\\f75b\"; }\n\n.foawe-random:before {\n  content: \"\\f074\"; }\n\n.foawe-raspberry-pi:before {\n  content: \"\\f7bb\"; }\n\n.foawe-ravelry:before {\n  content: \"\\f2d9\"; }\n\n.foawe-react:before {\n  content: \"\\f41b\"; }\n\n.foawe-reacteurope:before {\n  content: \"\\f75d\"; }\n\n.foawe-readme:before {\n  content: \"\\f4d5\"; }\n\n.foawe-rebel:before {\n  content: \"\\f1d0\"; }\n\n.foawe-receipt:before {\n  content: \"\\f543\"; }\n\n.foawe-recycle:before {\n  content: \"\\f1b8\"; }\n\n.foawe-red-river:before {\n  content: \"\\f3e3\"; }\n\n.foawe-reddit:before {\n  content: \"\\f1a1\"; }\n\n.foawe-reddit-alien:before {\n  content: \"\\f281\"; }\n\n.foawe-reddit-square:before {\n  content: \"\\f1a2\"; }\n\n.foawe-redhat:before {\n  content: \"\\f7bc\"; }\n\n.foawe-redo:before {\n  content: \"\\f01e\"; }\n\n.foawe-redo-alt:before {\n  content: \"\\f2f9\"; }\n\n.foawe-registered:before {\n  content: \"\\f25d\"; }\n\n.foawe-renren:before {\n  content: \"\\f18b\"; }\n\n.foawe-reply:before {\n  content: \"\\f3e5\"; }\n\n.foawe-reply-all:before {\n  content: \"\\f122\"; }\n\n.foawe-replyd:before {\n  content: \"\\f3e6\"; }\n\n.foawe-republican:before {\n  content: \"\\f75e\"; }\n\n.foawe-researchgate:before {\n  content: \"\\f4f8\"; }\n\n.foawe-resolving:before {\n  content: \"\\f3e7\"; }\n\n.foawe-restroom:before {\n  content: \"\\f7bd\"; }\n\n.foawe-retweet:before {\n  content: \"\\f079\"; }\n\n.foawe-rev:before {\n  content: \"\\f5b2\"; }\n\n.foawe-ribbon:before {\n  content: \"\\f4d6\"; }\n\n.foawe-ring:before {\n  content: \"\\f70b\"; }\n\n.foawe-road:before {\n  content: \"\\f018\"; }\n\n.foawe-robot:before {\n  content: \"\\f544\"; }\n\n.foawe-rocket:before {\n  content: \"\\f135\"; }\n\n.foawe-rocketchat:before {\n  content: \"\\f3e8\"; }\n\n.foawe-rockrms:before {\n  content: \"\\f3e9\"; }\n\n.foawe-route:before {\n  content: \"\\f4d7\"; }\n\n.foawe-rss:before {\n  content: \"\\f09e\"; }\n\n.foawe-rss-square:before {\n  content: \"\\f143\"; }\n\n.foawe-ruble-sign:before {\n  content: \"\\f158\"; }\n\n.foawe-ruler:before {\n  content: \"\\f545\"; }\n\n.foawe-ruler-combined:before {\n  content: \"\\f546\"; }\n\n.foawe-ruler-horizontal:before {\n  content: \"\\f547\"; }\n\n.foawe-ruler-vertical:before {\n  content: \"\\f548\"; }\n\n.foawe-running:before {\n  content: \"\\f70c\"; }\n\n.foawe-rupee-sign:before {\n  content: \"\\f156\"; }\n\n.foawe-sad-cry:before {\n  content: \"\\f5b3\"; }\n\n.foawe-sad-tear:before {\n  content: \"\\f5b4\"; }\n\n.foawe-safari:before {\n  content: \"\\f267\"; }\n\n.foawe-sass:before {\n  content: \"\\f41e\"; }\n\n.foawe-satellite:before {\n  content: \"\\f7bf\"; }\n\n.foawe-satellite-dish:before {\n  content: \"\\f7c0\"; }\n\n.foawe-save:before {\n  content: \"\\f0c7\"; }\n\n.foawe-schlix:before {\n  content: \"\\f3ea\"; }\n\n.foawe-school:before {\n  content: \"\\f549\"; }\n\n.foawe-screwdriver:before {\n  content: \"\\f54a\"; }\n\n.foawe-scribd:before {\n  content: \"\\f28a\"; }\n\n.foawe-scroll:before {\n  content: \"\\f70e\"; }\n\n.foawe-sd-card:before {\n  content: \"\\f7c2\"; }\n\n.foawe-search:before {\n  content: \"\\f002\"; }\n\n.foawe-search-dollar:before {\n  content: \"\\f688\"; }\n\n.foawe-search-location:before {\n  content: \"\\f689\"; }\n\n.foawe-search-minus:before {\n  content: \"\\f010\"; }\n\n.foawe-search-plus:before {\n  content: \"\\f00e\"; }\n\n.foawe-searchengin:before {\n  content: \"\\f3eb\"; }\n\n.foawe-seedling:before {\n  content: \"\\f4d8\"; }\n\n.foawe-sellcast:before {\n  content: \"\\f2da\"; }\n\n.foawe-sellsy:before {\n  content: \"\\f213\"; }\n\n.foawe-server:before {\n  content: \"\\f233\"; }\n\n.foawe-servicestack:before {\n  content: \"\\f3ec\"; }\n\n.foawe-shapes:before {\n  content: \"\\f61f\"; }\n\n.foawe-share:before {\n  content: \"\\f064\"; }\n\n.foawe-share-alt:before {\n  content: \"\\f1e0\"; }\n\n.foawe-share-alt-square:before {\n  content: \"\\f1e1\"; }\n\n.foawe-share-square:before {\n  content: \"\\f14d\"; }\n\n.foawe-shekel-sign:before {\n  content: \"\\f20b\"; }\n\n.foawe-shield-alt:before {\n  content: \"\\f3ed\"; }\n\n.foawe-ship:before {\n  content: \"\\f21a\"; }\n\n.foawe-shipping-fast:before {\n  content: \"\\f48b\"; }\n\n.foawe-shirtsinbulk:before {\n  content: \"\\f214\"; }\n\n.foawe-shoe-prints:before {\n  content: \"\\f54b\"; }\n\n.foawe-shopping-bag:before {\n  content: \"\\f290\"; }\n\n.foawe-shopping-basket:before {\n  content: \"\\f291\"; }\n\n.foawe-shopping-cart:before {\n  content: \"\\f07a\"; }\n\n.foawe-shopware:before {\n  content: \"\\f5b5\"; }\n\n.foawe-shower:before {\n  content: \"\\f2cc\"; }\n\n.foawe-shuttle-van:before {\n  content: \"\\f5b6\"; }\n\n.foawe-sign:before {\n  content: \"\\f4d9\"; }\n\n.foawe-sign-in-alt:before {\n  content: \"\\f2f6\"; }\n\n.foawe-sign-language:before {\n  content: \"\\f2a7\"; }\n\n.foawe-sign-out-alt:before {\n  content: \"\\f2f5\"; }\n\n.foawe-signal:before {\n  content: \"\\f012\"; }\n\n.foawe-signature:before {\n  content: \"\\f5b7\"; }\n\n.foawe-sim-card:before {\n  content: \"\\f7c4\"; }\n\n.foawe-simplybuilt:before {\n  content: \"\\f215\"; }\n\n.foawe-sistrix:before {\n  content: \"\\f3ee\"; }\n\n.foawe-sitemap:before {\n  content: \"\\f0e8\"; }\n\n.foawe-sith:before {\n  content: \"\\f512\"; }\n\n.foawe-skating:before {\n  content: \"\\f7c5\"; }\n\n.foawe-sketch:before {\n  content: \"\\f7c6\"; }\n\n.foawe-skiing:before {\n  content: \"\\f7c9\"; }\n\n.foawe-skiing-nordic:before {\n  content: \"\\f7ca\"; }\n\n.foawe-skull:before {\n  content: \"\\f54c\"; }\n\n.foawe-skull-crossbones:before {\n  content: \"\\f714\"; }\n\n.foawe-skyatlas:before {\n  content: \"\\f216\"; }\n\n.foawe-skype:before {\n  content: \"\\f17e\"; }\n\n.foawe-slack:before {\n  content: \"\\f198\"; }\n\n.foawe-slack-hash:before {\n  content: \"\\f3ef\"; }\n\n.foawe-slash:before {\n  content: \"\\f715\"; }\n\n.foawe-sleigh:before {\n  content: \"\\f7cc\"; }\n\n.foawe-sliders-h:before {\n  content: \"\\f1de\"; }\n\n.foawe-slideshare:before {\n  content: \"\\f1e7\"; }\n\n.foawe-smile:before {\n  content: \"\\f118\"; }\n\n.foawe-smile-beam:before {\n  content: \"\\f5b8\"; }\n\n.foawe-smile-wink:before {\n  content: \"\\f4da\"; }\n\n.foawe-smog:before {\n  content: \"\\f75f\"; }\n\n.foawe-smoking:before {\n  content: \"\\f48d\"; }\n\n.foawe-smoking-ban:before {\n  content: \"\\f54d\"; }\n\n.foawe-sms:before {\n  content: \"\\f7cd\"; }\n\n.foawe-snapchat:before {\n  content: \"\\f2ab\"; }\n\n.foawe-snapchat-ghost:before {\n  content: \"\\f2ac\"; }\n\n.foawe-snapchat-square:before {\n  content: \"\\f2ad\"; }\n\n.foawe-snowboarding:before {\n  content: \"\\f7ce\"; }\n\n.foawe-snowflake:before {\n  content: \"\\f2dc\"; }\n\n.foawe-snowman:before {\n  content: \"\\f7d0\"; }\n\n.foawe-snowplow:before {\n  content: \"\\f7d2\"; }\n\n.foawe-socks:before {\n  content: \"\\f696\"; }\n\n.foawe-solar-panel:before {\n  content: \"\\f5ba\"; }\n\n.foawe-sort:before {\n  content: \"\\f0dc\"; }\n\n.foawe-sort-alpha-down:before {\n  content: \"\\f15d\"; }\n\n.foawe-sort-alpha-up:before {\n  content: \"\\f15e\"; }\n\n.foawe-sort-amount-down:before {\n  content: \"\\f160\"; }\n\n.foawe-sort-amount-up:before {\n  content: \"\\f161\"; }\n\n.foawe-sort-down:before {\n  content: \"\\f0dd\"; }\n\n.foawe-sort-numeric-down:before {\n  content: \"\\f162\"; }\n\n.foawe-sort-numeric-up:before {\n  content: \"\\f163\"; }\n\n.foawe-sort-up:before {\n  content: \"\\f0de\"; }\n\n.foawe-soundcloud:before {\n  content: \"\\f1be\"; }\n\n.foawe-sourcetree:before {\n  content: \"\\f7d3\"; }\n\n.foawe-spa:before {\n  content: \"\\f5bb\"; }\n\n.foawe-space-shuttle:before {\n  content: \"\\f197\"; }\n\n.foawe-speakap:before {\n  content: \"\\f3f3\"; }\n\n.foawe-spider:before {\n  content: \"\\f717\"; }\n\n.foawe-spinner:before {\n  content: \"\\f110\"; }\n\n.foawe-splotch:before {\n  content: \"\\f5bc\"; }\n\n.foawe-spotify:before {\n  content: \"\\f1bc\"; }\n\n.foawe-spray-can:before {\n  content: \"\\f5bd\"; }\n\n.foawe-square:before {\n  content: \"\\f0c8\"; }\n\n.foawe-square-full:before {\n  content: \"\\f45c\"; }\n\n.foawe-square-root-alt:before {\n  content: \"\\f698\"; }\n\n.foawe-squarespace:before {\n  content: \"\\f5be\"; }\n\n.foawe-stack-exchange:before {\n  content: \"\\f18d\"; }\n\n.foawe-stack-overflow:before {\n  content: \"\\f16c\"; }\n\n.foawe-stamp:before {\n  content: \"\\f5bf\"; }\n\n.foawe-star:before {\n  content: \"\\f005\"; }\n\n.foawe-star-and-crescent:before {\n  content: \"\\f699\"; }\n\n.foawe-star-half:before {\n  content: \"\\f089\"; }\n\n.foawe-star-half-alt:before {\n  content: \"\\f5c0\"; }\n\n.foawe-star-of-david:before {\n  content: \"\\f69a\"; }\n\n.foawe-star-of-life:before {\n  content: \"\\f621\"; }\n\n.foawe-staylinked:before {\n  content: \"\\f3f5\"; }\n\n.foawe-steam:before {\n  content: \"\\f1b6\"; }\n\n.foawe-steam-square:before {\n  content: \"\\f1b7\"; }\n\n.foawe-steam-symbol:before {\n  content: \"\\f3f6\"; }\n\n.foawe-step-backward:before {\n  content: \"\\f048\"; }\n\n.foawe-step-forward:before {\n  content: \"\\f051\"; }\n\n.foawe-stethoscope:before {\n  content: \"\\f0f1\"; }\n\n.foawe-sticker-mule:before {\n  content: \"\\f3f7\"; }\n\n.foawe-sticky-note:before {\n  content: \"\\f249\"; }\n\n.foawe-stop:before {\n  content: \"\\f04d\"; }\n\n.foawe-stop-circle:before {\n  content: \"\\f28d\"; }\n\n.foawe-stopwatch:before {\n  content: \"\\f2f2\"; }\n\n.foawe-store:before {\n  content: \"\\f54e\"; }\n\n.foawe-store-alt:before {\n  content: \"\\f54f\"; }\n\n.foawe-strava:before {\n  content: \"\\f428\"; }\n\n.foawe-stream:before {\n  content: \"\\f550\"; }\n\n.foawe-street-view:before {\n  content: \"\\f21d\"; }\n\n.foawe-strikethrough:before {\n  content: \"\\f0cc\"; }\n\n.foawe-stripe:before {\n  content: \"\\f429\"; }\n\n.foawe-stripe-s:before {\n  content: \"\\f42a\"; }\n\n.foawe-stroopwafel:before {\n  content: \"\\f551\"; }\n\n.foawe-studiovinari:before {\n  content: \"\\f3f8\"; }\n\n.foawe-stumbleupon:before {\n  content: \"\\f1a4\"; }\n\n.foawe-stumbleupon-circle:before {\n  content: \"\\f1a3\"; }\n\n.foawe-subscript:before {\n  content: \"\\f12c\"; }\n\n.foawe-subway:before {\n  content: \"\\f239\"; }\n\n.foawe-suitcase:before {\n  content: \"\\f0f2\"; }\n\n.foawe-suitcase-rolling:before {\n  content: \"\\f5c1\"; }\n\n.foawe-sun:before {\n  content: \"\\f185\"; }\n\n.foawe-superpowers:before {\n  content: \"\\f2dd\"; }\n\n.foawe-superscript:before {\n  content: \"\\f12b\"; }\n\n.foawe-supple:before {\n  content: \"\\f3f9\"; }\n\n.foawe-surprise:before {\n  content: \"\\f5c2\"; }\n\n.foawe-suse:before {\n  content: \"\\f7d6\"; }\n\n.foawe-swatchbook:before {\n  content: \"\\f5c3\"; }\n\n.foawe-swimmer:before {\n  content: \"\\f5c4\"; }\n\n.foawe-swimming-pool:before {\n  content: \"\\f5c5\"; }\n\n.foawe-synagogue:before {\n  content: \"\\f69b\"; }\n\n.foawe-sync:before {\n  content: \"\\f021\"; }\n\n.foawe-sync-alt:before {\n  content: \"\\f2f1\"; }\n\n.foawe-syringe:before {\n  content: \"\\f48e\"; }\n\n.foawe-table:before {\n  content: \"\\f0ce\"; }\n\n.foawe-table-tennis:before {\n  content: \"\\f45d\"; }\n\n.foawe-tablet:before {\n  content: \"\\f10a\"; }\n\n.foawe-tablet-alt:before {\n  content: \"\\f3fa\"; }\n\n.foawe-tablets:before {\n  content: \"\\f490\"; }\n\n.foawe-tachometer-alt:before {\n  content: \"\\f3fd\"; }\n\n.foawe-tag:before {\n  content: \"\\f02b\"; }\n\n.foawe-tags:before {\n  content: \"\\f02c\"; }\n\n.foawe-tape:before {\n  content: \"\\f4db\"; }\n\n.foawe-tasks:before {\n  content: \"\\f0ae\"; }\n\n.foawe-taxi:before {\n  content: \"\\f1ba\"; }\n\n.foawe-teamspeak:before {\n  content: \"\\f4f9\"; }\n\n.foawe-teeth:before {\n  content: \"\\f62e\"; }\n\n.foawe-teeth-open:before {\n  content: \"\\f62f\"; }\n\n.foawe-telegram:before {\n  content: \"\\f2c6\"; }\n\n.foawe-telegram-plane:before {\n  content: \"\\f3fe\"; }\n\n.foawe-temperature-high:before {\n  content: \"\\f769\"; }\n\n.foawe-temperature-low:before {\n  content: \"\\f76b\"; }\n\n.foawe-tencent-weibo:before {\n  content: \"\\f1d5\"; }\n\n.foawe-tenge:before {\n  content: \"\\f7d7\"; }\n\n.foawe-terminal:before {\n  content: \"\\f120\"; }\n\n.foawe-text-height:before {\n  content: \"\\f034\"; }\n\n.foawe-text-width:before {\n  content: \"\\f035\"; }\n\n.foawe-th:before {\n  content: \"\\f00a\"; }\n\n.foawe-th-large:before {\n  content: \"\\f009\"; }\n\n.foawe-th-list:before {\n  content: \"\\f00b\"; }\n\n.foawe-the-red-yeti:before {\n  content: \"\\f69d\"; }\n\n.foawe-theater-masks:before {\n  content: \"\\f630\"; }\n\n.foawe-themeco:before {\n  content: \"\\f5c6\"; }\n\n.foawe-themeisle:before {\n  content: \"\\f2b2\"; }\n\n.foawe-thermometer:before {\n  content: \"\\f491\"; }\n\n.foawe-thermometer-empty:before {\n  content: \"\\f2cb\"; }\n\n.foawe-thermometer-full:before {\n  content: \"\\f2c7\"; }\n\n.foawe-thermometer-half:before {\n  content: \"\\f2c9\"; }\n\n.foawe-thermometer-quarter:before {\n  content: \"\\f2ca\"; }\n\n.foawe-thermometer-three-quarters:before {\n  content: \"\\f2c8\"; }\n\n.foawe-think-peaks:before {\n  content: \"\\f731\"; }\n\n.foawe-thumbs-down:before {\n  content: \"\\f165\"; }\n\n.foawe-thumbs-up:before {\n  content: \"\\f164\"; }\n\n.foawe-thumbtack:before {\n  content: \"\\f08d\"; }\n\n.foawe-ticket-alt:before {\n  content: \"\\f3ff\"; }\n\n.foawe-times:before {\n  content: \"\\f00d\"; }\n\n.foawe-times-circle:before {\n  content: \"\\f057\"; }\n\n.foawe-tint:before {\n  content: \"\\f043\"; }\n\n.foawe-tint-slash:before {\n  content: \"\\f5c7\"; }\n\n.foawe-tired:before {\n  content: \"\\f5c8\"; }\n\n.foawe-toggle-off:before {\n  content: \"\\f204\"; }\n\n.foawe-toggle-on:before {\n  content: \"\\f205\"; }\n\n.foawe-toilet:before {\n  content: \"\\f7d8\"; }\n\n.foawe-toilet-paper:before {\n  content: \"\\f71e\"; }\n\n.foawe-toolbox:before {\n  content: \"\\f552\"; }\n\n.foawe-tools:before {\n  content: \"\\f7d9\"; }\n\n.foawe-tooth:before {\n  content: \"\\f5c9\"; }\n\n.foawe-torah:before {\n  content: \"\\f6a0\"; }\n\n.foawe-torii-gate:before {\n  content: \"\\f6a1\"; }\n\n.foawe-tractor:before {\n  content: \"\\f722\"; }\n\n.foawe-trade-federation:before {\n  content: \"\\f513\"; }\n\n.foawe-trademark:before {\n  content: \"\\f25c\"; }\n\n.foawe-traffic-light:before {\n  content: \"\\f637\"; }\n\n.foawe-train:before {\n  content: \"\\f238\"; }\n\n.foawe-tram:before {\n  content: \"\\f7da\"; }\n\n.foawe-transgender:before {\n  content: \"\\f224\"; }\n\n.foawe-transgender-alt:before {\n  content: \"\\f225\"; }\n\n.foawe-trash:before {\n  content: \"\\f1f8\"; }\n\n.foawe-trash-alt:before {\n  content: \"\\f2ed\"; }\n\n.foawe-tree:before {\n  content: \"\\f1bb\"; }\n\n.foawe-trello:before {\n  content: \"\\f181\"; }\n\n.foawe-tripadvisor:before {\n  content: \"\\f262\"; }\n\n.foawe-trophy:before {\n  content: \"\\f091\"; }\n\n.foawe-truck:before {\n  content: \"\\f0d1\"; }\n\n.foawe-truck-loading:before {\n  content: \"\\f4de\"; }\n\n.foawe-truck-monster:before {\n  content: \"\\f63b\"; }\n\n.foawe-truck-moving:before {\n  content: \"\\f4df\"; }\n\n.foawe-truck-pickup:before {\n  content: \"\\f63c\"; }\n\n.foawe-tshirt:before {\n  content: \"\\f553\"; }\n\n.foawe-tty:before {\n  content: \"\\f1e4\"; }\n\n.foawe-tumblr:before {\n  content: \"\\f173\"; }\n\n.foawe-tumblr-square:before {\n  content: \"\\f174\"; }\n\n.foawe-tv:before {\n  content: \"\\f26c\"; }\n\n.foawe-twitch:before {\n  content: \"\\f1e8\"; }\n\n.foawe-twitter:before {\n  content: \"\\f099\"; }\n\n.foawe-twitter-square:before {\n  content: \"\\f081\"; }\n\n.foawe-typo3:before {\n  content: \"\\f42b\"; }\n\n.foawe-uber:before {\n  content: \"\\f402\"; }\n\n.foawe-ubuntu:before {\n  content: \"\\f7df\"; }\n\n.foawe-uikit:before {\n  content: \"\\f403\"; }\n\n.foawe-umbrella:before {\n  content: \"\\f0e9\"; }\n\n.foawe-umbrella-beach:before {\n  content: \"\\f5ca\"; }\n\n.foawe-underline:before {\n  content: \"\\f0cd\"; }\n\n.foawe-undo:before {\n  content: \"\\f0e2\"; }\n\n.foawe-undo-alt:before {\n  content: \"\\f2ea\"; }\n\n.foawe-uniregistry:before {\n  content: \"\\f404\"; }\n\n.foawe-universal-access:before {\n  content: \"\\f29a\"; }\n\n.foawe-university:before {\n  content: \"\\f19c\"; }\n\n.foawe-unlink:before {\n  content: \"\\f127\"; }\n\n.foawe-unlock:before {\n  content: \"\\f09c\"; }\n\n.foawe-unlock-alt:before {\n  content: \"\\f13e\"; }\n\n.foawe-untappd:before {\n  content: \"\\f405\"; }\n\n.foawe-upload:before {\n  content: \"\\f093\"; }\n\n.foawe-ups:before {\n  content: \"\\f7e0\"; }\n\n.foawe-usb:before {\n  content: \"\\f287\"; }\n\n.foawe-user:before {\n  content: \"\\f007\"; }\n\n.foawe-user-alt:before {\n  content: \"\\f406\"; }\n\n.foawe-user-alt-slash:before {\n  content: \"\\f4fa\"; }\n\n.foawe-user-astronaut:before {\n  content: \"\\f4fb\"; }\n\n.foawe-user-check:before {\n  content: \"\\f4fc\"; }\n\n.foawe-user-circle:before {\n  content: \"\\f2bd\"; }\n\n.foawe-user-clock:before {\n  content: \"\\f4fd\"; }\n\n.foawe-user-cog:before {\n  content: \"\\f4fe\"; }\n\n.foawe-user-edit:before {\n  content: \"\\f4ff\"; }\n\n.foawe-user-friends:before {\n  content: \"\\f500\"; }\n\n.foawe-user-graduate:before {\n  content: \"\\f501\"; }\n\n.foawe-user-injured:before {\n  content: \"\\f728\"; }\n\n.foawe-user-lock:before {\n  content: \"\\f502\"; }\n\n.foawe-user-md:before {\n  content: \"\\f0f0\"; }\n\n.foawe-user-minus:before {\n  content: \"\\f503\"; }\n\n.foawe-user-ninja:before {\n  content: \"\\f504\"; }\n\n.foawe-user-plus:before {\n  content: \"\\f234\"; }\n\n.foawe-user-secret:before {\n  content: \"\\f21b\"; }\n\n.foawe-user-shield:before {\n  content: \"\\f505\"; }\n\n.foawe-user-slash:before {\n  content: \"\\f506\"; }\n\n.foawe-user-tag:before {\n  content: \"\\f507\"; }\n\n.foawe-user-tie:before {\n  content: \"\\f508\"; }\n\n.foawe-user-times:before {\n  content: \"\\f235\"; }\n\n.foawe-users:before {\n  content: \"\\f0c0\"; }\n\n.foawe-users-cog:before {\n  content: \"\\f509\"; }\n\n.foawe-usps:before {\n  content: \"\\f7e1\"; }\n\n.foawe-ussunnah:before {\n  content: \"\\f407\"; }\n\n.foawe-utensil-spoon:before {\n  content: \"\\f2e5\"; }\n\n.foawe-utensils:before {\n  content: \"\\f2e7\"; }\n\n.foawe-vaadin:before {\n  content: \"\\f408\"; }\n\n.foawe-vector-square:before {\n  content: \"\\f5cb\"; }\n\n.foawe-venus:before {\n  content: \"\\f221\"; }\n\n.foawe-venus-double:before {\n  content: \"\\f226\"; }\n\n.foawe-venus-mars:before {\n  content: \"\\f228\"; }\n\n.foawe-viacoin:before {\n  content: \"\\f237\"; }\n\n.foawe-viadeo:before {\n  content: \"\\f2a9\"; }\n\n.foawe-viadeo-square:before {\n  content: \"\\f2aa\"; }\n\n.foawe-vial:before {\n  content: \"\\f492\"; }\n\n.foawe-vials:before {\n  content: \"\\f493\"; }\n\n.foawe-viber:before {\n  content: \"\\f409\"; }\n\n.foawe-video:before {\n  content: \"\\f03d\"; }\n\n.foawe-video-slash:before {\n  content: \"\\f4e2\"; }\n\n.foawe-vihara:before {\n  content: \"\\f6a7\"; }\n\n.foawe-vimeo:before {\n  content: \"\\f40a\"; }\n\n.foawe-vimeo-square:before {\n  content: \"\\f194\"; }\n\n.foawe-vimeo-v:before {\n  content: \"\\f27d\"; }\n\n.foawe-vine:before {\n  content: \"\\f1ca\"; }\n\n.foawe-vk:before {\n  content: \"\\f189\"; }\n\n.foawe-vnv:before {\n  content: \"\\f40b\"; }\n\n.foawe-volleyball-ball:before {\n  content: \"\\f45f\"; }\n\n.foawe-volume-down:before {\n  content: \"\\f027\"; }\n\n.foawe-volume-mute:before {\n  content: \"\\f6a9\"; }\n\n.foawe-volume-off:before {\n  content: \"\\f026\"; }\n\n.foawe-volume-up:before {\n  content: \"\\f028\"; }\n\n.foawe-vote-yea:before {\n  content: \"\\f772\"; }\n\n.foawe-vr-cardboard:before {\n  content: \"\\f729\"; }\n\n.foawe-vuejs:before {\n  content: \"\\f41f\"; }\n\n.foawe-walking:before {\n  content: \"\\f554\"; }\n\n.foawe-wallet:before {\n  content: \"\\f555\"; }\n\n.foawe-warehouse:before {\n  content: \"\\f494\"; }\n\n.foawe-water:before {\n  content: \"\\f773\"; }\n\n.foawe-weebly:before {\n  content: \"\\f5cc\"; }\n\n.foawe-weibo:before {\n  content: \"\\f18a\"; }\n\n.foawe-weight:before {\n  content: \"\\f496\"; }\n\n.foawe-weight-hanging:before {\n  content: \"\\f5cd\"; }\n\n.foawe-weixin:before {\n  content: \"\\f1d7\"; }\n\n.foawe-whatsapp:before {\n  content: \"\\f232\"; }\n\n.foawe-whatsapp-square:before {\n  content: \"\\f40c\"; }\n\n.foawe-wheelchair:before {\n  content: \"\\f193\"; }\n\n.foawe-whmcs:before {\n  content: \"\\f40d\"; }\n\n.foawe-wifi:before {\n  content: \"\\f1eb\"; }\n\n.foawe-wikipedia-w:before {\n  content: \"\\f266\"; }\n\n.foawe-wind:before {\n  content: \"\\f72e\"; }\n\n.foawe-window-close:before {\n  content: \"\\f410\"; }\n\n.foawe-window-maximize:before {\n  content: \"\\f2d0\"; }\n\n.foawe-window-minimize:before {\n  content: \"\\f2d1\"; }\n\n.foawe-window-restore:before {\n  content: \"\\f2d2\"; }\n\n.foawe-windows:before {\n  content: \"\\f17a\"; }\n\n.foawe-wine-bottle:before {\n  content: \"\\f72f\"; }\n\n.foawe-wine-glass:before {\n  content: \"\\f4e3\"; }\n\n.foawe-wine-glass-alt:before {\n  content: \"\\f5ce\"; }\n\n.foawe-wix:before {\n  content: \"\\f5cf\"; }\n\n.foawe-wizards-of-the-coast:before {\n  content: \"\\f730\"; }\n\n.foawe-wolf-pack-battalion:before {\n  content: \"\\f514\"; }\n\n.foawe-won-sign:before {\n  content: \"\\f159\"; }\n\n.foawe-wordpress:before {\n  content: \"\\f19a\"; }\n\n.foawe-wordpress-simple:before {\n  content: \"\\f411\"; }\n\n.foawe-wpbeginner:before {\n  content: \"\\f297\"; }\n\n.foawe-wpexplorer:before {\n  content: \"\\f2de\"; }\n\n.foawe-wpforms:before {\n  content: \"\\f298\"; }\n\n.foawe-wpressr:before {\n  content: \"\\f3e4\"; }\n\n.foawe-wrench:before {\n  content: \"\\f0ad\"; }\n\n.foawe-x-ray:before {\n  content: \"\\f497\"; }\n\n.foawe-xbox:before {\n  content: \"\\f412\"; }\n\n.foawe-xing:before {\n  content: \"\\f168\"; }\n\n.foawe-xing-square:before {\n  content: \"\\f169\"; }\n\n.foawe-y-combinator:before {\n  content: \"\\f23b\"; }\n\n.foawe-yahoo:before {\n  content: \"\\f19e\"; }\n\n.foawe-yandex:before {\n  content: \"\\f413\"; }\n\n.foawe-yandex-international:before {\n  content: \"\\f414\"; }\n\n.foawe-yarn:before {\n  content: \"\\f7e3\"; }\n\n.foawe-yelp:before {\n  content: \"\\f1e9\"; }\n\n.foawe-yen-sign:before {\n  content: \"\\f157\"; }\n\n.foawe-yin-yang:before {\n  content: \"\\f6ad\"; }\n\n.foawe-yoast:before {\n  content: \"\\f2b1\"; }\n\n.foawe-youtube:before {\n  content: \"\\f167\"; }\n\n.foawe-youtube-square:before {\n  content: \"\\f431\"; }\n\n.foawe-zhihu:before {\n  content: \"\\f63f\"; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n@font-face {\n  font-family: 'Font Awesome 5 Brands';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"../matter-webfont/foawe-brands-400.eot\");\n  src: url(\"../matter-webfont/foawe-brands-400.eot?#iefix\") format(\"embedded-opentype\"), url(\"../matter-webfont/foawe-brands-400.woff2\") format(\"woff2\"), url(\"../matter-webfont/foawe-brands-400.woff\") format(\"woff\"), url(\"../matter-webfont/foawe-brands-400.ttf\") format(\"truetype\"), url(\"../matter-webfont/foawe-brands-400.svg#fontawesome\") format(\"svg\"); }\n\n.foaweb {\n  font-family: 'Font Awesome 5 Brands'; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"../matter-webfont/foawe-regular-400.eot\");\n  src: url(\"../matter-webfont/foawe-regular-400.eot?#iefix\") format(\"embedded-opentype\"), url(\"../matter-webfont/foawe-regular-400.woff2\") format(\"woff2\"), url(\"../matter-webfont/foawe-regular-400.woff\") format(\"woff\"), url(\"../matter-webfont/foawe-regular-400.ttf\") format(\"truetype\"), url(\"../matter-webfont/foawe-regular-400.svg#fontawesome\") format(\"svg\"); }\n\n.foawer {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 400; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 900;\n  src: url(\"../matter-webfont/foawe-solid-900.eot\");\n  src: url(\"../matter-webfont/foawe-solid-900.eot?#iefix\") format(\"embedded-opentype\"), url(\"../matter-webfont/foawe-solid-900.woff2\") format(\"woff2\"), url(\"../matter-webfont/foawe-solid-900.woff\") format(\"woff\"), url(\"../matter-webfont/foawe-solid-900.ttf\") format(\"truetype\"), url(\"../matter-webfont/foawe-solid-900.svg#fontawesome\") format(\"svg\"); }\n\n.foawe,\n.foawes {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900; }\n";
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
            faIconType = 'foawer';
            break;
        case TYPES$1.LIGHT:
            faIconType = 'foawel';
            break;
        case TYPES$1.DEFAULT:
        default: faIconType = 'foawe';
    }
    return React.createElement("i", { className: emotion.cx(faIconType + " foawe-" + props.name, props.className) });
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
        React.createElement(CardAtom, { className: emotion.cx("pb3 relative flex " + (small ? 'flex-column h-100' : 'flex-row') + " align-center justify-" + (small ? 'start' : 'start'), hoverableCard$1, emotion.css(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["", ""], ["", ""])), small ? '' : 'height: auto')) },
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

var hoverableCard$2 = emotion.css(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"], ["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"])));
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
    return (React.createElement("div", { className: emotion.cx('flex flex-column', emotion.css(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "], ["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "])), small ? '20%' : '90%', small ? '250px' : '90%', small ? '55%' : '100%', small ? '250px' : '100%', small ? '75%' : '100%', small ? '250px' : '100%'), className) },
        React.createElement(CardAtom, { className: emotion.cx("pb3 relative flex " + (small ? 'flex-column h-100' : 'flex-row') + " align-center justify-" + (small ? 'start' : 'start'), hoverableCard$2, emotion.css(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["", ""], ["", ""])), small ? '' : 'height: auto')) },
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
var templateObject_1$f, templateObject_2$a, templateObject_3$6, templateObject_4$4, templateObject_5$4, templateObject_6$4;

var hoverableCard$3 = emotion.css(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"], ["\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);\n  :hover {\n    transform: translateY(0px);\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);\n  }\n"])));
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
    return (React.createElement("div", { className: emotion.cx('flex flex-column', emotion.css(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "], ["\n      width: ", ";\n      min-width: ", ";\n      @media only screen and (max-width: 968px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      @media only screen and (max-width: 480px) {\n        width: ", ";\n        min-width: ", ";\n      }\n      "])), small ? '20%' : '90%', small ? '250px' : '90%', small ? '55%' : '100%', small ? '250px' : '100%', small ? '75%' : '100%', small ? '250px' : '100%'), className) },
        React.createElement(CardAtom, { className: emotion.cx("pb3 relative flex " + (small ? 'flex-column h-100' : 'flex-row') + " align-center justify-" + (small ? 'start' : 'start'), hoverableCard$3, emotion.css(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["", ""], ["", ""])), small ? '' : 'height: auto')) },
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
var templateObject_1$g, templateObject_2$b, templateObject_3$7, templateObject_4$5, templateObject_5$5, templateObject_6$5;

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
                        React.createElement("p", { className: emotion.cx('f6 lh-copy', emotion.css(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["margin:0"], ["margin:0"])))) }, instructorRole))),
                React.createElement("div", { className: "dib v-mid" },
                    React.createElement("p", { className: emotion.cx('db f6 ma0 mt3') }, description)))));
    };
    return TeacherCardMolecule;
}(React.PureComponent));
var templateObject_1$h;

var avatarCircle$1 = 'border-radius: 100%;';
var CARD_TYPES$1 = {
    GREY: emotion.css(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n      display: inline-flex;\n      background: ", ";\n      border-radius: 8px;\n      box-shadow: none;\n      width: 30rem;\n      padding: 30px;\n    "], ["\n      display: inline-flex;\n      background: ", ";\n      border-radius: 8px;\n      box-shadow: none;\n      width: 30rem;\n      padding: 30px;\n    "])), COLORS.GREY.LIGHTER),
};
var TYPES_LIST$2 = {
    REGULAR_CIRCLE: emotion.css(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n      ", "\n        background: ", ";\n        width: 48px;\n        height: 48px;\n    "], ["\n      ", "\n        background: ", ";\n        width: 48px;\n        height: 48px;\n    "])), avatarCircle$1, COLORS.RED.NORMAL),
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
                        React.createElement("p", { className: emotion.cx('f6 lh-copy', emotion.css(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["margin:0"], ["margin:0"])))) }, date))),
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
var templateObject_1$i, templateObject_2$c, templateObject_3$8, templateObject_4$6, templateObject_5$6, templateObject_6$6, templateObject_7$4, templateObject_8$4;

var FooterMolecule = /** @class */ (function (_super) {
    __extends(FooterMolecule, _super);
    function FooterMolecule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    FooterMolecule.prototype.render = function () {
        var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children;
        return (React.createElement("footer", { "data-test": this.props['data-test'], className: emotion.cx(emotion.css(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["background: ", ""], ["background: ", ""])), COLORS.BLACK.DARKER), className) }, children));
    };
    return FooterMolecule;
}(React.PureComponent));
var templateObject_1$j;

var dotCss = emotion.css(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n"], ["\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n"]))); // prev 12
var fadePurple = emotion.keyframes(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  0%   { background: #DBE4E8; }\n  25% { background: #645AFF; }\n  50% { background: #645AFF; }\n  75% { background: #DBE4E8; }\n  100% { background: #DBE4E8; }\n"], ["\n  0%   { background: #DBE4E8; }\n  25% { background: #645AFF; }\n  50% { background: #645AFF; }\n  75% { background: #DBE4E8; }\n  100% { background: #DBE4E8; }\n"])));
var fadeRed = emotion.keyframes(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  0%   { background: #FF6260; }\n  25% { background: #DBE4E8; }\n  50% { background: #DBE4E8; }\n  75% { background: #FF6260; }\n  100%   { background: #FF6260; }\n"], ["\n  0%   { background: #FF6260; }\n  25% { background: #DBE4E8; }\n  50% { background: #DBE4E8; }\n  75% { background: #FF6260; }\n  100%   { background: #FF6260; }\n"])));
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
var templateObject_1$k, templateObject_2$d, templateObject_3$9, templateObject_4$7, templateObject_5$7, templateObject_6$7, templateObject_7$5;

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
            React.createElement("div", { role: "button", onClick: this.onFocus, tabIndex: 0, onKeyPress: this.onFocus, onFocus: this.onFocus, className: emotion.cx('w-100 ph3 pv1 br3 flex flex-row align-start outline-0', emotion.css(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n            background: ", ";\n            cursor: ", ";\n            border: 1px solid ", ";\n            transition: all 0.5s ease;\n            height: ", ";\n            @media screen and (min-width: 30em) {\n              height: ", ";\n            }\n          "], ["\n            background: ", ";\n            cursor: ", ";\n            border: 1px solid ", ";\n            transition: all 0.5s ease;\n            height: ", ";\n            @media screen and (min-width: 30em) {\n              height: ", ";\n            }\n          "])), COLORS.WHITE.NORMAL, disabled ? 'not-allowed' : 'pointer', error ? '#EB5757' : ((isFocus && !disabled) ? '#645AFF' : '#E8EDF2'), type === 'textarea' ? (height || 'auto') : '48px', type === 'textarea' ? (height || 'auto') : '56px')) },
                icon && (React.createElement(IconAtom, { name: icon, className: emotion.cx('self-center', emotion.css(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n                transition: 0.2s;\n                color: ", "\n              "], ["\n                transition: 0.2s;\n                color: ", "\n              "])), COLORS.BLACK.LIGHT)) })),
                React.createElement("div", { className: "w-100 ml2 flex flex-column justify-start align-start" },
                    React.createElement(TextAtom, { size: (isFocus || isActive) ? 'XS' : 'M', className: emotion.cx('bg-white ph2 self-start', emotion.css(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n                transition: all 0.4s ease;\n                color: ", ";\n                transform: translateY(", "px);\n                @media screen and (min-width: 30em) {\n                  transform: translateY(", "px);\n                }\n              "], ["\n                transition: all 0.4s ease;\n                color: ", ";\n                transform: translateY(", "px);\n                @media screen and (min-width: 30em) {\n                  transform: translateY(", "px);\n                }\n              "])), error ? '#EB5757' : ((isFocus && !disabled) ? '#645AFF' : '#8393A3'), (isFocus || isActive) ? -12 : 12, (isFocus || isActive) ? -13 : 13)) }, required && (isFocus || isActive)
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
var templateObject_1$l, templateObject_2$e, templateObject_3$a, templateObject_4$8, templateObject_5$8, templateObject_6$8, templateObject_7$6;

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
        return (React.createElement("div", { key: "learning-bar-" + id, id: id || 'svgWrapper', className: emotion.cx(emotion.css(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n            height: ", "px;\n            width: ", "px;\n        "], ["\n            height: ", "px;\n            width: ", "px;\n        "])), height + 50, width + 50), className) }));
    };
    return LearningTimeBarChartOrganism;
}(React.Component));
var templateObject_1$m;

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
