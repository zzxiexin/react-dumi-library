import React from 'react';
import { Button } from 'react-ui-dumi-library';
import "../../style.scss";
export default function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "component-demo"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    loading: true,
    onClick: function onClick() {
      return console.log('loading中不能点击');
    }
  }, "\u52A0\u8F7D\u4E2D"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    loadin: false,
    onClick: function onClick() {
      return console.log('loading完毕可以点击');
    }
  }, "\u52A0\u8F7D\u5B8C\u6BD5"));
}