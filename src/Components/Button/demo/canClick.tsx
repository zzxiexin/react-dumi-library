import React from 'react';
import { Button } from 'react-ui-dumi-library';
import GlobalStyle from '../../globalStyle';
export default function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Button type="primary" id="component-demo" wait={6000}>
        按钮
      </Button>
    </>
  );
}
