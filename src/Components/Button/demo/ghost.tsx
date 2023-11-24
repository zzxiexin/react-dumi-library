import React from 'react';
import { Button } from 'yhooks';
import '../../style.scss';
export default function App() {
  return (
    <div
      id="component-demo"
      style={{ background: 'rgb(190, 200, 200)', padding: 10 }}
    >
      <Button ghost onClick={() => console.log('click')}>
        Default
      </Button>
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button type="dashed" ghost>
        Dashed
      </Button>
      <Button type="danger" ghost>
        Danger
      </Button>
      <Button type="link" ghost>
        Link
      </Button>
      <Button type="text" ghost>
        Text
      </Button>
    </div>
  );
}
