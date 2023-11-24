import React from 'react';
import { Button } from 'yhooks';
import '../../style.scss';
export default function App() {
  return (
    <div id="component-demo">
      <Button>Default</Button>
      <Button type="primary" onClick={() => console.log('click')}>
        Primary
      </Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <Button type="text">Text</Button>
    </div>
  );
}
