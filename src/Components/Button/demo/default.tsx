import React from 'react';
import { Button } from 'react-ui-dumi-library';
import GlobalStyle from '../../globalStyle';
export default function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Button id="component-demo">按钮</Button>
      <Button type="primary" id="component-demo">
        按钮
      </Button>
      <Button type="dashed" id="component-demo">
        按钮
      </Button>
      <Button type="danger" id="component-demo">
        按钮
      </Button>
      <Button type="link" id="component-demo">
        按钮
      </Button>
      <Button type="text" id="component-demo">
        按钮
      </Button>
      <Button type="dashed" icon={<div>icon</div>} id="component-demo">
        按钮
      </Button>
    </>
  );
}
