import React from 'react';
import { Button } from 'react-ui-dumi-library';
import "../../style.scss";
export default function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "component-demo",
    style: {
      background: 'rgb(190, 200, 200)',
      padding: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: function onClick() {
      return console.log('click');
    }
  }, "Default"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    ghost: true
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    type: "dashed",
    ghost: true
  }, "Dashed"), /*#__PURE__*/React.createElement(Button, {
    type: "danger",
    ghost: true
  }, "Danger"), /*#__PURE__*/React.createElement(Button, {
    type: "link",
    ghost: true
  }, "Link"), /*#__PURE__*/React.createElement(Button, {
    type: "text",
    ghost: true
  }, "Text"));
}