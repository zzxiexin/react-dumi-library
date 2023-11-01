import React from 'react';
import { Button } from 'react-ui-dumi-library';
import "../../style.scss";
export default function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "component-demo"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    debounce: 3,
    onClick: function onClick() {
      return console.log('click');
    }
  }, "\u9632\u6296\u6309\u94AE"));
}