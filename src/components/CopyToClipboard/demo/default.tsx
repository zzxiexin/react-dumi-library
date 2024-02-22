import React from 'react';
import { Button, CopyToClipboard } from 'yxhooks';
import '../../style.scss';
export default function App() {
  return (
    <div id="component-demo">
      <CopyToClipboard text="复制文本">
        <Button type="primary">复制文本</Button>
      </CopyToClipboard>

      <CopyToClipboard
        text="复制文本带回调"
        onCopy={() => console.log('copied')}
      >
        <Button type="primary">复制文本带回调</Button>
      </CopyToClipboard>
    </div>
  );
}
