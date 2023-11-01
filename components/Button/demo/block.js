import React from 'react';
import { Button } from 'react-ui-dumi-library';
import "../../style.scss";
export default function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "component-demo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    block: true
  }, "\u81EA\u9002\u5E94\u6309\u94AE")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    block: true
  }, "\u81EA\u9002\u5E94\u6309\u94AE")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    block: true
  }, "\u81EA\u9002\u5E94\u6309\u94AE")));
}