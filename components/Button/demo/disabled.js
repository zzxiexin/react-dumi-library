import React from 'react';
import { Button } from 'react-ui-dumi-library';
import "../../style.scss";
export default function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "component-demo"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    disabled: true,
    onClick: function onClick() {
      return console.log('click');
    }
  }, "Primary disabled"), /*#__PURE__*/React.createElement(Button, {
    type: "dashed",
    size: "small",
    disabled: true
  }, "Dashed disabled"));
}