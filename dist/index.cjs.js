'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$1 = ".button{\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  height:40px;\n  width:100px;\n  padding:15px;\n  font-size: 1rem;\n  border:none;\n  border-radius: 5%;\n  color:black;\n  cursor:pointer;\n  transition: all 0.3s ease;\n}\n\n.button:hover{\n  transform: scale(1.1);\n  opacity: 0.7;\n}\n\n.primary{\n  background-color: lightskyblue;\n}\n.secondary{\n  background-color: lightgray;;\n}\n.success{\n  background-color: rgb(144, 238, 160);\n}\n.danger{\n  background-color: lightcoral;\n}";
n(css$1,{});

var _excluded$1 = ["variant", "children"];
var Button = function Button(props) {
  var variant = props.variant,
    children = props.children,
    rest = _objectWithoutProperties(props, _excluded$1);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", _extends({
    className: "button ".concat(variant, " ")
  }, rest), children), /*#__PURE__*/React.createElement("button", {
    className: "button danger"
  }, children));
};

var css = ".input{\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  border:2px solid lightskyblue;\n  border-radius: 5%;\n  padding: 10px;\n  transition: all 0.3s ease;\n}\n\n.input:hover{\n  transform:scale(1.05);\n  border-color:cornflowerblue;\n}\n\n.small{\n  width:60px;\n  height:25px;\n  font-size:0.8rem;\n}\n\n.medium{\n  width:100px;\n  height:40px;\n  font-size:1rem;\n}\n\n.large{\n  width:150px;\n  height:50px;\n  font-size:1.5rem;\n}";
n(css,{});

var _excluded = ["size"];
var Input = function Input(props) {
  var size = props.size,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("input", _extends({
    className: "input ".concat(size)
  }, rest));
};

var returnLibrary = function returnLibrary() {
  return {
    Button: Button,
    Input: Input
  };
};
var index = returnLibrary();

module.exports = index;
