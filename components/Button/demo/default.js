import React from 'react';
import { Button } from 'react-ui-dumi-library';
import "../../style.scss";
export default function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "component-demo"
  }, /*#__PURE__*/React.createElement(Button, null, "Default"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return console.log('click');
    }
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    type: "dashed"
  }, "Dashed"), /*#__PURE__*/React.createElement(Button, {
    type: "danger"
  }, "Danger"), /*#__PURE__*/React.createElement(Button, {
    type: "link"
  }, "Link"), /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "Text"));
}