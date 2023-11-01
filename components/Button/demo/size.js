import React from 'react';
import { Button } from 'react-ui-dumi-library';
import "../../style.scss";
export default function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "component-demo"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "large"
  }, "Large"), /*#__PURE__*/React.createElement(Button, {
    type: "danger"
  }, "Default"), /*#__PURE__*/React.createElement(Button, {
    type: "dashed",
    size: "small"
  }, "Small"));
}