import React from 'react';
import { Button } from 'react-ui-dumi-library';
import '../../style.scss';
export default function App() {
  return (
    <div id="component-demo">
      <Button type="primary" shape="circle" />
      <Button type="dashed" shape="circle" />
      <Button type="danger" shape="circle" />
    </div>
  );
}
