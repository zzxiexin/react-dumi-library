import { HomeOutlined } from '@ant-design/icons';
import React from 'react';
import { Button } from 'react-ui-dumi-library';
import "../../style.scss";
export default function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "component-demo"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    icon: /*#__PURE__*/React.createElement(HomeOutlined, {
      style: {
        marginRight: 5
      }
    })
  }, "icon"));
}