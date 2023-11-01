import React from 'react';
import { Button } from 'react-ui-dumi-library';
import '../../style.scss';
export default function App() {
  return (
    <div id="component-demo">
      <div style={{ width: 120 }}>
        <Button type="primary" block>
          自适应按钮
        </Button>
      </div>
      <div style={{ width: 200 }}>
        <Button type="primary" block>
          自适应按钮
        </Button>
      </div>
      <div style={{ width: '100%' }}>
        <Button type="primary" block>
          自适应按钮
        </Button>
      </div>
    </div>
  );
}
