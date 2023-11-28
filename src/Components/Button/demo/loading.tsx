import React from 'react';
import { Button } from 'yxhooks';
import '../../style.scss';
export default function App() {
  return (
    <div id="component-demo">
      <Button
        type="primary"
        loading
        onClick={() => console.log('loading中不能点击')}
      >
        加载中
      </Button>
      <Button
        type="primary"
        loading={false}
        onClick={() => console.log('loading完毕可以点击')}
      >
        加载完毕
      </Button>
    </div>
  );
}
