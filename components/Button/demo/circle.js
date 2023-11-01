import React from 'react';
import { Button } from 'react-ui-dumi-library';
import "../../style.scss";
export default function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "component-demo"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    shape: "circle"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "dashed",
    shape: "circle"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "danger",
    shape: "circle"
  }));
}